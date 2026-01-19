"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    mounted: boolean;
    isDark: boolean;
    isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Script to inject before hydration to prevent flash
export const themeScript = `
(function() {
    try {
        var savedTheme = localStorage.getItem("theme");
        var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var isDark = savedTheme === "dark" || (savedTheme !== "light" && systemDark);
        document.documentElement.classList.toggle("dark", isDark);
    } catch (e) {}
})();
`;

function getSystemTheme(): ResolvedTheme {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getResolvedTheme(theme: Theme): ResolvedTheme {
    if (theme === "system") {
        return getSystemTheme();
    }
    return theme;
}

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = "system" }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => {
        // This runs only on client after hydration, but script already set the class
        if (typeof window === "undefined") return defaultTheme;
        const saved = localStorage.getItem("theme") as Theme | null;
        return saved || defaultTheme;
    });
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
        if (typeof window === "undefined") return "dark";
        return getResolvedTheme(theme);
    });
    const [mounted, setMounted] = useState(false);

    // Apply theme to document and update resolved theme
    const applyTheme = useCallback((newTheme: Theme) => {
        const resolved = getResolvedTheme(newTheme);
        setResolvedTheme(resolved);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(resolved);
    }, []);

    // Initial mount and sync
    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme") as Theme | null;
        const effectiveTheme = saved || defaultTheme;
        setThemeState(effectiveTheme);
        applyTheme(effectiveTheme);
    }, [defaultTheme, applyTheme]);

    // Listen for system theme changes when theme is "system"
    useEffect(() => {
        if (theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            applyTheme("system");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme, applyTheme]);

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    }, [applyTheme]);

    const toggleTheme = useCallback(() => {
        // Toggle cycles: system -> light -> dark -> system
        // Or simpler: just toggle between light and dark, removing system
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    }, [resolvedTheme, setTheme]);

    const value = {
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        mounted,
        isDark: resolvedTheme === "dark",
        isLight: resolvedTheme === "light",
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

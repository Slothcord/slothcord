"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/use-theme";
import { navLinks } from "@/data/navigation";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { resolvedTheme, toggleTheme, mounted } = useTheme();

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                {/* Floating container */}
                <div className="flex items-center gap-3 px-5 py-3 bg-card/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/40">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 px-3 group">
                        <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#1d7dc7] to-[#31aada] shadow-lg group-hover:from-[#31aada] group-hover:to-[#1d7dc7] transition-colors duration-300">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-base font-semibold text-foreground tracking-tight">
                            Slothcord
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2.5 text-[15px] font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px h-7 bg-border mx-2" />

                    {/* Right Section */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {mounted && (
                                resolvedTheme === "dark" ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                )
                            )}
                        </button>

                        <Link
                            href="/login"
                            className="hidden sm:block px-4 py-2.5 text-[15px] font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors duration-200"
                        >
                            Log in
                        </Link>

                        <Link href="/signup">
                            <Button size="lg" className="px-5 h-10 text-[15px]">
                                Sign up
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-x-0 top-24 z-40 lg:hidden transition-all duration-300",
                    isMobileMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div className="mx-4 p-4 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/40">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 text-[15px] font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="h-px bg-border my-2" />
                        <Link
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-3 text-[15px] font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors duration-200 sm:hidden"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen ? (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            ) : null}
        </>
    );
}

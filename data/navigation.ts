export const navLinks = [
    { label: "Store", href: "/store" },
    { label: "Pro", href: "/pro" },
    { label: "AI", href: "/ai" },
    { label: "iOS", href: "/ios" },
    { label: "Windows", href: "/windows" },
    { label: "Teams", href: "/teams" },
    { label: "Developers", href: "/developers" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
] as const;

export type NavLink = typeof navLinks[number];

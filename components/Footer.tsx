"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    NewTwitterIcon,
    InstagramIcon,
    Facebook01Icon,
    YoutubeIcon,
    TiktokIcon,
} from "@hugeicons/core-free-icons";

export function Footer() {
    const [language, setLanguage] = useState("English");

    const footerLinks = {
        product: [
            { name: "Download", href: "#" },
            { name: "Nitro", href: "#" },
            { name: "Status", href: "#" },
            { name: "App Directory", href: "#" },
        ],
        company: [
            { name: "About", href: "#" },
            { name: "Jobs", href: "#" },
            { name: "Brand", href: "#" },
            { name: "Newsroom", href: "#" },
        ],
        resources: [
            { name: "Support", href: "#" },
            { name: "Safety", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Creators", href: "#" },
            { name: "Community", href: "#" },
            { name: "Developers", href: "#" },
            { name: "Quests", href: "#" },
            { name: "Official 3rd Party Merch", href: "#" },
            { name: "Feedback", href: "#" },
        ],
        policies: [
            { name: "Terms", href: "#" },
            { name: "Privacy", href: "#" },
            { name: "Cookie Settings", href: "#" },
            { name: "Guidelines", href: "#" },
            { name: "Acknowledgements", href: "#" },
            { name: "Licenses", href: "#" },
            { name: "Company Information", href: "#" },
        ],
    };

    const socialLinks = [
        { name: "Twitter", icon: NewTwitterIcon, href: "#" },
        { name: "Instagram", icon: InstagramIcon, href: "#" },
        { name: "Facebook", icon: Facebook01Icon, href: "#" },
        { name: "YouTube", icon: YoutubeIcon, href: "#" },
        { name: "TikTok", icon: TiktokIcon, href: "#" },
    ];

    return (
        <footer className="relative bg-cyan-500 text-slate-900 overflow-hidden rounded-t-[50px]">
            {/* Large Background Text */}
            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
                <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none text-white/[0.08]">
                    Slothcord
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Product Column */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-slate-900">Product</h3>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-700 hover:text-slate-900 hover:underline transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-slate-900">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-700 hover:text-slate-900 hover:underline transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-slate-900">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-700 hover:text-slate-900 hover:underline transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies Column */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-slate-900">Policies</h3>
                        <ul className="space-y-2">
                            {footerLinks.policies.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-700 hover:text-slate-900 hover:underline transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Language Column */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <div className="space-y-6">
                            {/* Language Selector */}
                            <div>
                                <label className="block font-bold text-sm mb-2 text-slate-900">
                                    Language
                                </label>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full px-3 py-2 bg-white/50 border border-slate-900/20 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
                                >
                                    <option>English</option>
                                    <option>Español</option>
                                    <option>Français</option>
                                    <option>Deutsch</option>
                                    <option>日本語</option>
                                </select>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="font-bold text-sm mb-4 text-slate-900">Social</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.href}
                                            className="size-9 flex items-center justify-center rounded-full bg-slate-900/10 hover:bg-slate-900/20 transition-colors"
                                            aria-label={social.name}
                                        >
                                            <HugeiconsIcon icon={social.icon} size={18} className="text-slate-900" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900/20 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="text-3xl">🦥</div>
                        <span className="font-bold text-xl text-slate-900 group-hover:opacity-80 transition-opacity">
                            Slothcord
                        </span>
                    </Link>

                    {/* Sign Up Button */}
                    <Link
                        href="/signup"
                        className="px-6 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 hover:shadow-lg transition-all"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </footer>
    );
}

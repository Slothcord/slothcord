"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mic01Icon,
    Video01Icon,
    ShieldUserIcon,
} from "@hugeicons/core-free-icons";
import TextFade from "@/components/pixel-perfect/text-fade";
import { ScrollingWaveform } from "@/components/ui/waveform";
import { Marquee } from "@/components/Marquee";
import { Iphone } from "@/components/ui/iphone";
import { Safari } from "@/components/ui/safari";

// Feature Section Component
function FeatureSection({
    title,
    description,
    children,
    reverse = false,
    darkBg = false,
}: {
    title: string;
    description: string;
    children: React.ReactNode;
    reverse?: boolean;
    darkBg?: boolean;
}) {
    return (

        <section className={`relative py-20 md:py-32 px-4 overflow-hidden ${darkBg ? 'bg-neutral-900 text-white rounded-[50px] -mt-20 z-10' : 'bg-background z-0'}`}>



            {/* Diagonal Stripe Pattern Background - Alternating */}
            {reverse && (
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
                        backgroundSize: '10px 10px',
                    }}
                />
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${darkBg ? 'text-white' : ''}`}>
                            {title}
                        </h2>
                        <TextFade
                            textContent={description}
                            className={`text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 ${darkBg ? 'text-gray-300' : 'text-muted-foreground'}`}
                        />
                    </motion.div>

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex-1 w-full max-w-xl"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Voice Call Illustration
const VoiceCallIllustration = React.memo(function VoiceCallIllustration() {
    const users = [
        { name: "xNightOwl", avatar: "https://i.pravatar.cc/80?img=1", speaking: true, muted: false, ping: 32 },
        { name: "sh4dow", avatar: "https://i.pravatar.cc/80?img=2", speaking: false, muted: true, ping: 45 },
        { name: "P1xel", avatar: "https://i.pravatar.cc/80?img=3", speaking: false, muted: false, ping: 28 },
        { name: "CryptoKing", avatar: "https://i.pravatar.cc/80?img=5", speaking: true, muted: false, ping: 51 },
        { name: "Luna", avatar: "https://i.pravatar.cc/80?img=9", speaking: false, muted: false, ping: 38 },
        { name: "Vortex", avatar: "https://i.pravatar.cc/80?img=7", speaking: false, muted: false, ping: 42 },
    ];

    return (
        <div className="h-full w-full bg-card overflow-hidden flex flex-col">
            {/* Top Header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-border bg-muted/30">
                <div className="flex items-center gap-1.5">
                    <HugeiconsIcon icon={Mic01Icon} size={14} className="text-green-500" />
                    <div className="flex flex-col">
                        <div className="font-bold text-foreground text-xs leading-tight">Ranked</div>
                        <div className="font-bold text-foreground text-xs leading-tight">Grind</div>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                    <div className="text-[10px] text-muted-foreground font-mono">
                        02:34:17
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-green-500">
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="size-1 bg-green-500 rounded-full"
                        />
                        <span>Stable</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
                {/* Connection Status */}
                <div className="text-[10px] text-green-500 font-medium flex items-center gap-1">
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="size-1.5 bg-green-500 rounded-full"
                    />
                    Voice Connected • 6 members
                </div>

                {/* Audio Waveform Visualization */}
                <div className="relative h-10 bg-muted/30 rounded-lg border border-border overflow-hidden">
                    <ScrollingWaveform
                        height={40}
                        barWidth={2}
                        barGap={1.5}
                        barRadius={2}
                        barColor="rgb(34, 197, 94)"
                        speed={30}
                        fadeEdges={true}
                        fadeWidth={20}
                        className="absolute inset-0"
                    />
                    <div className="absolute top-1 left-2 text-[8px] text-muted-foreground font-medium z-10">
                        LIVE AUDIO
                    </div>
                </div>

                {/* User Grid */}
                <div className="grid grid-cols-2 gap-2">
                    {users.map((user, i) => (
                        <motion.div
                            key={user.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col items-center gap-1.5 p-2.5 rounded-lg border transition-all ${user.speaking
                                ? 'bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10'
                                : 'bg-muted/30 border-border hover:bg-muted/50'
                                }`}
                        >
                            {/* Speaking Indicator Glow */}
                            {user.speaking && (
                                <motion.div
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute inset-0 bg-green-500/5 rounded-lg blur-lg"
                                />
                            )}

                            {/* Avatar with Ring */}
                            <div className="relative z-10">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className={`size-11 rounded-full transition-all ${user.speaking
                                        ? 'ring-2 ring-green-500 ring-offset-2 ring-offset-card'
                                        : ''
                                        }`}
                                />
                                {/* Mic Status Badge */}
                                {user.speaking && !user.muted && (
                                    <motion.div
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="absolute -bottom-0.5 -right-0.5 size-4 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                                    >
                                        <HugeiconsIcon icon={Mic01Icon} size={10} className="text-white" />
                                    </motion.div>
                                )}
                                {user.muted && (
                                    <div className="absolute -bottom-0.5 -right-0.5 size-4 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="size-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* User Info */}
                            <div className="flex flex-col items-center gap-0.5 z-10">
                                <span className="text-[10px] font-semibold text-foreground">{user.name}</span>
                                <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                                    <span className={`size-1 rounded-full ${user.ping < 40 ? 'bg-green-500' : user.ping < 60 ? 'bg-yellow-500' : 'bg-red-500'}`} />
                                    <span>{user.ping}ms</span>
                                </div>
                            </div>

                            {/* Audio Bars for Speaking Users */}
                            {user.speaking && (
                                <div className="absolute top-1.5 right-1.5 flex gap-0.5 z-10">
                                    {[1, 2, 3].map((bar) => (
                                        <motion.div
                                            key={bar}
                                            animate={{ height: ['5px', '10px', '5px'] }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: bar * 0.1 }}
                                            className="w-0.5 bg-green-500 rounded-full shadow-sm"
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stream Control Buttons - Bottom */}
            <div className="border-t border-border bg-muted/20 px-3 py-2.5">
                <div className="flex items-center justify-center gap-2">
                    {/* Microphone Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="size-9 rounded-full bg-muted hover:bg-muted/80 border border-border flex items-center justify-center transition-all group"
                    >
                        <HugeiconsIcon icon={Mic01Icon} size={16} className="text-foreground group-hover:text-green-500 transition-colors" />
                    </motion.button>

                    {/* Video Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="size-9 rounded-full bg-muted hover:bg-muted/80 border border-border flex items-center justify-center transition-all group"
                    >
                        <HugeiconsIcon icon={Video01Icon} size={16} className="text-foreground group-hover:text-blue-500 transition-colors" />
                    </motion.button>

                    {/* Share Screen Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="size-9 rounded-full bg-muted hover:bg-muted/80 border border-border flex items-center justify-center transition-all group"
                    >
                        <svg className="size-4 text-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </motion.button>

                    {/* Hang Up Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="size-9 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all shadow-sm"
                    >
                        <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
    );
});

// Screen Share Illustration
const ScreenShareIllustration = React.memo(function ScreenShareIllustration() {
    return (
        <div className="h-full w-full bg-slate-950 overflow-hidden flex flex-col">
            {/* Video Player */}
            <div className="flex-1 relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden group">
                {/* Gaming Content Placeholder - High Quality Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-slate-900">
                    {/* Simulated Gaming Scene */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Background gradient to simulate game lighting */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

                            {/* Simulated game elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="size-16 bg-purple-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
                                        <HugeiconsIcon icon={Video01Icon} size={32} className="text-purple-400" />
                                    </div>
                                    <div className="text-white/80 font-bold text-xl">Competitive Match</div>
                                    <div className="text-white/50 text-sm">Live Gameplay Stream</div>
                                </div>
                            </div>

                            {/* Overlay elements */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-full shadow-lg">
                                <motion.div
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="size-2 bg-white rounded-full"
                                />
                                <span className="text-white text-xs font-bold">LIVE</span>
                            </div>

                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                                <svg className="size-3 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white text-xs font-medium">3 watching</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stream Controls - Bottom Bar */}
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6"
                >
                    {/* Stream Control Buttons */}
                    <div className="flex items-center justify-center gap-4">
                        {/* Microphone Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="size-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all group"
                        >
                            <HugeiconsIcon icon={Mic01Icon} size={20} className="text-white group-hover:text-green-400 transition-colors" />
                        </motion.button>

                        {/* Video Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="size-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all group"
                        >
                            <HugeiconsIcon icon={Video01Icon} size={20} className="text-white group-hover:text-blue-400 transition-colors" />
                        </motion.button>

                        {/* Share Screen Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="size-12 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/40 flex items-center justify-center transition-all group"
                        >
                            <svg className="size-5 text-primary group-hover:text-primary/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </motion.button>

                        {/* Hang Up Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="size-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all shadow-lg shadow-red-500/30"
                        >
                            <svg className="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Viewer Avatars - Always Visible */}
                <div className="absolute bottom-24 right-4">
                    <div className="flex flex-col gap-2">
                        {[1, 3, 5].map((img, i) => (
                            <motion.img
                                key={img}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                src={`https://i.pravatar.cc/40?img=${img}`}
                                className="size-8 rounded-full border-2 border-white/20 shadow-lg"
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

// Communities Illustration - Full Discord-style app with real chat
const CommunitiesIllustration = React.memo(function CommunitiesIllustration() {
    const messages = [
        { name: "xNightOwl", avatar: "https://i.pravatar.cc/32?img=1", message: "who's ready to grind tonight? 🎮", time: "8:42 PM", color: "text-red-400" },
        { name: "sh4dow", avatar: "https://i.pravatar.cc/32?img=2", message: "let's goooo", time: "8:43 PM", color: "text-green-400" },
        { name: "P1xel", avatar: "https://i.pravatar.cc/32?img=3", message: "I'm down, what are we playing?", time: "8:43 PM", color: "text-blue-400" },
        { name: "xNightOwl", avatar: "https://i.pravatar.cc/32?img=1", message: "ranked valorant, need one more", time: "8:44 PM", color: "text-red-400" },
        { name: "CryptoKing", avatar: "https://i.pravatar.cc/32?img=5", message: "bet, joining vc now 🎧", time: "8:44 PM", color: "text-purple-400" },
        { name: "sh4dow", avatar: "https://i.pravatar.cc/32?img=2", message: "let's get this W", time: "8:45 PM", color: "text-green-400" },
    ];

    return (
        <div className="h-full w-full bg-card overflow-hidden flex flex-col">
            <div className="h-full w-full bg-background/50 flex flex-col">

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-background/50">
                    <div className="px-3 py-2 border-b border-border flex items-center gap-2">
                        <span className="text-lg">#</span>
                        <span className="font-semibold text-sm text-foreground">lounge</span>
                    </div>

                    <div className="flex-1 p-3 space-y-3 overflow-hidden">
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex gap-2.5"
                            >
                                <Image src={msg.avatar} width={32} height={32} className="rounded-full" alt="" loading="lazy" quality={75} />
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className={`font-semibold text-sm ${msg.color}`}>{msg.name}</span>
                                        <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                                    </div>
                                    <p className="text-sm text-foreground/90">{msg.message}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-2">
                        <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground">
                            <span>+</span>
                            <span>Message #lounge</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

// Moderation Illustration - Settings panel with toggles
const ModerationIllustration = React.memo(function ModerationIllustration() {
    const settings = [
        { name: "Auto-Moderation", description: "Block spam & slurs", enabled: true, icon: "🛡️" },
        { name: "Verification", description: "Require phone/email", enabled: true, icon: "✅" },
        { name: "Slow Mode", description: "1 msg per 5 seconds", enabled: false, icon: "🐢" },
    ];

    const recentActions = [
        { user: "xNightOwl", avatar: "https://i.pravatar.cc/32?img=1", action: "assigned", role: "Admin", color: "text-red-400" },
        { user: "sh4dow", avatar: "https://i.pravatar.cc/32?img=2", action: "assigned", role: "Mod", color: "text-green-400" },
    ];

    return (
        <div className="h-full w-full bg-card overflow-hidden flex flex-col">

            <div className="flex h-[300px]">
                {/* Settings Sidebar */}
                <div className="w-[140px] bg-muted/30 border-r border-border p-3">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">Moderation</div>
                    {["Overview", "Roles", "Bans", "Auto-Mod", "Logs"].map((item, i) => (
                        <div
                            key={item}
                            className={`px-2 py-1.5 rounded text-sm cursor-pointer transition-colors ${i === 3 ? 'bg-muted text-foreground font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-5 overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="font-bold text-lg text-foreground">Auto-Moderation</h3>
                            <p className="text-sm text-muted-foreground">Keep your server safe</p>
                        </div>
                        <div className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full">
                            ✓ Active
                        </div>
                    </div>

                    <div className="space-y-2.5 mb-4">
                        {settings.map((setting, i) => (
                            <motion.div
                                key={setting.name}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center justify-between p-3 bg-muted/30 rounded-xl border border-border"
                            >
                                <div className="flex items-center gap-2.5">
                                    <span className="text-base">{setting.icon}</span>
                                    <div>
                                        <div className="font-medium text-sm text-foreground">{setting.name}</div>
                                        <div className="text-[11px] text-muted-foreground">{setting.description}</div>
                                    </div>
                                </div>
                                <div className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${setting.enabled ? 'bg-green-500' : 'bg-muted'}`}>
                                    <motion.div
                                        className="size-4 bg-white rounded-full shadow-sm"
                                        animate={{ x: setting.enabled ? 16 : 0 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">Recent Actions</div>
                    <div className="space-y-1.5">
                        {recentActions.map((action, i) => (
                            <motion.div
                                key={action.user}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-center gap-2 text-xs text-muted-foreground"
                            >
                                <Image src={action.avatar} width={20} height={20} className="rounded-full" alt="" loading="lazy" quality={75} />
                                <span className={`font-medium ${action.color}`}>{action.user}</span>
                                <span>{action.action}</span>
                                <span className={`px-1.5 py-0.5 rounded bg-muted/50 ${action.color}`}>{action.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});



export function Features() {
    return (
        <>
            <FeatureSection
                title="Crystal-clear voice that just hits different"
                description="Low-latency, high-quality voice and video calls. Whether you're clutching a 1v5 or just vibing with the squad, your comms stay crisp."
            >
                <div className="w-full max-w-[300px] mx-auto">
                    <Iphone className="shadow-2xl">
                        <VoiceCallIllustration />
                    </Iphone>
                </div>
            </FeatureSection>

            <FeatureSection
                title="Stream your gameplay to the squad"
                description="Share your screen instantly with zero lag. Go live, show off your plays, or watch your friends clutch up in real-time."
                reverse
                darkBg
            >
                <div className="w-full dark">
                    <Safari url="slothcord.gg/stream" className="shadow-2xl w-full">
                        <ScreenShareIllustration />
                    </Safari>
                </div>
            </FeatureSection>

            {/* Marquee Section */}
            <Marquee />

            <FeatureSection
                title="Build your own space"
                description="Create custom servers with channels for every vibe. Text, voice, video—organize your community exactly how you want it."
            >
                <div className="w-full max-w-[300px] mx-auto">
                    <Iphone className="shadow-2xl">
                        <CommunitiesIllustration />
                    </Iphone>
                </div>
            </FeatureSection>

            <FeatureSection
                title="Your server, your rules"
                description="Powerful mod tools and custom roles to keep your community safe. Assign permissions, set up auto-mod, and let the good vibes flow."
                reverse
                darkBg
            >
                <div className="w-full dark">
                    <Safari url="slothcord.gg/settings" className="shadow-2xl w-full">
                        <ModerationIllustration />
                    </Safari>
                </div>
            </FeatureSection>
        </>
    );
}



"use client";

import { Safari } from "@/components/ui/safari";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    PlusSignIcon,
    Mic01Icon,
    Settings01Icon,
    NotificationIcon,
    UserIcon,
    FileIcon,
    ComputerIcon,
    FlashIcon,
    PlayIcon,
    ArrowRight01Icon,
    Tick02Icon,
} from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import { TextBlurIn } from "@/components/blur-in";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { VolumeIcon, SmileyIcon, GamepadIcon, TrophyIcon, UsersIcon, PhoneXIcon } from "@/components/icons/CustomIcons";

export function Hero() {
    return (
        <section className="relative min-h-[calc(100dvh-5rem)] flex flex-col px-4 py-12 md:py-16 overflow-hidden rounded-b-[50px]">
            {/* Radial gradient background */}
            <div aria-hidden="true" className="absolute z-30 inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]" />

            <div className="w-full max-w-7xl mx-auto flex flex-col flex-1 relative z-40">
                {/* Hero Header */}
                <div className="text-center space-y-6 mb-12 md:mb-16">
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
                        <TextBlurIn
                            className="inline"
                            duration={0.6}
                            delay={0.2}
                            by="word"
                            staggerDelay={0.08}
                        >
                            All the perks, none of the paywall
                        </TextBlurIn>
                    </h1>

                    {/* Subheadline */}
                    <TextBlurIn
                        className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
                        duration={0.6}
                        delay={0.8}
                        by="word"
                        staggerDelay={0.03}
                    >
                        Customize your profile, use animated emojis, stream in HD. Everything Discord locks behind Nitro? Yours for free.
                    </TextBlurIn>

                    {/* Animated Avatars - Community Members */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                        className="flex justify-center pt-4"
                    >
                        <AnimatedTooltip
                            items={[
                                {
                                    id: 1,
                                    name: "xNightOwl",
                                    designation: "Admin",
                                    image: "https://i.pravatar.cc/150?img=1",
                                },
                                {
                                    id: 2,
                                    name: "sh4dow",
                                    designation: "Mod",
                                    image: "https://i.pravatar.cc/150?img=2",
                                },
                                {
                                    id: 3,
                                    name: "P1xel",
                                    designation: "VIP",
                                    image: "https://i.pravatar.cc/150?img=3",
                                },
                                {
                                    id: 4,
                                    name: "CryptoKing",
                                    designation: "Member",
                                    image: "https://i.pravatar.cc/150?img=5",
                                },
                                {
                                    id: 5,
                                    name: "Luna",
                                    designation: "Member",
                                    image: "https://i.pravatar.cc/150?img=7",
                                },
                            ]}
                        />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
                    >
                        <Link href="/download">
                            <Button size="lg" className="px-6 gap-2">
                                <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                                Download for Windows
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="lg" className="px-6">
                                Open in Browser
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* App Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="flex-1 w-full"
                >
                    {/* Main App Window */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <Safari
                            url="app.slothcord.gg"
                            className="w-full h-full shadow-2xl"
                        >
                            {/* App Content */}
                            <div className="flex w-full h-full bg-background">
                                {/* Server Sidebar */}
                                <div className="w-[72px] shrink-0 bg-muted/30 border-r border-border p-3 space-y-2 hidden sm:flex flex-col items-center">
                                    {/* Home/DMs */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="size-12 rounded-2xl hover:rounded-xl bg-muted flex items-center justify-center text-muted-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
                                    >
                                        <HugeiconsIcon icon={ComputerIcon} size={22} />
                                    </motion.div>
                                    <div className="w-8 h-0.5 bg-border rounded-full" />
                                    {/* Active Server */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="relative size-12 rounded-2xl hover:rounded-xl bg-primary flex items-center justify-center cursor-pointer transition-all duration-200"
                                    >
                                        <HugeiconsIcon icon={FlashIcon} size={24} className="text-primary-foreground" />
                                        {/* Active indicator */}
                                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-10 bg-foreground rounded-r-full" />
                                    </motion.div>
                                    {/* Other Servers */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="size-12 rounded-2xl hover:rounded-xl bg-muted flex items-center justify-center text-muted-foreground border border-border hover:bg-green-600 hover:text-white transition-all duration-200 cursor-pointer"
                                    >
                                        <GamepadIcon />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="size-12 rounded-2xl hover:rounded-xl bg-muted flex items-center justify-center text-muted-foreground border border-border hover:bg-yellow-600 hover:text-white transition-all duration-200 cursor-pointer"
                                    >
                                        <TrophyIcon />
                                    </motion.div>
                                    {/* Add Server */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="size-12 rounded-2xl hover:rounded-xl bg-muted border-2 border-dashed border-border flex items-center justify-center text-muted-foreground mt-auto hover:border-green-500 hover:text-green-500 hover:bg-green-500/10 transition-all duration-200 cursor-pointer"
                                    >
                                        <HugeiconsIcon icon={PlusSignIcon} size={20} />
                                    </motion.div>
                                </div>

                                {/* Channel List */}
                                <div className="w-60 shrink-0 bg-muted/15 border-r border-border p-3 hidden md:flex flex-col">
                                    <div className="flex items-center justify-between mb-5 px-1">
                                        <span className="text-sm font-bold text-foreground">Sloth Squad</span>
                                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">42 online</span>
                                    </div>

                                    {/* Text Channels */}
                                    <div className="mb-5">
                                        <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
                                            Text Channels
                                        </div>
                                        <div className="space-y-1">
                                            <ChannelItem name="lounge" active />
                                            <ChannelItem name="clips" badge="5" />
                                            <ChannelItem name="memes" badge="99+" />
                                            <ChannelItem name="lfg" />
                                        </div>
                                    </div>

                                    {/* Voice Channels */}
                                    <div className="flex-1">
                                        <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
                                            Voice Channels
                                        </div>
                                        <div className="space-y-1">
                                            <VoiceChannel name="Chill Zone" />
                                            <VoiceChannel name="Ranked Grind" users={[
                                                { name: "xNightOwl", avatar: "https://i.pravatar.cc/32?img=1" },
                                                { name: "sh4dow", avatar: "https://i.pravatar.cc/32?img=2" },
                                                { name: "P1xel", avatar: "https://i.pravatar.cc/32?img=3" },
                                            ]} active />
                                            <VoiceChannel name="AFK" />
                                        </div>
                                    </div>

                                    {/* User Panel */}
                                    <div className="mt-auto pt-3 border-t border-border">
                                        <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-muted/30 border border-border/50">
                                            <div className="relative">
                                                <img
                                                    src="https://i.pravatar.cc/32?img=8"
                                                    alt="You"
                                                    className="size-9 rounded-full ring-2 ring-border"
                                                />
                                                <motion.div
                                                    className="absolute -bottom-0.5 -right-0.5 size-3.5 bg-green-500 rounded-full border-2 border-card shadow-sm"
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-foreground truncate">You</div>
                                                <div className="text-[10px] text-green-500 font-medium">Online</div>
                                            </div>
                                            <div className="flex gap-1">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                                                    aria-label="Mute"
                                                >
                                                    <HugeiconsIcon icon={Mic01Icon} size={16} />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                                                    aria-label="Settings"
                                                >
                                                    <HugeiconsIcon icon={Settings01Icon} size={16} />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Area */}
                                <div className="flex-1 flex flex-col min-w-0 bg-background/50">
                                    {/* Channel Header */}
                                    <div className="px-4 py-3 border-b border-border flex items-center gap-3 bg-card/50">
                                        <span className="text-xl text-muted-foreground font-bold">#</span>
                                        <span className="font-bold text-foreground">lounge</span>
                                        <div className="w-px h-5 bg-border" />
                                        <span className="text-sm text-muted-foreground hidden sm:block truncate">Squad hangout & gaming talk</span>
                                        <div className="ml-auto flex items-center gap-1.5">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="relative p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors"
                                                aria-label="Notifications"
                                            >
                                                <HugeiconsIcon icon={NotificationIcon} size={18} />
                                                <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors"
                                                aria-label="Members"
                                            >
                                                <UsersIcon />
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Messages */}
                                    <div className="flex-1 p-4 space-y-4 overflow-hidden">
                                        {([
                                            { name: "xNightOwl", role: "admin" as const, time: "9:41 PM", avatar: "https://i.pravatar.cc/40?img=1", message: "yo anyone wanna run ranked? need 2 more", reaction: "🙋" },
                                            { name: "CryptoKing", role: "vip" as const, time: "9:41 PM", avatar: "https://i.pravatar.cc/40?img=5", message: "let's goooo i'm warming up rn" },
                                            { name: "sh4dow", role: "mod" as const, time: "9:42 PM", avatar: "https://i.pravatar.cc/40?img=2", message: "that last round was absolutely insane 🔥 we gotta clip that", reaction: "🔥" },
                                            { name: "P1xel", role: "member" as const, time: "9:43 PM", avatar: "https://i.pravatar.cc/40?img=3", message: "bro the clutch at the end was crazy, wp <mention>@sh4dow</mention>" },
                                            { name: "xNightOwl", role: "admin" as const, time: "9:44 PM", avatar: "https://i.pravatar.cc/40?img=1", message: "i'm down for another one, joining voice rn 🎮" }
                                        ]).map((msg, i) => (
                                            <motion.div
                                                key={`${msg.name}-${i}`}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.6 + i * 0.08, ease: "easeOut" }}
                                            >
                                                <ChatMessage {...msg} />
                                            </motion.div>
                                        ))}
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                                            <div className="flex gap-0.5">
                                                <motion.span
                                                    className="size-1.5 bg-muted-foreground/50 rounded-full"
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                                                />
                                                <motion.span
                                                    className="size-1.5 bg-muted-foreground/50 rounded-full"
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.15 }}
                                                />
                                                <motion.span
                                                    className="size-1.5 bg-muted-foreground/50 rounded-full"
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                                                />
                                            </div>
                                            <span>sh4dow is typing...</span>
                                        </div>
                                    </div>

                                    {/* Input */}
                                    <div className="p-3 border-t border-border bg-card/50">
                                        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border border-border rounded-lg">
                                            <motion.button
                                                whileHover={{ rotate: 90 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                                                aria-label="Add"
                                            >
                                                <HugeiconsIcon icon={PlusSignIcon} size={20} />
                                            </motion.button>
                                            <span className="flex-1 text-muted-foreground text-sm">Message #lounge</span>
                                            <div className="flex items-center gap-1">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                                                    aria-label="Attach"
                                                >
                                                    <HugeiconsIcon icon={FileIcon} size={18} />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                                                    aria-label="Emoji"
                                                >
                                                    <SmileyIcon />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Safari>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

const ChannelItem = React.memo(function ChannelItem({ name, active, badge }: {
    name: string;
    active?: boolean;
    badge?: string;
}) {
    return (
        <motion.div
            whileHover={{ x: 2 }}
            className={`px-2.5 py-2 rounded-lg text-sm flex items-center gap-2 cursor-pointer transition-all ${active
                ? "bg-muted text-foreground font-semibold border border-border/50"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
        >
            <span className={`text-lg ${active ? "text-foreground" : "text-muted-foreground/70"}`}>#</span>
            <span className="truncate">{name}</span>
            {badge && (
                <span className="ml-auto text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-md font-semibold">
                    {badge}
                </span>
            )}
        </motion.div>
    );
});

const VoiceChannel = React.memo(function VoiceChannel({ name, users, active }: {
    name: string;
    users?: { name: string; avatar: string }[];
    active?: boolean;
}) {
    return (
        <div>
            <motion.div
                whileHover={{ x: 2 }}
                className={`px-2.5 py-2 rounded-lg text-sm flex items-center gap-2 cursor-pointer transition-all ${active
                    ? "bg-green-500/15 text-green-600 dark:text-green-400 font-semibold border border-green-500/20"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
            >
                <VolumeIcon className={`size-3.5 shrink-0 ${active ? "text-green-600 dark:text-green-400" : ""}`} />
                <span className="truncate">{name}</span>
                {users && (
                    <span className="ml-auto text-[10px] bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-md font-semibold">
                        {users.length}
                    </span>
                )}
            </motion.div>
            {users && (
                <div className="ml-7 mt-1.5 space-y-1">
                    {users.map((user) => (
                        <motion.div
                            key={user.name}
                            whileHover={{ x: 2 }}
                            className="flex items-center gap-2 text-xs text-muted-foreground py-1 hover:text-foreground transition-colors cursor-pointer"
                        >
                            <Image src={user.avatar} alt={user.name} width={20} height={20} className="rounded-full ring-1 ring-border" loading="lazy" quality={75} />
                            <span className="truncate font-medium">{user.name}</span>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
});

const ChatMessage = React.memo(function ChatMessage({ name, time, avatar, message, reaction, role }: {
    name: string;
    time: string;
    avatar: string;
    message: string;
    reaction?: string;
    role?: "admin" | "mod" | "vip" | "member";
}) {
    const roleColors = {
        admin: "text-red-400 hover:text-red-300",
        mod: "text-green-400 hover:text-green-300",
        vip: "text-amber-400 hover:text-amber-300",
        member: "text-blue-400 hover:text-blue-300",
    };

    const nameColor = role ? roleColors[role] : "text-foreground";

    // Parse message to render mentions in blue
    const renderMessage = (msg: string) => {
        const parts = msg.split(/(<mention>.*?<\/mention>)/g);
        return parts.map((part, i) => {
            const mentionMatch = part.match(/<mention>(.*?)<\/mention>/);
            if (mentionMatch) {
                return (
                    <span key={i} className="text-blue-400 bg-blue-500/15 px-0.5 rounded cursor-pointer hover:underline">
                        {mentionMatch[1]}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="group flex items-start gap-3 hover:bg-muted/30 -mx-2 px-2 py-1.5 rounded-lg transition-colors">
            <Image src={avatar} alt={name} width={40} height={40} className="rounded-full shrink-0" loading="lazy" quality={75} />
            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                    <span className={`font-semibold text-sm hover:underline cursor-pointer ${nameColor}`}>{name}</span>
                    <span className="text-[10px] text-muted-foreground">{time}</span>
                </div>
                <p className="text-foreground/90 text-sm mt-0.5 leading-relaxed">{renderMessage(message)}</p>
                {reaction && (
                    <div className="flex gap-1 mt-1.5">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-muted/80 hover:bg-muted border border-border rounded text-xs cursor-pointer transition-colors">
                            {reaction} <span className="text-muted-foreground">1</span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
});

function VoiceParticipant({ avatar, speaking, muted }: {
    avatar: string;
    speaking?: boolean;
    muted?: boolean;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group"
        >
            <img
                src={avatar}
                alt="User"
                className={`size-12 rounded-full ring-2 ${speaking ? "ring-green-500 shadow-lg shadow-green-500/30" : "ring-border"}`}
            />
            {muted && (
                <div className="absolute -bottom-1 -right-1 size-6 bg-card rounded-full flex items-center justify-center border-2 border-border shadow-sm">
                    <HugeiconsIcon icon={Mic01Icon} size={12} className="text-red-500" />
                </div>
            )}
            {speaking && (
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 size-6 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/40"
                >
                    <VolumeIcon className="size-3.5" />
                </motion.div>
            )}
        </motion.div>
    );
}
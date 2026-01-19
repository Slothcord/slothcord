"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as motion from "motion/react-client";

export function Hero() {
    return (
        <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16">
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full rounded-full bg-primary opacity-75 animate-ping" />
                            <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                        Now in Beta
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <span className="text-foreground">Your Squad.</span>
                    <br />
                    <span className="text-primary">Your Vibe.</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 text-pretty"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                    The next-gen chat app built for gamers. Custom profiles, voice rooms, 
                    and vibes that hit different.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                    <Link href="/signup">
                        <Button size="lg" className="h-12 px-8 text-base rounded-lg">
                            Get Started Free
                            <ArrowRightIcon className="size-4 ml-2" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-lg">
                        <PlayIcon className="size-4 mr-2" />
                        Watch Demo
                    </Button>
                </motion.div>

                <motion.div
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                            <div className="flex gap-1.5">
                                <div className="size-3 rounded-full bg-red-500" />
                                <div className="size-3 rounded-full bg-yellow-500" />
                                <div className="size-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 text-center text-sm text-muted-foreground font-medium">
                                slothcord — #general
                            </div>
                        </div>
                        <div className="flex min-h-80">
                            <div className="hidden md:flex w-14 bg-muted/30 flex-col items-center py-3 gap-2 border-r border-border">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="size-10 rounded-xl bg-muted flex items-center justify-center">
                                        <span className="text-xs font-semibold text-muted-foreground">S{i}</span>
                                    </div>
                                ))}
                                <div className="size-10 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                                    <span className="text-lg text-muted-foreground/50">+</span>
                                </div>
                            </div>
                            <div className="hidden md:flex w-44 bg-card flex-col border-r border-border">
                                <div className="p-3 border-b border-border">
                                    <span className="font-semibold text-sm">Gamer Hub</span>
                                </div>
                                <div className="p-2 space-y-0.5">
                                    <ChannelItem name="general" active />
                                    <ChannelItem name="gaming" />
                                    <ChannelItem name="memes" />
                                    <div className="pt-2">
                                        <ChannelItem name="voice-lounge" isVoice />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="flex-1 p-4 space-y-4">
                                    <ChatMessage 
                                        name="NeonNinja"
                                        time="2:34 PM"
                                        message="yo who's down for ranked tonight?"
                                        color="bg-pink-500"
                                    />
                                    <ChatMessage 
                                        name="CyberSloth"
                                        time="2:35 PM"
                                        message="count me in! just hit diamond 💎"
                                        color="bg-cyan-500"
                                    />
                                    <ChatMessage 
                                        name="PixelQueen"
                                        time="2:36 PM"
                                        message="let's gooo!! i'll hop on in 20"
                                        color="bg-primary"
                                    />
                                </div>
                                <div className="p-3 border-t border-border">
                                    <div className="flex items-center px-4 py-2.5 bg-muted rounded-lg">
                                        <span className="text-sm text-muted-foreground">Message #general</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex w-44 bg-card flex-col border-l border-border p-3">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Online — 3</span>
                                <div className="space-y-2">
                                    <UserStatus name="NeonNinja" status="Playing Valorant" />
                                    <UserStatus name="CyberSloth" status="Online" />
                                    <UserStatus name="PixelQueen" status="Streaming" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                >
                    <div className="flex items-center gap-2">
                        <CheckIcon className="size-4 text-green-500" />
                        <span>Free Forever</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="size-4 text-green-500" />
                        <span>No Ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="size-4 text-green-500" />
                        <span>Encrypted</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ChannelItem({ name, active, isVoice }: { name: string; active?: boolean; isVoice?: boolean }) {
    return (
        <div className={cn(
            "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-colors",
            active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
        )}>
            {isVoice ? (
                <VoiceIcon className="size-4" />
            ) : (
                <span className="text-muted-foreground">#</span>
            )}
            <span className="truncate">{name}</span>
        </div>
    );
}

function ChatMessage({ name, time, message, color }: { name: string; time: string; message: string; color: string }) {
    return (
        <div className="flex items-start gap-3 group">
            <div className={cn("size-9 rounded-full flex-shrink-0", color)} />
            <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm text-foreground">{name}</span>
                    <span className="text-xs text-muted-foreground tabular-nums">{time}</span>
                </div>
                <p className="text-sm text-foreground/90">{message}</p>
            </div>
        </div>
    );
}

function UserStatus({ name, status }: { name: string; status: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <div className="size-8 rounded-full bg-muted" />
                <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-card" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground truncate">{name}</p>
                <p className="text-xs text-muted-foreground truncate">{status}</p>
            </div>
        </div>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    );
}

function PlayIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    );
}

function VoiceIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

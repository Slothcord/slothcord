"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 dark:from-violet-500/5 dark:to-cyan-500/5" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Now in Beta - Join 10K+ Gamers
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                    <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                        Your Squad.
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-violet-500 via-primary to-cyan-500 bg-clip-text text-transparent">
                        Your Vibe.
                    </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    The next-gen chat app built for gamers. Custom profiles, voice rooms, 
                    and vibes that hit different.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link href="/signup">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-gradient-to-r from-violet-600 to-primary hover:from-violet-500 hover:to-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
                            Get Started Free
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Demo
                    </Button>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-primary/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-2 shadow-2xl">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 text-center text-sm text-muted-foreground font-medium">
                                slothcord - #general-chat
                            </div>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center overflow-hidden">
                            <div className="flex flex-col md:flex-row w-full h-full">
                                <div className="hidden md:flex w-16 bg-muted/80 flex-col items-center py-4 gap-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 flex items-center justify-center">
                                            <span className="text-xs font-bold text-foreground/70">S{i}</span>
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                                        <span className="text-xl text-muted-foreground/50">+</span>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-48 bg-card/50 flex-col border-r border-border">
                                    <div className="p-3 border-b border-border">
                                        <span className="font-semibold text-sm">Gamer Hub</span>
                                    </div>
                                    <div className="p-2 space-y-1">
                                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-primary/10 text-primary text-sm">
                                            <span className="text-muted-foreground">#</span> general-chat
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-muted-foreground text-sm hover:bg-muted/50">
                                            <span>#</span> gaming
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-muted-foreground text-sm hover:bg-muted/50">
                                            <span>#</span> memes
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-muted-foreground text-sm hover:bg-muted/50 mt-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            voice-lounge
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="flex-1 p-4 space-y-4">
                                        <ChatMessage 
                                            avatar="bg-gradient-to-br from-pink-500 to-rose-500"
                                            name="NeonNinja"
                                            time="2:34 PM"
                                            message="yo who's down for ranked tonight?"
                                        />
                                        <ChatMessage 
                                            avatar="bg-gradient-to-br from-cyan-500 to-blue-500"
                                            name="CyberSloth"
                                            time="2:35 PM"
                                            message="count me in! just hit diamond"
                                        />
                                        <ChatMessage 
                                            avatar="bg-gradient-to-br from-violet-500 to-purple-500"
                                            name="PixelQueen"
                                            time="2:36 PM"
                                            message="let's gooo!! i'll hop on in 20"
                                        />
                                    </div>
                                    <div className="p-3 border-t border-border">
                                        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 rounded-xl">
                                            <span className="text-muted-foreground text-sm">Message #general-chat</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden lg:flex w-48 bg-card/50 flex-col border-l border-border p-3">
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Online — 3</span>
                                    <div className="space-y-2">
                                        <UserStatus name="NeonNinja" status="Playing Valorant" color="bg-green-500" />
                                        <UserStatus name="CyberSloth" status="Online" color="bg-green-500" />
                                        <UserStatus name="PixelQueen" status="Streaming" color="bg-violet-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Free Forever</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>No Ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>End-to-End Encrypted</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChatMessage({ avatar, name, time, message }: { avatar: string; name: string; time: string; message: string }) {
    return (
        <div className="flex items-start gap-3 group">
            <div className={`w-9 h-9 rounded-full ${avatar} flex-shrink-0`} />
            <div>
                <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm text-foreground">{name}</span>
                    <span className="text-xs text-muted-foreground">{time}</span>
                </div>
                <p className="text-sm text-foreground/90">{message}</p>
            </div>
        </div>
    );
}

function UserStatus({ name, status, color }: { name: string; status: string; color: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20" />
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${color} rounded-full border-2 border-card`} />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{name}</p>
                <p className="text-xs text-muted-foreground truncate">{status}</p>
            </div>
        </div>
    );
}

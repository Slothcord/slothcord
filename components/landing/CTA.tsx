"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "500K+", label: "Messages/Day" },
    { value: "99.9%", label: "Uptime" },
    { value: "< 50ms", label: "Latency" },
];

export function CTA() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-primary/5 to-cyan-500/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative max-w-5xl mx-auto px-4 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                    <span className="text-foreground">Ready to level up</span>
                    <br />
                    <span className="bg-gradient-to-r from-violet-500 via-primary to-cyan-500 bg-clip-text text-transparent">
                        your chat game?
                    </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                    Join thousands of gamers who've already made the switch. 
                    Your squad is waiting.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/signup">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-xl bg-gradient-to-r from-violet-600 to-primary hover:from-violet-500 hover:to-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
                            Start for Free
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Button>
                    </Link>
                    <span className="text-sm text-muted-foreground">
                        No credit card required
                    </span>
                </div>

                <div className="mt-16 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl max-w-2xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex -space-x-3">
                            {[
                                "from-pink-500 to-rose-500",
                                "from-violet-500 to-purple-500",
                                "from-cyan-500 to-blue-500",
                                "from-green-500 to-emerald-500",
                            ].map((gradient, i) => (
                                <div
                                    key={i}
                                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-card`}
                                />
                            ))}
                            <div className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                                <span className="text-xs font-semibold text-muted-foreground">+9K</span>
                            </div>
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                "Finally, a chat app that gets gamers. The voice quality is unreal!" — @NeonNinja
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

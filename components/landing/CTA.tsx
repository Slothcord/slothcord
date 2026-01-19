"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "500K+", label: "Messages/Day" },
    { value: "99.9%", label: "Uptime" },
    { value: "<50ms", label: "Latency" },
];

export function CTA() {
    return (
        <section className="relative py-24 md:py-32 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                        >
                            <div className="text-3xl sm:text-4xl font-bold text-primary tabular-nums mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    Ready to level up?
                </motion.h2>
                <motion.p
                    className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-pretty"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                >
                    Join thousands of gamers who've already made the switch. 
                    Your squad is waiting.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                >
                    <Link href="/signup">
                        <Button size="lg" className="h-12 px-10 text-base rounded-lg">
                            Start for Free
                            <ArrowRightIcon className="size-4 ml-2" />
                        </Button>
                    </Link>
                    <span className="text-sm text-muted-foreground">
                        No credit card required
                    </span>
                </motion.div>

                <motion.div
                    className="mt-12 p-5 bg-card border border-border rounded-xl max-w-md mx-auto"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                >
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            <div className="size-9 rounded-full bg-pink-500 border-2 border-card" />
                            <div className="size-9 rounded-full bg-primary border-2 border-card" />
                            <div className="size-9 rounded-full bg-cyan-500 border-2 border-card" />
                            <div className="size-9 rounded-full bg-green-500 border-2 border-card" />
                            <div className="size-9 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                                <span className="text-xs font-semibold text-muted-foreground">+9K</span>
                            </div>
                        </div>
                        <div className="text-left flex-1 min-w-0">
                            <div className="flex items-center gap-0.5 mb-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <StarIcon key={i} className="size-3.5 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                                "Finally, a chat app that gets gamers. Voice quality is unreal!"
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

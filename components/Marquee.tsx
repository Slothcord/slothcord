"use client";

import { motion } from "motion/react";

export function Marquee() {
    const items = ["PLAY", "CHAT", "HANG OUT", "TALK", "VIBE", "GAME"];

    return (
        <div className="relative py-15 overflow-hidden bg-muted/30" >
            <div className="flex">
                {/* First set of items */}
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-8 shrink-0"
                >
                    {items.map((item, i) => (
                        <div key={`first-${i}`} className="flex items-center gap-8">
                            <span className="text-5xl md:text-7xl font-black text-foreground/10 whitespace-nowrap">
                                {item}
                            </span>
                            <span className="text-3xl text-foreground/10">•</span>
                        </div>
                    ))}
                </motion.div>

                {/* Second set (duplicate for seamless loop) */}
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-8 shrink-0"
                >
                    {items.map((item, i) => (
                        <div key={`second-${i}`} className="flex items-center gap-8">
                            <span className="text-5xl md:text-7xl font-black text-foreground/10 whitespace-nowrap">
                                {item}
                            </span>
                            <span className="text-3xl text-foreground/10">•</span>
                        </div>
                    ))}
                </motion.div>

                {/* Third set (for extra smoothness) */}
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-8 shrink-0"
                >
                    {items.map((item, i) => (
                        <div key={`third-${i}`} className="flex items-center gap-8">
                            <span className="text-5xl md:text-7xl font-black text-foreground/10 whitespace-nowrap">
                                {item}
                            </span>
                            <span className="text-3xl text-foreground/10">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

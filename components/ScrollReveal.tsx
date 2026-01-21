"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ScrollReveal({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to translateY (starts at 100% and moves to 0%)
    const translateY = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

    return (
        <div ref={containerRef} className="relative">
            {/* Dark panel that slides up */}
            <motion.div
                style={{ translateY }}
                className="fixed bottom-0 left-0 right-0 h-screen bg-background z-40 rounded-t-3xl"
            />

            {/* Content */}
            <div className="relative z-50">
                {children}
            </div>
        </div>
    );
}

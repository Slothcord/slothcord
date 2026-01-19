"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

export function Hero() {
    return (
        <section className="min-h-dvh flex flex-col items-center justify-center px-4 py-24">
            <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground text-balance mb-6">
                    Chat with your squad
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg mx-auto mb-10 text-pretty">
                    The next-gen chat app for gamers
                </p>
                <Link href="/signup">
                    <Button size="lg" className="h-14 px-10 text-lg rounded-full">
                        Get Slothcord
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}

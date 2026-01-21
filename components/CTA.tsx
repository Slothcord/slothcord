"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function CTA() {
    return (
        <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-background text-foreground rounded-[50px] -mt-20 z-10">
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Ready to level up your squad?
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Join thousands of gamers already using Slothcord. Free forever, no paywalls, just pure vibes.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                    <Link href="/signup">
                        <Button size="lg" className="px-8 py-6 text-lg rounded-2xl group">
                            Get Started Free
                            <HugeiconsIcon
                                icon={ArrowRight01Icon}
                                size={20}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-2xl">
                            Open in Browser
                        </Button>
                    </Link>
                </motion.div>

                {/* Platform Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm text-muted-foreground pt-4"
                >
                    Available on Windows, macOS, Linux, iOS, Android & Web
                </motion.p>
            </div>
        </section>
    );
}

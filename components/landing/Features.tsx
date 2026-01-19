"use client";

import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

const features = [
    {
        icon: UserIcon,
        title: "Custom Profiles",
        description: "Express yourself with animated avatars, banners, and profile themes that show off your style.",
    },
    {
        icon: MicIcon,
        title: "Crystal Voice",
        description: "Ultra low-latency voice with noise suppression. Sound crisp even when your squad goes wild.",
    },
    {
        icon: StreamIcon,
        title: "Live Streaming",
        description: "Go live instantly. Share your screen, gameplay, or watch movies together with friends.",
    },
    {
        icon: GamepadIcon,
        title: "Game Integration",
        description: "Auto-detect what you're playing. Show your rank and invite friends directly from the app.",
    },
    {
        icon: PaletteIcon,
        title: "Theme Everything",
        description: "Dark mode, custom accents, full CSS control. Make Slothcord match your setup perfectly.",
    },
    {
        icon: BoltIcon,
        title: "Blazing Fast",
        description: "Built for speed with real-time sync. Messages and updates happen instantly. Zero lag.",
    },
];

export function Features() {
    return (
        <section className="relative py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.p
                        className="text-sm font-medium text-primary mb-3"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        Features
                    </motion.p>
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                    >
                        Everything you need
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                    >
                        We built what gamers actually want. Voice that works, profiles that pop, 
                        and vibes that stay immaculate.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ 
    icon: Icon, 
    title, 
    description 
}: { 
    icon: React.ComponentType<{ className?: string }>; 
    title: string; 
    description: string;
}) {
    return (
        <div className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
            <div className="size-10 mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="size-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground text-pretty">
                {description}
            </p>
        </div>
    );
}

function UserIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );
}

function MicIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
    );
}

function StreamIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function GamepadIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}

function PaletteIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
    );
}

function BoltIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );
}

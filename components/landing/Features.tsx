"use client";

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: "Custom Profiles",
        description: "Express yourself with animated avatars, custom banners, and unique profile themes that show off your gaming style.",
        gradient: "from-pink-500 to-rose-500",
        bgGradient: "from-pink-500/10 to-rose-500/10",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        title: "Crystal Voice",
        description: "Ultra low-latency voice chat with noise suppression. Sound crisp even when your squad is screaming about that clutch play.",
        gradient: "from-violet-500 to-purple-500",
        bgGradient: "from-violet-500/10 to-purple-500/10",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Live Streaming",
        description: "Go live instantly with built-in streaming. Share your screen, gameplay, or just hang out with friends watching movies together.",
        gradient: "from-cyan-500 to-blue-500",
        bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Game Integration",
        description: "Auto-detect what you're playing. Show your rank, activity status, and invite friends to join directly from the app.",
        gradient: "from-green-500 to-emerald-500",
        bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        title: "Theme Everything",
        description: "Dark mode? Neon accents? Full custom CSS? Make Slothcord match your setup with complete visual customization.",
        gradient: "from-orange-500 to-amber-500",
        bgGradient: "from-orange-500/10 to-amber-500/10",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Blazing Fast",
        description: "Built for speed with real-time sync. Messages, reactions, and updates happen instantly. Zero lag, zero compromise.",
        gradient: "from-yellow-500 to-orange-500",
        bgGradient: "from-yellow-500/10 to-orange-500/10",
    },
];

export function Features() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
            
            <div className="relative max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-medium text-violet-500 dark:text-violet-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Packed with Features
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        <span className="text-foreground">Everything you need.</span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                            Nothing you don't.
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We built what gamers actually want. Voice that doesn't cut out, profiles that pop, 
                        and vibes that stay immaculate.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                            <div className="relative">
                                <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

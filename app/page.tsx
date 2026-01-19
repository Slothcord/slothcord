import { Navbar } from "@/components/Navbar";
import { Hero, Features, CTA, Footer } from "@/components/landing";

export default function Page() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <Hero />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

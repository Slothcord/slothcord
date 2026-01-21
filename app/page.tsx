import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

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

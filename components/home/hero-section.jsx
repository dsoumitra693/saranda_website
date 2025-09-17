"use client";

import { motion } from "framer-motion";


export default function HeroSection() {
    

    return (
        <div
            className="min-h-screen flex flex-col bg-bg-primary relative overflow-hidden"
            style={{
                backgroundImage: 'url("/hero_background.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Navigation Header */}

            {/* Hero Content */}
            <main className="w-screen h-screen flex-1 flex flex-col items-center justify-center text-center p-4 relative">
                <div className="max-w-4xl mx-auto relative z-20 pt-20 flex flex-col items-center">
                    <motion.span
                        className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary-dark mb-6 tracking-tight overflow-visible"
                        aria-label="Saranda"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: -140 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        SARANDA

                        <p
                            className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary-forest"
                        >
                            HOUSE OF EXCELLENCE AND INNOVATION
                        </p>
                    </motion.span>

                </div>

                {/* Foreground image overlay */}
                <div
                    className="pointer-events-none absolute inset-0 flex justify-center items-center z-30"
                    style={{
                        backgroundImage: 'url("/hero_foreground.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </main>
        </div>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
    const sarandaRef = useRef(null);

    useEffect(() => {
        if (sarandaRef.current) {
            gsap.fromTo(
                sarandaRef.current,
                { opacity: 0, y: 0 },
                { opacity: 1, y: -140, duration: 1.2, ease: "power3.out", delay: 0.2 }
            );
        }
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col bg-bg-primary relative overflow-hidden"
            style={{
                backgroundImage: 'url("/images/lush-forest-back.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            {/* Hero Content */}
            <main className="w-screen h-screen flex-1 flex flex-col items-center justify-center text-center p-4 relative">
                <div className="max-w-4xl mx-auto relative z-20 pt-20 flex flex-col items-center">
                    <span
                        ref={sarandaRef}
                        className="text-primary text-7xl sm:text-8xl md:text-9xl font-bold text-primary-dark mb-4 overflow-visible tracking-wider"
                        aria-label="Saranda"
                    >
                        <h1>
                            SARANDA
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary-forest tracking-normal">
                            HOUSE OF EXCELLENCE AND INNOVATION
                        </p>
                    </span>
                </div>

                {/* Foreground image overlay */}
                <div
                    className="pointer-events-none absolute inset-0 flex justify-center items-center z-30"
                    style={{
                        backgroundImage: 'url("/images/lush-forest-front.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </main>
        </div>
    );
}

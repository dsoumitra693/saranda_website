"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function AboutUs() {
    const containerRef = useRef(null);
    const treeRef = useRef(null);
    const glassRef = useRef(null);
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial setup - hide elements
            gsap.set([glassRef.current, logoRef.current, titleRef.current, textRef.current], {
                opacity: 0
            });
            gsap.set(treeRef.current, { x: "100%", opacity: 0 });


            // Create main timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                }
            });


            tl.to(treeRef.current, {
                x: "48%",
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            })
                .to(glassRef.current, {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.3")
                .to(logoRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)"
                }, "-=0.5")
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                }, "-=0.3")
                .to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }, "-=0.2");


            // Breathing animation for tree (subtle scale)
            gsap.to(treeRef.current, {
                scale: 1.25,
                duration: 3,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play pause resume pause",
                }
            });


            // Breathing animation for glass panel
            gsap.to(glassRef.current, {
                scale: 1.02,
                duration: 4,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play pause resume pause",
                }
            });


            // Micro-interactions for logo rotation
            gsap.to(logoRef.current, {
                duration: 6,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play pause resume pause",
                }
            });


        }, containerRef);


        return () => ctx.revert();
    }, []);


    return (
        <div ref={containerRef} className="relative w-screen h-screen flex overflow-hidden">
            <div style={{
                background: "url('/images/mist-forest1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }} className="w-full h-full absolute" />

            <div className="overflow-hidden w-full h-full absolute transform translate-y-[10%] scale-[1.2]"
                ref={treeRef}
            >
                <Image
                    src="/images/lone_tree.png"
                    alt=""
                    width={1920}
                    height={1080}
                    className="h-full w-full"
                />
            </div>


            <div className="w-full h-full absolute flex justify-center items-center">
                <div
                    ref={glassRef}
                    className="h-[80%] sm:h-[70%] aspect-[2.11] max-w-[90%] rounded-lg bg-neutral-dark-glass"
                >
                    <div className="h-full w-full lg:p-20 p-6 flex justify-between items-center flex-col sm:flex-row">
                        <div ref={logoRef} className="lg:h-full h-[60%] max-w-[45%] aspect-square">
                            <Image
                                src="/images/saranda_logo_mark.svg"
                                alt=""
                                width={500}
                                height={500}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="h-full sm:max-w-[45%] pt-10 lg:pt-0">
                            <div className="w-full flex justify-center items-center lg:pb-40 md:pb-20 pb-10">
                                <h1
                                    ref={titleRef}
                                    className="text-6xl font-bold text-neutral-light"
                                    style={{ transform: 'translateY(30px)' }}
                                >
                                    About Us
                                </h1>
                            </div>
                            <p
                                ref={textRef}
                                className="text-neutral-light text-balance"
                                style={{ transform: 'translateY(20px)' }}
                            >
                                Saranda, The House of Excellence and Innovation, is one of the 12 student houses in the IIT Madras BS degree program. We cultivate a vibrant community by organizing regular meetups, hands-on workshops, tech showcases, eSports tournaments, and cultural festivals. Saranda brings together passionate learners to connect, innovate, and grow beyond boundaries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

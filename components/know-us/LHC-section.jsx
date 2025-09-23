"use client";

import CouncilSection from "./Council-section";
import { useEffect, useRef, useState } from "react";

const RCConfig = {
    heading: "Lower House Council/Regional Co-ordinators",
    members:
        [
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
        ]
}

const WebOpsConfig = {
    heading: "WebOps",
    members:
        [
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
            {
                title: "Asish Ranjan",
                subtitle: "Patna Region",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            },
        ]
}

export default function LHCSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [sectionsVisible, setSectionsVisible] = useState([false, false]);
    const componentRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.05, rootMargin: '0px' }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        // Observer for individual sections - more responsive
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setSectionsVisible(prev => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.05, rootMargin: '50px' }
        );

        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.dataset.index = index;
                sectionObserver.observe(ref);
            }
        });

        return () => {
            if (componentRef.current) observer.unobserve(componentRef.current);
            sectionRefs.current.forEach(ref => {
                if (ref) sectionObserver.unobserve(ref);
            });
        };
    }, []);

    return (
        <div
            ref={componentRef}
            className="w-full min-h-screen lg:min-h-fit max-w-7xl flex flex-col justify-start lg:justify-center items-center p-4 sm:p-6 lg:p-8 mt-6 sm:mt-8 lg:mt-10 mx-auto mb-6 sm:mb-8 lg:mb-10"
        >
            <div className="relative z-10 pt-16">
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 transform transition-all duration-1000 ease-out">
                    Lower House Council
                </h1>
            </div>

            <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
                <div
                    ref={el => sectionRefs.current[0] = el}
                    className={`transform transition-all duration-600 ease-out delay-100 ${sectionsVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                >
                    <CouncilSection {...RCConfig} />
                </div>
                <div
                    ref={el => sectionRefs.current[1] = el}
                    className={`transform transition-all duration-600 ease-out delay-200 ${sectionsVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                >
                    <CouncilSection {...WebOpsConfig} />
                </div>
            </div>
        </div>
    );
}


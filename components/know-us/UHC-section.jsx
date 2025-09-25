"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const UHCConfig = [
  {
    src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    alt: "UHC 1",
    title: "Secretary",
    subtitle: "Pranjal",
  },
  {
    src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    alt: "UHC 2",
    title: "Dept Secretary",
    subtitle: "Vedant",
  },
  {
    src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    alt: "UHC 3",
    title: "Web Admin",
    subtitle: "Spiderman",
  },
];

export default function UHCSection() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    // Trigger header animation on mount
    setTimeout(() => setHeaderVisible(true), 200);
    // Scroll animation observer
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCardsVisible(true), 500);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      scrollObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) scrollObserver.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".image-card"));
    let eventHandlers = [];

    const setupAnimations = () => {
      eventHandlers.forEach(({ card, enterHandler, leaveHandler }) => {
        card.removeEventListener("mouseenter", enterHandler);
        card.removeEventListener("mouseleave", leaveHandler);
      });
      eventHandlers = [];
      gsap.set(cards, { clearProps: "all" });

      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (isDesktop) {
        gsap.set(cards, { flexBasis: "33.333%", flexGrow: 0, flexShrink: 0 });

        const onMouseEnter = (index) => {
          gsap.to(cards, {
            flexBasis: (i) => (i === index ? "50%" : "25%"),
            duration: 0.6,
            ease: "power2.inOut",
          });
          gsap.to(cards[index].querySelector("img"), {
            scale: 1.05,
            duration: 0.6,
            ease: "power2.inOut",
          });
        };

        const onMouseLeave = () => {
          gsap.to(cards, {
            flexBasis: "33.333%",
            duration: 0.6,
            ease: "power2.inOut",
          });
          cards.forEach((card) =>
            gsap.to(card.querySelector("img"), {
              scale: 1,
              duration: 0.6,
              ease: "power2.inOut",
            })
          );
        };

        cards.forEach((card, i) => {
          const enterHandler = () => onMouseEnter(i);
          const leaveHandler = onMouseLeave;
          card.addEventListener("mouseenter", enterHandler);
          card.addEventListener("mouseleave", leaveHandler);
          eventHandlers.push({ card, enterHandler, leaveHandler });
        });
      } else {
        gsap.set(cards, { width: "100%", flexBasis: "auto" });
      }
    };

    setupAnimations();
    window.addEventListener("resize", setupAnimations);

    return () => {
      window.removeEventListener("resize", setupAnimations);
      eventHandlers.forEach(({ card, enterHandler, leaveHandler }) => {
        card.removeEventListener("mouseenter", enterHandler);
        card.removeEventListener("mouseleave", leaveHandler);
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen md:h-fit md:max-w-6xl flex flex-col justify-center items-center p-4 mt-10 md:mt-6 mx-auto mb-6"
    >
      <div className="relative z-10 pt-16 text-center mb-12">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 transform transition-all duration-1200 ease-out relative ${headerVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-8 opacity-0 scale-95'
          }`}
          style={{
            backgroundSize: '200% auto',
            animation: headerVisible ? 'gradientShift 3s ease-in-out infinite alternate' : 'none'
          }}>
          Upper House Council
        </h1>
      </div>
      <div
        ref={containerRef}
        className={`flex flex-col sm:flex-row w-full flex-1 min-h-[518px] rounded-lg overflow-hidden gap-3 sm:gap-0 transition-all duration-1200 ease-out delay-300 ${cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
      >
        {UHCConfig.map((uhc, index) => (
          <ImageCard
            key={index}
            {...uhc}
            index={index}
            isVisible={cardsVisible}
          />
        ))}
      </div>
      <style jsx>{`
                @media (min-width: 500px) {
                  .desktop-row {
                    flex-direction: row;
                    gap: 0;
                  }
                }
      `}</style>

    </div>
  );
}

function ImageCard({ src, alt, title, subtitle, index, isVisible }) {
  return (
    <div
      role="img"
      aria-label={`${title}: ${subtitle}`}
      className={`image-card group rounded-lg sm:rounded-none relative w-full sm:flex-1 aspect-[4/3] sm:aspect-auto sm:h-[518px] overflow-hidden flex flex-col items-center bg-primary-dark shadow-lg cursor-pointer transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      style={{
        transitionDelay: `${200 + (index * 200)}ms`
      }}
    >
      {/* Updated Image with proper responsive handling */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
        priority={index < 3}
      />

      {/* Rest of overlay content remains the same */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500">
        <div className="absolute bottom-4 sm:bottom-10 w-full p-3 sm:p-4 text-center transform transition-all duration-500 group-hover:translate-y-[-8px]">
          <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white tracking-wider transform transition-all duration-500 group-hover:scale-105 group-hover:text-yellow-200 break-words">
            {title}
          </h3>
          <h6 className="text-sm sm:text-base md:text-xl text-white/90 font-bold tracking-wider transform transition-all duration-500 delay-75 group-hover:text-white group-hover:translate-x-1 break-words mt-1">
            {subtitle}
          </h6>
          <div className="mt-2 w-0 group-hover:w-8 sm:group-hover:w-12 h-0.5 bg-yellow-400 mx-auto transition-all duration-500 delay-100"></div>
        </div>
      </div>

      {/* Smaller decorative accent for mobile */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-8 sm:h-8 border-t-2 border-r-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500 delay-200"></div>
    </div>
  );
}


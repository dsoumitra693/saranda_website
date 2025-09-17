"use client";

import { useEffect, useRef } from "react";
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
    <div className="w-full h-screen md:h-fit md:max-w-6xl flex flex-col justify-center items-center p-4 mt-10 md:mt-6 mx-auto mb-6">
      <h1 className="text-2xl md:text-[35px] font-bold mb-4 md:mb-1 text-primary">
        Upper House Council
      </h1>
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row w-full flex-1 md:min-h-[518px] rounded-lg md:overflow-hidden gap-3 md:gap-0"
      >
        {UHCConfig.map((uhc, index) => (
          <ImageCard key={index} {...uhc} />
        ))}
      </div>
    </div>
  );
}

function ImageCard({ src, alt, title, subtitle }) {
  return (
    <div
      role="img"
      aria-label={`${title}: ${subtitle}`}
      className="image-card rounded-lg md:rounded-[0px] relative w-full flex-1 md:aspect-auto md:h-[518px] md:flex-1 overflow-hidden flex flex-col items-center bg-primary-dark shadow-lg cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="w-full h-full transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" >
        <div className="absolute bottom-0 w-full p-3 md:p-4 text-center">
          <h3 className="text-lg md:text-2xl font-bold text-white whitespace-nowrap tracking-wider">
            {title}
          </h3>
          <h6 className="text-base md:text-xl text-white/90 whitespace-nowrap font-bold tracking-wider">
            {subtitle}
          </h6>
        </div>
      </div>
    </div>
  );
}

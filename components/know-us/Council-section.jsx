"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function AnimatedSection({ heading, members, className = "" }) {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const separatorRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, separatorRef.current], { 
        opacity: 0, 
        x: -50 
      });
      gsap.set(".member-card", { 
        opacity: 0, 
        y: 30 
      });

      const tl = gsap.timeline();
      
      tl.to(headingRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(separatorRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.3")
      .to(".member-card", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, [members]);

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col lg:flex-row items-stretch bg-neutral-dark-glass w-full rounded-lg overflow-hidden ${className}`}
    >
      {/* Heading Section */}
      <div 
        ref={headingRef}
        className="w-full lg:w-1/3 p-4 md:p-6 lg:p-10 flex items-start justify-end lg:justify-end"
      >
        <h3 className="text-lg md:text-xl lg:text-[25px] text-center lg:text-right font-semibold text-neutral-light tracking-wider leading-tight">
          {heading}
        </h3>
      </div>

      {/* Vertical Separator - Hidden on mobile */}
      <div 
        ref={separatorRef}
        className="hidden lg:block w-[2px] bg-neutral-light self-stretch my-6"
      />

      {/* Horizontal Separator - Visible on mobile */}
      <div className="block lg:hidden w-full h-px bg-neutral-light mx-4" />

      {/* Members Grid Section */}
      <div 
        ref={cardsRef}
        className="flex-1 p-4 md:p-6 lg:p-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full">
          {members.map((member, index) => (
            <ProfileCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileCard({ title, subtitle, image }) {
  return (
    <div className="member-card group flex flex-col items-center justify-center bg-neutral-light rounded-xl p-2 md:p-3 lg:p-4 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 w-full cursor-pointer">
      <div className="w-full aspect-square relative mb-2 md:mb-3 overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-all duration-500">
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="text-center w-full transform transition-all duration-500 group-hover:translate-y-1">
        <h4 className="text-xs md:text-sm lg:text-base font-semibold text-primary tracking-wide leading-tight group-hover:text-primary-dark transition-colors duration-300">
          {title}
        </h4>
        <h6 className="text-xs md:text-sm text-primary/90 font-bold tracking-wider mt-1 group-hover:text-primary transition-colors duration-300">
          [{subtitle}]
        </h6>
      </div>
    </div>
  );
}

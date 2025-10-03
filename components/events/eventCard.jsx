"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';


export default function EventCard({
  title,
  description,
  imageSrc,
  registerLink,
  rulebookLink,
  index = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Staggered animation phases
          setTimeout(() => setAnimationPhase(1), 200);
          setTimeout(() => setAnimationPhase(2), 400);
          setTimeout(() => setAnimationPhase(3), 600);
        }
      },
      { 
        threshold: 0.3, 
        rootMargin: '-50px' 
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={componentRef}
      className={`block sm:flex w-19/20 lg:w-9/10 xl:w-3/4 2xl:w-7/10 bg-[#1E281C]/80 backdrop-blur-sm p-6 md:p-8 rounded-xl mt-8 shadow-2xl border border-white/10 transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
          : 'translate-y-20 opacity-0 scale-95 rotate-1'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        backgroundImage: 'linear-gradient(135deg, rgba(30, 40, 28, 0.9) 0%, rgba(25, 35, 23, 0.9) 100%)'
      }}
    >
      {/* Left Section - Image with animation */}
      <div className={`sm:w-2/6 grid justify-around transform transition-all duration-700 delay-200 ${
        animationPhase >= 1 ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-90'
      }`}>
        <div className="relative overflow-hidden rounded-xl group">
          <Image
            className="rounded-xl transition-transform duration-500 group-hover:scale-110"
            src={imageSrc}
            alt={title}
            width={300}
            height={300}
          />
          {/* Overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </div>
      </div>

      {/* Right Section - Text & Buttons with staggered animations */}
      <div className="w-auto px-[15px] sm:w-4/6 text-white pt-3">
        {/* Title Animation */}
        <h3 className={`text-xl md:text-2xl lg:text-4xl   transform transition-all duration-700 delay-300 ${
          animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          {title}
        </h3>

        {/* Description Animation */}
        <p className={`text-sm md:text-lg lg:text-xl pt-1 md:pt-2 lg:pt-4 text-gray-200 leading-relaxed transform transition-all duration-700 delay-400 ${
          animationPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {description}
        </p>

        {/* Buttons Animation */}
        <div className={`flex justify-center gap-4 mt-4 md:mt-8 transform transition-all duration-700 delay-500 ${
          animationPhase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Link href={registerLink ?? '#'} passHref>
            <button className="text-sm md:text-lg lg:text-xl px-4 md:px-6 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1E281C] hover:from-amber-300 hover:to-yellow-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-amber-300">
              Register
            </button>
          </Link>
          <Link href={rulebookLink ?? '#'} passHref>
            <button className="text-sm md:text-lg lg:text-xl px-4 md:px-6 py-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/30">
              Rulebook
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

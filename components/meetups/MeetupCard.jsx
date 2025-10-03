"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function MeetupCard({ config }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [showAllCities, setShowAllCities] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Staggered animation phases
          setTimeout(() => setAnimationPhase(1), 100);
          setTimeout(() => setAnimationPhase(2), 300);
          setTimeout(() => setAnimationPhase(3), 500);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
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

  // Show only first 4 cities initially, all cities when expanded
  const displayedPhotos = showAllCities ? config.photos : config.photos.slice(0, 4);
  const hasMoreCities = config.photos.length > 4;

  return (
    <div 
      ref={componentRef}
      className={`rounded-xl p-6 mb-8 shadow-2xl max-w-5xl mx-auto backdrop-blur-sm border border-white/10 transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
          : 'translate-y-16 opacity-0 scale-95 -rotate-1'
      }`}
      style={{ 
        backgroundColor: 'rgba(68, 75, 59, 0.95)',
        backgroundImage: 'linear-gradient(135deg, rgba(68, 75, 59, 0.95) 0%, rgba(58, 65, 49, 0.95) 100%)'
      }}
    >
      {/* Title */}
      <h2 className={`text-3xl   text-white mb-2 transform transition-all duration-700 delay-200 ${
        animationPhase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
      }`}>
        {config.title}
      </h2>

      {/* Subtitle */}
      <h3 className={`text-lg text-yellow-300 mb-4 transform transition-all duration-700 delay-300 ${
        animationPhase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
      }`}>
        {config.subtitle}
      </h3>

      {/* Details */}
      <div className={`text-white mb-6 transform transition-all duration-700 delay-400 ${
        animationPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <p className="text-base leading-relaxed text-gray-200 mb-4">
          {config.description}
        </p>
        {config.stats && (
          <div className="flex flex-wrap gap-3 text-sm">
            {config.stats.map((stat, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-yellow-200 font-semibold">{stat.label}:</span> 
                <span className="ml-1 text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Photo Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-700 delay-600 ${
        animationPhase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {displayedPhotos.map((photo, index) => (
          <div 
            key={index}
            className="relative transform transition-all duration-700 hover:scale-110 hover:-rotate-2 hover:shadow-2xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-slate-500 rounded-xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-full h-full bg-gradient-to-br ${photo.gradient} flex items-center justify-center text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center p-2">
                  {photo.image ? (
                    <Image 
                      src={photo.image} 
                      alt={photo.alt || `${config.title} photo`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-xs font-medium">
                      {photo.content}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Action Button with Show More/Less functionality */}
      {config.buttonText && (
        <div className="mt-6 text-center">
          <button 
            onClick={() => setShowAllCities(!showAllCities)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition-colors hover:scale-105 transform duration-200"
          >
            {showAllCities ? `Show Less Events` : config.buttonText}
          </button>
        </div>
      )}
    </div>
  );
}
"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function AmritsarMeetup() {
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
      <h2 className={`text-3xl font-bold text-white mb-4 transform transition-all duration-700 delay-400 ${
        animationPhase >= 1 ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
      }`}>Amritsar MeetUp</h2>
      <div className={`text-white mb-6 transform transition-all duration-700 delay-600 ${
        animationPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <p className="text-lg mb-2 text-yellow-200"><strong>Date:</strong> 19 Jan 2025</p>
        <p className="text-base leading-relaxed text-gray-200">
          We had an amazing meetup in Amritsar! Our community came together to network, share ideas, and make meaningful 
          connections. Check out the photos from this wonderful gathering.
        </p>
      </div>
      
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-700 delay-800 ${
        animationPhase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Photo Grid */}
        {[
          { bg: 'from-slate-400 to-slate-600', content: (
            <div className="text-center text-white p-2">
              <div className="text-xs mb-1">STUDENTS</div>
              <div className="text-sm font-bold">50 MEMBERS 50 STUDENTS</div>
              <div className="text-xs mt-1">MEET UP AT AMRITSAR</div>
            </div>
          ), delay: '0ms' },
          { bg: 'from-amber-400 to-amber-600', content: (
            <div className="text-center">
              <div className="text-sm font-bold">GOLDEN</div>
              <div className="text-sm font-bold">TEMPLE</div>
            </div>
          ), delay: '100ms' },
          { bg: 'from-indigo-400 to-indigo-600', content: <span className="text-sm">Amritsar Group Photo</span>, delay: '200ms' },
          { bg: 'from-pink-400 to-pink-600', content: (
            <div className="text-center">
              <div className="text-xs">Cultural</div>
              <div className="text-sm font-bold">Heritage</div>
            </div>
          ), delay: '300ms' }
        ].map((photo, index) => (
          <div 
            key={index}
            className="relative transform transition-all duration-700 hover:scale-110 hover:-rotate-1 hover:shadow-2xl"
            style={{ animationDelay: photo.delay }}
          >
            <div className="bg-slate-500 rounded-xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-full h-full bg-gradient-to-br ${photo.bg} flex items-center justify-center text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">{photo.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition-colors">
          View More Photos
        </button>
      </div>
    </div>
  );
}
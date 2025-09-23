"use client";

import { useEventsData } from "@/hooks/useEventsData";
import EventCard from "@/components/events/eventCard";
import { useEffect, useState } from 'react';

export default function Events() {
  const { events } = useEventsData();
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    // Trigger header animation on mount
    setTimeout(() => setHeaderVisible(true), 300);
  }, []);

  return (
    <>
      <div
        className="w-full min-h-screen bg-primary flex flex-col pt-[60px] md:pt-[80px] pb-[30px] relative"
        style={{
          backgroundImage: 'url("/images/mist-forest1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        
        {/* Animated particles overlay */}
        <div className="fixed inset-0 opacity-30">
          <div className="animate-pulse absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full shadow-lg"></div>
          <div className="animate-pulse absolute top-40 right-20 w-1 h-1 bg-white rounded-full" style={{animationDelay: '1s'}}></div>
          <div className="animate-pulse absolute top-60 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full" style={{animationDelay: '2s'}}></div>
          <div className="animate-pulse absolute bottom-40 right-1/3 w-2 h-2 bg-white rounded-full" style={{animationDelay: '1.5s'}}></div>
          <div className="animate-pulse absolute top-1/3 left-1/2 w-1 h-1 bg-amber-200 rounded-full" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Animated Header */}
        <div className="relative z-10 text-center mb-16 pt-10">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 transform transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-12 opacity-0 scale-90'
          }`}>
            Events
          </h1>
          {/* <div className={`w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            headerVisible 
              ? 'scale-x-100 opacity-100' 
              : 'scale-x-0 opacity-0'
          }`}></div> */}
        </div>

        {/* Events Grid with staggered animations */}
        <div className="relative z-10 grid place-items-center">
          {events.map((event, idx) => (
            <EventCard
              key={event.id}
              index={idx}
              title={event.title}
              description={event.description}
              imageSrc={event.imageSrc}
              registerLink={event.registerLink}
              rulebookLink={event.rulebookLink}
            />
          ))}
        </div>

        {/* Floating elements for extra visual interest */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </>
  );
}

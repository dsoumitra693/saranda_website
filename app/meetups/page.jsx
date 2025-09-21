"use client";

import MeetupCard from '../../components/meetups/MeetupCard';
import { meetupSections } from '../../components/meetups/meetupConfig';

export default function MeetupsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Static Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/mist-forest1.png')"
        }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      
      {/* Animated particles overlay */}
      <div className="fixed inset-0 opacity-20">
        <div className="animate-pulse absolute top-20 left-10 w-2 h-2 bg-white rounded-full"></div>
        <div className="animate-pulse absolute top-40 right-20 w-1 h-1 bg-white rounded-full" style={{animationDelay: '1s'}}></div>
        <div className="animate-pulse absolute top-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="animate-pulse absolute bottom-40 right-1/3 w-2 h-2 bg-white rounded-full" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="relative z-10 pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif animate-fade-in-up">
                Meet Ups
              </h1>
            </div>
          </div>
        </div>
        
        {/* Meetups Section */}
        <div className="relative z-10 pb-20">
          <div className="container mx-auto px-6 space-y-12">
            {/* Render upcoming and past meetups using config */}
            {meetupSections.map((section) => (
              <MeetupCard 
                key={section.id} 
                config={section} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

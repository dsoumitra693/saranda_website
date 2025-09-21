"use client";
import { useState } from "react";

export default function ArtGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const images = [
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
   
  ];

  return (
    <div
      className="min-h-screen w-screen relative overflow-hidden p-6 flex flex-col items-center"
      style={{
        backgroundImage: 'url("/images/lush-forest-back.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-green-900 mb-6 pt-20 relative z-10 ">Art Gallery</h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl z-10 relative">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedImage(selectedImage === src ? null : src)}
          >
            <img
              src={src}
              alt={`art-${idx}`}
              className={`w-full h-60 object-cover rounded-lg shadow-md transition-all duration-300
                ${selectedImage === src ? "opacity-50" : "hover:scale-105"}
              `}
            />
          </div>
        ))}
      </div>

      {/* Enlarged Image Overlay */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="selected-art"
            className="max-w-4xl w-[80vw] h-auto object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-110"
          />
        </div>
      )}
    </div>
  );
}

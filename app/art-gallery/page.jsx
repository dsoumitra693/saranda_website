"use client";
import { useState } from "react";

export default function ArtGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Famous paintings for fun art gallery display
  const sampleArtworks = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", // Starry Night
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/687px-Mona_Lisa.jpg", // Mona Lisa
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/757px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg", // Van Gogh Self Portrait
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Abstract art (replacing artwork 4)
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/687px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg", // The Scream
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Sketch art (replacing artwork 6)
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg", // Great Wave Alt
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/471px-The_Scream.jpg", // The Scream Alt
    "https://images.unsplash.com/photo-1582561402626-322c421ba4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Digital art (replacing artwork 9)
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Modern art (replacing artwork 10)
  ];

  const artists = [
    {
      name: "Sooryakiran B.",
      email: "sooryakiran.b@saranda.com",
      bio: "My free time is spent creating these kinds of arts as an amateur artist. I have an Instagram account dedicated to my art posts. I would appreciate likes and shares if you would follow me there.",
      instagram: "artist_inside_sk_",
      layout: "single",
      artworks: [...sampleArtworks, sampleArtworks[8], sampleArtworks[9]] // Added 2 more artworks
    },
    {
      name: "Sachin Joshi",
      email: "sachin.joshi@saranda.com",
      bio: "Beginning with a single pencil, my drawing journey led me to discover lots of shades of charcoal!",
      layout: "grid",
      artworks: sampleArtworks.slice(0, 3)
    },
    {
      name: "Janani D.",
      email: "janani.d@saranda.com",
      bio: "Art has always been my passion, and I love experimenting with different mediums and styles to express creativity.",
      layout: "mixed",
      artworks: sampleArtworks.slice(0, 3)
    },
    {
      name: "Anushka Krishna",
      email: "anushka.krishna@saranda.com",
      bio: "Painted this for marriage ritual of my sister. Randomly started during first lockdown and discovered my passion for art.",
      layout: "side-by-side",
      artworks: sampleArtworks.slice(0, 2)
    },
    {
      name: "Sania Prabhu",
      email: "sania.prabhu@saranda.com",
      bio: "I enjoy watching anime and sketch them in my free time ❤️",
      layout: "vertical",
      artworks: sampleArtworks.slice(0, 2)
    }
  ];

  const renderArtworks = (artworks, layout) => {
    switch (layout) {
      case "single":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <img
                src={artworks[0]}
                alt="Featured artwork"
                className="w-full max-w-md mx-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => setSelectedImage(artworks[0])}
              />
            </div>
            {artworks.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {artworks.slice(1).map((artwork, index) => (
                  <img
                    key={index}
                    src={artwork}
                    alt={`Artwork ${index + 2}`}
                    className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                    onClick={() => setSelectedImage(artwork)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      
      case "side-by-side":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artworks.map((artwork, index) => (
              <img
                key={index}
                src={artwork}
                alt={`Artwork ${index + 1}`}
                className="w-full aspect-[4/5] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => setSelectedImage(artwork)}
              />
            ))}
          </div>
        );
      
      case "grid":
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {artworks.map((artwork, index) => (
              <img
                key={index}
                src={artwork}
                alt={`Artwork ${index + 1}`}
                className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => setSelectedImage(artwork)}
              />
            ))}
          </div>
        );
      
      case "mixed":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <img
                src={artworks[0]}
                alt="Featured artwork"
                className="w-full max-w-lg mx-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => setSelectedImage(artworks[0])}
              />
            </div>
            {artworks.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {artworks.slice(1).map((artwork, index) => (
                  <img
                    key={index}
                    src={artwork}
                    alt={`Artwork ${index + 2}`}
                    className="w-full aspect-[4/5] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                    onClick={() => setSelectedImage(artwork)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      
      default: // vertical
        return (
          <div className="space-y-6">
            {artworks.map((artwork, index) => (
              <div key={index} className="text-center">
                <img
                  src={artwork}
                  alt={`Artwork ${index + 1}`}
                  className="w-full max-w-md mx-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                  onClick={() => setSelectedImage(artwork)}
                />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url("/images/lush-forest-back.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div className="pt-24 pb-12 text-center">
        <h1 style={{ color: '#2e5137' }}>Art Gallery</h1>
      </div>

      {/* Artists Section */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {artists.map((artist, artistIndex) => (
          <div key={artistIndex} className="mb-16 lg:mb-20">
            
            {/* Artist Name */}
            <h2 className="mb-6 text-center lg:text-left" style={{ color: '#2e5137' }}>
              <a href={`mailto:${artist.email}`} className="hover:text-secondary transition-colors">
                {artist.name}
              </a>
            </h2>

            {/* Artist Bio */}
            <div className="mb-8 text-center lg:text-left">
              <p className="leading-relaxed mb-4 max-w-3xl" style={{ color: '#2e5137', opacity: 0.9 }}>
                {artist.bio}
              </p>
              {artist.instagram && (
                <p style={{ color: '#2e5137', opacity: 0.8 }}>
                  Instagram handle: <a href={`https://www.instagram.com/${artist.instagram}/`} 
                    className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    {artist.instagram}
                  </a>
                </p>
              )}
            </div>

            {/* Artworks with Dynamic Layout */}
            <div className="mb-12">
              {renderArtworks(artist.artworks, artist.layout)}
            </div>
          </div>
        ))}

        {/* Submission Call-to-Action */}
        <div className="text-center mt-16 pt-12 border-t border-neutral-light/20">
          <h3 className="mb-4" style={{ color: '#2e5137' }}>Want to see your work up here?</h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#2e5137', opacity: 0.9 }}>
            Go ahead and upload your work to get featured in our community art gallery.
          </p>
          <button className="bg-secondary text-neutral-dark px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-primary">
            Submit Your Artwork
          </button>
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/90 z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged artwork"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

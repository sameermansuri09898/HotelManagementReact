import React from "react";

function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
        alt="Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Welcome to RoyalStay Hotel
        </h1>

        <p className="text-gray-200 max-w-2xl mb-6 text-sm md:text-lg">
          Experience luxury, comfort, and world-class hospitality.
          Book your perfect stay with us today.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition">
            Book Now
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Explore Rooms
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
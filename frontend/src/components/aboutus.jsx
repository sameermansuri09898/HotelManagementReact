import React from "react";

function Aboutus() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Our Hotel
          </h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Welcome to <span className="text-yellow-600 font-semibold">RoyalStay Hotel</span>, 
            where luxury meets comfort. We provide world-class hospitality with 
            modern amenities, elegant rooms, and exceptional service.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're traveling for business or leisure, our hotel offers 
            premium facilities, fine dining, and a relaxing atmosphere.
          </p>

          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition duration-300">
            Explore Rooms
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Aboutus;
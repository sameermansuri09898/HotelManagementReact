import React from "react";
import { FaWifi, FaSnowflake, FaTv } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 3000,
    originalPrice: 4000,
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    features: ["wifi", "ac", "tv"],
  },
  {
    id: 2,
    name: "Executive Suite",
    price: 5500,
    originalPrice: 7000,
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    features: ["wifi", "ac", "tv"],
  },
  {
    id: 3,
    name: "Luxury Suite",
    price: 8000,
    originalPrice: 10000,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    features: ["wifi", "ac", "tv"],
  },
];

function Rooms() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Rooms
          </h2>
          <p className="text-gray-500 mt-2">
            Choose from our luxurious and comfortable rooms
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const discount = Math.round(
              ((room.originalPrice - room.price) / room.originalPrice) * 100
            );

            return (
              <div
                key={room.id}
                className="relative bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {discount}% OFF
                </span>

                {/* Image */}
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {room.name}
                  </h3>

                  {/* Price Section */}
                  <div className="mb-3">
                    <span className="text-yellow-600 font-bold text-lg mr-2">
                      ₹{room.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ₹{room.originalPrice}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      / night
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-4 text-gray-600 mb-4 text-lg">
                    {room.features.includes("wifi") && <FaWifi title="WiFi" />}
                    {room.features.includes("ac") && <FaSnowflake title="AC" />}
                    {room.features.includes("tv") && <FaTv title="TV" />}
                  </div>

                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-10">
          <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg transition">
            Explore More Rooms
          </button>
        </div>

      </div>
    </section>
  );
}

export default Rooms;
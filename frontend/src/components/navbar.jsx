import React, { useState } from "react";
import { Menu, X, Hotel, User, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 p-2 rounded-xl text-black">
              <Hotel size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide text-yellow-500">
                Royal Stay
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Luxury Hotel</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="/" className="hover:text-yellow-500 duration-300">
              Home
            </a>

            <a href="/rooms" className="hover:text-yellow-500 duration-300">
              Rooms
            </a>

            <a href="/booking" className="hover:text-yellow-500 duration-300">
              Booking
            </a>

            <a href="/about" className="hover:text-yellow-500 duration-300">
              About
            </a>

            <a href="/contact" className="hover:text-yellow-500 duration-300">
              Contact
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 duration-300"
            >
              <User size={18} />
              Login
            </a>

            <a
              href="/booking"
              className="px-5 py-2 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-5 font-medium">

            <a href="/" className="hover:text-yellow-500">Home</a>
            <a href="/rooms" className="hover:text-yellow-500">Rooms</a>
            <a href="/booking" className="hover:text-yellow-500">Booking</a>
            <a href="/about" className="hover:text-yellow-500">About</a>
            <a href="/contact" className="hover:text-yellow-500">Contact</a>

            <hr className="border-gray-800" />

            <a
              href="/login"
              className="flex items-center gap-2 hover:text-yellow-500"
            >
              <User size={18} />
              Login
            </a>

            <a
              href="/contact"
              className="flex items-center gap-2 hover:text-yellow-500"
            >
              <Phone size={18} />
              Support
            </a>

            <a
              href="/booking"
              className="mt-2 text-center px-5 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 duration-300"
            >
              Book Now
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
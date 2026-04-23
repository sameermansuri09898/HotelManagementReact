import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-14 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Hotel Info */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Royal Stay Hotel
            </h2>

            <p className="text-gray-400 leading-7">
              Experience luxury, comfort, and premium hospitality with Royal Stay
              Hotel. Enjoy unforgettable stays with top-class service.
            </p>

            <div className="flex gap-4 mt-5">
              <a
                href="/"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-black duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-yellow-500 duration-300">Home</a></li>
              <li><a href="/rooms" className="hover:text-yellow-500 duration-300">Rooms</a></li>
              <li><a href="/booking" className="hover:text-yellow-500 duration-300">Booking</a></li>
              <li><a href="/about" className="hover:text-yellow-500 duration-300">About</a></li>
              <li><a href="/contact" className="hover:text-yellow-500 duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Luxury Rooms</li>
              <li>Restaurant</li>
              <li>Spa & Wellness</li>
              <li>Free WiFi</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-500" />
                Haridwar, Uttarakhand
              </p>

              <p className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-500" />
                +91 98765 43210
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-500" />
                support@royalstay.com
              </p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Royal Stay Hotel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
{/* Logo Placeholder */}
<div className="flex justify-center">
  <img 
    src="/Gamers Land Social Media Avatar-Photoroom.png" 
    alt="GEMARS LAND Logo"
    className="w-96 h-96 object-contain transform hover:scale-105 transition-transform duration-300 rounded-full"
  />
</div>

        {/* Brand Name */}
        <div className="space-y-4">
          <h1 className="text-9xl md:text-8xl font-black bg-gradient-to-r from-white via-orange-400 to-red-500 bg-clip-text text-transparent leading-tight">
            GAMERS LAND
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Your Ultimate Gaming Destination
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            to="/pubg-topup"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            PUBG Mobile UC
          </Link>
          <Link
            to="/ml-diamonds"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Mobile Legends Diamonds
          </Link>
          <Link
            to="/freefire-diamonds"
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Free Fire Diamonds
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
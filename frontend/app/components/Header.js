// components/Header.js

import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png" // replace with your logo image path
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-lg font-bold">GiveAWay</span>
        </div>
        <nav className="space-x-4">
          <Link href="#" className="hover:text-gray-300">Home</Link>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="/auth/login" className="hover:text-gray-300">Login</a>
          <a href="/auth/register" className="hover:text-gray-300">Register</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { FaAmazon } from 'react-icons/fa';

const Navbar = () => {
  const title = 'My App';

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
      <FaAmazon />

      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="flex flex-row space-x-4">
        <a href="#" className="text-lg">
          Home
        </a>
        <a href="#" className="text-lg">
          About
        </a>
        <a href="#" className="text-lg">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

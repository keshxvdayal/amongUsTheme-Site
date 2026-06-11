'use client';
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo2.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8400FF] text-white py-8 px-4 sm:px-6 md:px-10 flex flex-col items-center text-center">
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center space-y-6 sm:space-y-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image src={logo} alt="Code Forge Logo" width={150} height={150} />
        </div>
        
        {/* Quick Links */}
        <div className="hidden md:block">
        <div className="  flex-col items-center">
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 font-semibold">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#prize" className="hover:underline">Prize</a></li>
            <li><a href="#track" className="hover:underline">Tracks</a></li>
            <li><a href="#sponser" className="hover:underline">Sponsor</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        </div>
        
        {/* Contact Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p className="text-sm sm:text-lg">webforgecommunity@gmail.com</p>
          
          <p className="text-sm sm:text-lg">Jaipur, India</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 sm:gap-8 mt-6">
        
        
       
      </div>
      
      {/* Copyright */}
      <p className="mt-6 text-sm sm:text-lg">Copyright &copy; 2025</p>
    </footer>
  );
};

export default Footer;

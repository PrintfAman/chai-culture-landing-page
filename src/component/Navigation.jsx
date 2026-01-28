import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Navigation({ mounted }) {
  return (
    <nav className={`relative z-50 px-6 md:px-12 py-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4 group">
          <div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            {/* Ornamental border with animation */}
            <div className="absolute inset-0 border-2 border-[#D4AF37] rotate-45 rounded-sm transition-all duration-500 group-hover:rotate-90"></div>
            <div className="absolute inset-[3px] bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center rounded-sm transition-all duration-500 group-hover:from-[#FFD700] group-hover:to-[#D4AF37]">
              <svg className="w-8 h-8 text-[#0a0604] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z M18,15v-2h-2v2H18z M14,15v-2h-2v2H14z M10,15v-2H8v2H10z M6,15v-2H4v2H6z M18,11V9h-2v2H18z M14,11V9h-2v2H14z M10,11V9H8v2H10z M6,11V9H4v2H6z"/>
              </svg>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#D4AF37] transition-all duration-300 group-hover:text-[#FFD700]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Chai Culture
            </h1>
            <div className="flex items-center space-x-1 text-[#8B7355] text-xs tracking-[0.2em]">
              <div className="w-3 h-[1px] bg-[#8B7355] transition-all duration-500 group-hover:w-6"></div>
              <span className="transition-colors duration-300 group-hover:text-[#D4AF37]">EST. 2026</span>
              <div className="w-3 h-[1px] bg-[#8B7355] transition-all duration-500 group-hover:w-6"></div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {[Instagram, Facebook, Twitter].map((Icon, index) => (
            <a 
              key={index}
              href="#" 
              className="text-[#8B7355] hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-[#D4AF37] rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-20"></div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

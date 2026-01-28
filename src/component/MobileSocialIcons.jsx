import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function MobileSocialIcons({ mounted }) {
  return (
    <div className={`md:hidden flex justify-center items-center space-x-8 mb-8 transition-all duration-1000 delay-1700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {[Instagram, Facebook, Twitter].map((Icon, index) => (
        <a 
          key={index}
          href="#" 
          className="text-[#8B7355] hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 relative group"
        >
          <Icon className="w-6 h-6 relative z-10" />
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30"></div>
        </a>
      ))}
    </div>
  );
}

import React from 'react';

export default function Footer({ mounted }) {
  return (
    <footer className={`relative z-10 px-6 md:px-12 py-8 border-t border-[#3a3028]/30 transition-all duration-1000 delay-2100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#6B5D4F] text-sm transition-colors duration-300 hover:text-[#8B7355]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          © 2026 Chai Culture. All rights reserved.
        </p>
        <p className="text-[#3a3028] text-xs mt-2 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
          Crafted with tradition and passion
        </p>
      </div>
    </footer>
  );
}

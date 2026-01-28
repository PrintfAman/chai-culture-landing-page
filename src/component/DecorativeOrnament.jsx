import React from 'react';

export default function DecorativeOrnament({ mounted }) {
  return (
    <div 
      className={`mb-12 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    >
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse"></div>
        <svg 
          className="w-8 h-8 text-[#D4AF37] transition-transform duration-700 hover:rotate-180" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))',
            animation: 'spin-slow 20s linear infinite'
          }}
        >
          <path d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5L12,2Z"/>
        </svg>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}

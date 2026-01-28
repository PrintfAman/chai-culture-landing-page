import React from 'react';

export default function DecorativeDivider({ mounted }) {
  return (
    <div className={`flex items-center justify-center space-x-4 mb-8 transition-all duration-1000 delay-1500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#3a3028] animate-expand-right"></div>
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div 
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${i === 1 ? 'bg-[#8B7355]' : 'bg-[#D4AF37]'}`}
            style={{
              animation: `pulse 2s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
      <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#3a3028] animate-expand-left"></div>
    </div>
  );
}

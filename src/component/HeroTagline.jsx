import React from 'react';

export default function HeroTagline({ mounted, scrollY }) {
  return (
    <>
      {/* Main Tagline */}
      <h2 
        className={`relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold mb-8  leading-tight transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ 
          fontFamily: 'Playfair Display, serif',
          transform: `translateY(${scrollY * 0.1}px)`, 
          marginTop: '0px' 
        }}
      >
        <span 
          className="block text-[#F5F5DC] mb-2 transition-all duration-700 hover:tracking-wider"
          style={{
            textShadow: '0 0 40px rgba(245, 245, 220, 0.2)',
            animation: 'fadeInUp 1s ease-out'
          }}
        >
          Brew the
        </span>
        <span 
          className="py-7 block bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent relative"
          style={{
            animation: 'shimmer 3s ease-in-out infinite',
            backgroundSize: '200% auto'
          }}
        >
          Royal Tradition
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine"></div>
        </span>
      </h2>

      {/* Description */}
      <p 
        className={`text-xl md:text-2xl text-[#C9B896] mb-6 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ 
          fontFamily: 'Poppins, sans-serif',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        Experience the authentic essence of royal Indian households, where every cup tells a story of heritage, crafted with the finest spices and timeless elegance.
      </p>

      <p 
        className={`text-base text-[#8B7355] mb-12 italic transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Premium instant chai tea premix · Centuries-old heritage in every sip
      </p>
    </>
  );
}
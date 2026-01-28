import React from 'react';

export default function BackgroundEffects({ mousePosition, scrollY }) {
  return (
    <>
      {/* Animated cursor glow */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-700 ease-out z-50"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
          left: `${mousePosition.x * 2}px`,
          top: `${mousePosition.y * 2}px`,
          transform: `translate(-50%, -50%)`
        }}
      />

      {/* Ornamental background patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.1}px) translateX(${mousePosition.x * 0.5}px)`
          }}
        />
      </div>

      {/* Radial gradient overlays with parallax */}
      <div 
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-[#D4AF37]/10 to-transparent blur-3xl transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) translateY(${scrollY * 0.3}px)`
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#8B4513]/10 to-transparent blur-3xl transition-transform duration-700"
        style={{
          transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px) translateY(${-scrollY * 0.2}px)`
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </>
  );
}

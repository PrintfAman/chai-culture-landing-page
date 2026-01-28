import React from 'react';
import PixelTransition from './PixelTransition.jsx';

export default function ChaiCupImage({ mounted, scrollY }) {
  return (
    <div 
      className={`mb-12 max-w-lg mx-auto transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{
        transform: `translateY(${scrollY * 0.05}px)`
      }}
    >
      <div className="relative border-2 border-[#D4AF37]/30 rounded-sm p-1 bg-[#1a1410]/30 backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-2xl hover:shadow-[#D4AF37]/20 group">
        {/* Corner decorations with animation */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] transition-all duration-500 group-hover:w-6 group-hover:h-6"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] transition-all duration-500 group-hover:w-6 group-hover:h-6"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] transition-all duration-500 group-hover:w-6 group-hover:h-6"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] transition-all duration-500 group-hover:w-6 group-hover:h-6"></div>
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
          <div className="absolute inset-0 border border-[#D4AF37] rounded-sm animate-border-glow"></div>
        </div>
        
        <PixelTransition
          firstContent={
            <img
              src="/teacup.jpg"
              alt="Traditional chai tea cup"
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0a0604",
                backgroundImage: "radial-gradient(circle at center, #1a1410 0%, #0a0604 100%)",
                borderRadius: "2px",
                position: "relative"
              }}
            >
              {/* Decorative pattern overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                opacity: 0.05,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
              
              {/* Icon with glow */}
              <div style={{ position: "relative", marginBottom: "1rem" }}>
                <div style={{
                  position: "absolute",
                  inset: "-20px",
                  background: "radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  animation: "pulse 2s ease-in-out infinite"
                }}></div>
                <svg className="w-20 h-20 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor" style={{ position: "relative" }}>
                  <path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z"/>
                </svg>
              </div>
              
              {/* Text content */}
              <p style={{ 
                fontWeight: 700, 
                fontSize: "2.5rem", 
                color: "#D4AF37", 
                fontFamily: 'Playfair Display, serif',
                textShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
                marginBottom: "0.5rem",
                letterSpacing: "0.05em"
              }}>
                Coming Soon
              </p>
              <div style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
                marginBottom: "0.5rem"
              }}></div>
              <p style={{ 
                fontSize: "0.875rem", 
                color: "#8B7355", 
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: "0.2em",
                textTransform: "uppercase"
              }}>
                Chai Culture
              </p>
            </div>
          }
          gridSize={16}
          pixelColor='#D4AF37'
          once={false}
          animationStepDuration={0.6}
          aspectRatio="100%"
          style={{
            borderRadius: "2px",
            overflow: "hidden"
          }}
        />
      </div>
      <p className="text-[#8B7355] text-sm mt-4 italic animate-pulse" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Hover to reveal the tradition
      </p>
    </div>
  );
}

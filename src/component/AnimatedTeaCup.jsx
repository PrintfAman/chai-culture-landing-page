import React, { useState, useEffect } from 'react';

export default function AnimatedTeaCup({ mounted }) {
  const [steamVisible, setSteamVisible] = useState(false);

  useEffect(() => {
    // Show steam after component mounts
    const timer = setTimeout(() => {
      setSteamVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-32 h-32 mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
      {/* Steam particles */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-full">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ${steamVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: `steam ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            <svg width="20" height="30" viewBox="0 0 20 30" className="opacity-60">
              <path
                d="M10 30 Q5 20, 10 15 Q15 10, 10 0"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Tea Cup SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-2xl"
        style={{
          filter: 'drop-shadow(0 10px 30px rgba(212, 175, 55, 0.4))',
          animation: 'floatCup 3s ease-in-out infinite'
        }}
      >
        {/* Saucer */}
        <ellipse
          cx="100"
          cy="165"
          rx="70"
          ry="12"
          fill="url(#saucerGradient)"
          className="transition-all duration-500"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />

        {/* Cup Body */}
        <path
          d="M 60 140 L 50 90 Q 50 80, 60 80 L 140 80 Q 150 80, 150 90 L 140 140 Q 140 150, 130 150 L 70 150 Q 60 150, 60 140 Z"
          fill="url(#cupGradient)"
          stroke="#B8860B"
          strokeWidth="2"
        />

        {/* Cup Rim Highlight */}
        <ellipse
          cx="100"
          cy="80"
          rx="45"
          ry="8"
          fill="url(#rimGradient)"
          opacity="0.8"
        />

        {/* Tea Liquid */}
        <path
          d="M 65 135 L 58 95 L 142 95 L 135 135 Q 135 142, 128 142 L 72 142 Q 65 142, 65 135 Z"
          fill="url(#teaGradient)"
          opacity="0.9"
        >
          <animate
            attributeName="d"
            values="M 65 135 L 58 95 L 142 95 L 135 135 Q 135 142, 128 142 L 72 142 Q 65 142, 65 135 Z;
                    M 65 137 L 58 95 L 142 95 L 135 137 Q 135 143, 128 143 L 72 143 Q 65 143, 65 137 Z;
                    M 65 135 L 58 95 L 142 95 L 135 135 Q 135 142, 128 142 L 72 142 Q 65 142, 65 135 Z"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Tea Surface Ripple */}
        <ellipse
          cx="100"
          cy="95"
          rx="40"
          ry="5"
          fill="none"
          stroke="#8B4513"
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="rx"
            values="40;42;40"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.1;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Cup Handle */}
        <path
          d="M 150 100 Q 180 100, 180 120 Q 180 140, 150 140"
          fill="none"
          stroke="url(#handleGradient)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 150 100 Q 180 100, 180 120 Q 180 140, 150 140"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Decorative Pattern on Cup */}
        <g opacity="0.4">
          <circle cx="80" cy="110" r="3" fill="#D4AF37" />
          <circle cx="100" cy="115" r="3" fill="#D4AF37" />
          <circle cx="120" cy="110" r="3" fill="#D4AF37" />
          <path
            d="M 70 125 Q 100 130, 130 125"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* Shine Effect */}
        <ellipse
          cx="75"
          cy="100"
          rx="15"
          ry="25"
          fill="white"
          opacity="0.2"
          transform="rotate(-20 75 100)"
        />

        {/* Gradients */}
        <defs>
          {/* Cup Gradient */}
          <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          {/* Rim Gradient */}
          <linearGradient id="rimGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
          </linearGradient>

          {/* Tea Gradient */}
          <linearGradient id="teaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C17522" />
            <stop offset="50%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#8B4513" />
          </linearGradient>

          {/* Saucer Gradient */}
          <radialGradient id="saucerGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#8B7355" />
          </radialGradient>

          {/* Handle Gradient */}
          <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl opacity-30 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, transparent 70%)',
          animation: 'pulseGlow 3s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes steam {
          0% {
            transform: translateX(-50%) translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(-50%) translateY(-30px) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes floatCup {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(1deg);
          }
          75% {
            transform: translateY(-3px) rotate(-1deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
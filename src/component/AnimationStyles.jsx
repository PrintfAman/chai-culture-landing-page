import React from 'react';

export default function AnimationStyles() {
  return (
    <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0) translateX(0);
        }
        50% {
          transform: translateY(-20px) translateX(10px);
        }
      }

      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -200% center;
        }
        100% {
          background-position: 200% center;
        }
      }

      @keyframes shine {
        0% {
          left: -100%;
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          left: 100%;
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes pulse-slow {
        0%, 100% {
          opacity: 0.4;
        }
        50% {
          opacity: 0.6;
        }
      }

      @keyframes flip {
        0% {
          transform: rotateX(0);
        }
        50% {
          transform: rotateX(90deg);
        }
        100% {
          transform: rotateX(0);
        }
      }

      @keyframes bounce-in {
        0% {
          opacity: 0;
          transform: translateY(-10px);
        }
        60% {
          opacity: 1;
          transform: translateY(5px);
        }
        100% {
          transform: translateY(0);
        }
      }

      @keyframes border-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
        }
        50% {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
        }
      }

      @keyframes expand-right {
        from {
          width: 0;
        }
        to {
          width: 6rem;
        }
      }

      @keyframes expand-left {
        from {
          width: 0;
        }
        to {
          width: 6rem;
        }
      }

      .animate-expand-right {
        animation: expand-right 1s ease-out;
      }

      .animate-expand-left {
        animation: expand-left 1s ease-out;
      }

      .animate-shine {
        animation: shine 3s ease-in-out infinite;
      }

      .animate-pulse-slow {
        animation: pulse-slow 4s ease-in-out infinite;
      }

      .animate-bounce-in {
        animation: bounce-in 0.6s ease-out;
      }

      .animate-border-glow {
        animation: border-glow 2s ease-in-out infinite;
      }
    `}</style>
  );
}

import React from 'react';
import { Mail } from 'lucide-react';

export default function EmailSignupForm({ mounted, email, setEmail, isSubmitted, handleSubmit }) {
  return (
    <div className={`max-w-xl mx-auto mb-16 transition-all duration-1000 delay-1300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h3 className="text-2xl text-[#D4AF37] mb-4 transition-all duration-300 hover:text-[#FFD700]" style={{ fontFamily: 'Playfair Display, serif' }}>
        Be the First to Experience Royalty
      </h3>
      <p className="text-[#8B7355] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Join our exclusive waitlist and receive a special launch offer
      </p>
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B7355] group-focus-within:text-[#D4AF37] transition-all duration-300 group-focus-within:scale-110" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-12 pr-4 py-4 bg-[#1a1410]/50 backdrop-blur-sm border border-[#3a3028] focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 text-[#F5F5DC] placeholder-[#6B5D4F] transition-all duration-300 rounded-sm hover:bg-[#1a1410]/70"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-[#0a0604] font-bold tracking-wide hover:shadow-lg hover:shadow-[#D4AF37]/50 transform hover:scale-105 transition-all duration-300 rounded-sm relative overflow-hidden group"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              backgroundSize: '200% auto'
            }}
          >
            <span className="relative z-10">RESERVE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% auto' }}></div>
          </button>
        </div>
        
        {isSubmitted && (
          <div className="absolute -bottom-10 left-0 right-0 text-center animate-bounce-in">
            <p className="text-[#4ADE80] text-sm font-medium" style={{ 
              fontFamily: 'Poppins, sans-serif',
              animation: 'fadeInUp 0.5s ease-out, pulse 2s ease-in-out infinite'
            }}>
              ✓ Thank you! You're on the list.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

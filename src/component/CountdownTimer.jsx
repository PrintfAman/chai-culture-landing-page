import React from 'react';

export default function CountdownTimer({ mounted, timeLeft }) {
  return (
    <div className={`mb-16 transition-all duration-1000 delay-1100 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <div className="inline-block relative group">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] blur-2xl opacity-40 animate-pulse-slow"></div>
        
        {/* Badge */}
        <div className="relative bg-gradient-to-r from-[#1a1410] via-[#0a0604] to-[#1a1410] border-2 border-[#D4AF37] px-8 py-4 rounded-sm transition-all duration-500 group-hover:border-[#FFD700] group-hover:shadow-2xl group-hover:shadow-[#D4AF37]/30">
          {/* Animated corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
          
          <div className="text-center">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] mb-3 font-semibold animate-pulse" style={{ fontFamily: 'Poppins, sans-serif' }}>
              COMING SOON
            </p>
            <div className="flex items-center justify-center space-x-6">
              {[
                { value: timeLeft.days, label: 'DAYS' },
                { value: timeLeft.hours, label: 'HOURS' },
                { value: timeLeft.minutes, label: 'MINS' },
                { value: timeLeft.seconds, label: 'SECS' }
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  {index > 0 && <div className="text-2xl text-[#D4AF37] animate-pulse">:</div>}
                  <div className="text-center transform transition-transform duration-300 hover:scale-110">
                    <div 
                      className="text-3xl font-bold text-[#FFD700] transition-all duration-300" 
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                        animation: item.label === 'SECS' ? 'flip 1s ease-in-out' : 'none'
                      }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[#8B7355] tracking-wider">{item.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

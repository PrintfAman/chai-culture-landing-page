import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator({ mounted }) {
  return (
    <div className={`transition-all duration-1000 delay-1900 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <ChevronDown 
        className="w-6 h-6 text-[#8B7355] mx-auto transition-colors duration-300 hover:text-[#D4AF37]" 
        style={{
          animation: 'bounce 2s ease-in-out infinite'
        }}
      />
    </div>
  );
}

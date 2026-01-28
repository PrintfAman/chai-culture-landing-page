import React, { useState, useEffect } from 'react';
import Navigation from './component/Navigation';
import BackgroundEffects from './component/BackgroundEffects';
import DecorativeOrnament from './component/DecorativeOrnament';
import AnimatedTeaCup from './component/AnimatedTeaCup';
import HeroTagline from './component/HeroTagline';
import ChaiCupImage from './component/ChaiCupImage';
import CountdownTimer from './component/CountdownTimer';
import EmailSignupForm from './component/EmailSignupForm';
import DecorativeDivider from './component/DecorativeDivider';
import MobileSocialIcons from './component/MobileSocialIcons';
import ScrollIndicator from './component/ScrollIndicator';
import Footer from './component/Footer';
import AnimationStyles from './component/AnimationStyles';

export default function ChaiCulture() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Scroll animation
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3500);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0604] overflow-hidden">
      <BackgroundEffects mousePosition={mousePosition} scrollY={scrollY} />

      <Navigation mounted={mounted} />

      {/* Hero Section */}
      <main className="relative z-10 px-6 md:px-122 py-6 md:py-10">
        <div className="max-w-5xl mx-auto text-center">
          <DecorativeOrnament mounted={mounted} />
          
          {/* Animated Tea Cup - NEW! */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <AnimatedTeaCup mounted={mounted} />
          </div>
          
          <HeroTagline mounted={mounted} scrollY={scrollY} />

          <ChaiCupImage mounted={mounted} scrollY={scrollY} />

          <CountdownTimer mounted={mounted} timeLeft={timeLeft} />

          <EmailSignupForm 
            mounted={mounted}
            email={email}
            setEmail={setEmail}
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
          />

          <DecorativeDivider mounted={mounted} />

          <MobileSocialIcons mounted={mounted} />

          <ScrollIndicator mounted={mounted} />
        </div>
      </main>

      <Footer mounted={mounted} />

      <AnimationStyles />
    </div>
  );
}
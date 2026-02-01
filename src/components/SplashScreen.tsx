import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    // Logo animation duration
    const animationTimer = setTimeout(() => {
      setShowCurtain(true);
    }, 2500);

    // Complete the splash after curtain animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-deep ${showCurtain ? 'animate-curtain-up' : ''}`}>
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(43 56% 52%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Logo container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated logo */}
        <div className={`relative ${isAnimating ? 'animate-scissors' : ''}`}>
          <img 
            src={logo} 
            alt="SHEARS Logo" 
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
          
          {/* Gold glow effect */}
          <div className="absolute inset-0 blur-2xl opacity-30">
            <img 
              src={logo} 
              alt="" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand text */}
        <div className="mt-6 animate-text-reveal">
          <p className="text-xs md:text-sm tracking-[0.4em] text-muted-foreground uppercase">
            Premium Grooming
          </p>
        </div>

        {/* Loading bar */}
        <div className="mt-8 w-48 h-[2px] bg-charcoal-light overflow-hidden rounded-full">
          <div 
            className="h-full bg-primary animate-shimmer"
            style={{
              width: '100%',
              background: 'linear-gradient(90deg, transparent, hsl(43 56% 52%), transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

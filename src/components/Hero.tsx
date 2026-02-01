import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Luxury Salon Interior" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/70 via-charcoal-deep/50 to-charcoal-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-charcoal/50 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-xs md:text-sm tracking-widest uppercase text-primary">
              Premium Grooming Since 2015
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">One of the </span>
            <span className="text-gradient-gold">Finest</span>
            <span className="text-foreground"> & </span>
            <span className="text-gradient-gold">Fastest-Growing</span>
            <br />
            <span className="text-foreground">Salons</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Where Passion Meets Grace
          </p>

          {/* Prior booking notice */}
          <p className="text-sm text-primary tracking-wider uppercase mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            ✦ Prior Booking Required ✦
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={onBookNow}
              className="btn-gold rounded-sm min-w-[200px]"
            >
              Book Appointment
            </button>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold-outline rounded-sm min-w-[200px]"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <button 
          onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
    </section>
  );
};

export default Hero;

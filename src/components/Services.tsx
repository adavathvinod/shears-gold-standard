import { Scissors, Sparkles, Palette, Droplets, Wind, Star } from 'lucide-react';
import serviceHaircut from '@/assets/service-haircut.jpg';
import serviceBeard from '@/assets/service-beard.jpg';
import serviceColor from '@/assets/service-color.jpg';
import serviceTreatment from '@/assets/service-treatment.jpg';
import serviceStyling from '@/assets/service-styling.jpg';
import serviceTattoo from '@/assets/service-tattoo.jpg';

const services = [
  {
    icon: Scissors,
    title: 'Haircuts',
    description: 'Precision cuts tailored to your style. From classic to contemporary.',
    price: 'From ₹500',
    image: serviceHaircut,
  },
  {
    icon: Sparkles,
    title: 'Beard Grooming',
    description: 'Expert beard shaping, trimming, and hot towel treatments.',
    price: 'From ₹300',
    image: serviceBeard,
  },
  {
    icon: Palette,
    title: 'Hair Color',
    description: 'Premium coloring services. Highlights, balayage, and global color.',
    price: 'From ₹1500',
    image: serviceColor,
  },
  {
    icon: Droplets,
    title: 'Hair Treatments',
    description: 'Keratin, smoothening, and deep conditioning for healthy hair.',
    price: 'From ₹2000',
    image: serviceTreatment,
  },
  {
    icon: Wind,
    title: 'Styling',
    description: 'Event styling, blowouts, and special occasion looks.',
    price: 'From ₹400',
    image: serviceStyling,
  },
  {
    icon: Star,
    title: 'Tattoo Art',
    description: 'Professional tattoo services with custom designs.',
    price: 'On Consultation',
    image: serviceTattoo,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-charcoal-deep relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(43 56% 52%) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-luxury group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-charcoal/80 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <p className="text-primary font-semibold text-sm tracking-wider">
                    {service.price}
                  </p>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Book Now →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

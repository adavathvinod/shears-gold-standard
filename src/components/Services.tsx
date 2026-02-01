import { Scissors, Sparkles, Palette, Droplets, Wind, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircuts',
    description: 'Precision cuts tailored to your style. From classic to contemporary.',
    price: 'From ₹500',
  },
  {
    icon: Sparkles,
    title: 'Beard Grooming',
    description: 'Expert beard shaping, trimming, and hot towel treatments.',
    price: 'From ₹300',
  },
  {
    icon: Palette,
    title: 'Hair Color',
    description: 'Premium coloring services. Highlights, balayage, and global color.',
    price: 'From ₹1500',
  },
  {
    icon: Droplets,
    title: 'Hair Treatments',
    description: 'Keratin, smoothening, and deep conditioning for healthy hair.',
    price: 'From ₹2000',
  },
  {
    icon: Wind,
    title: 'Styling',
    description: 'Event styling, blowouts, and special occasion looks.',
    price: 'From ₹400',
  },
  {
    icon: Star,
    title: 'Tattoo Art',
    description: 'Professional tattoo services with custom designs.',
    price: 'On Consultation',
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
              className="card-luxury p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-charcoal-light flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price */}
              <p className="text-primary font-semibold text-sm tracking-wider">
                {service.price}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-[-20px] w-12 h-[1px] bg-primary rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

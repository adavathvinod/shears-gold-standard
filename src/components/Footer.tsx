import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-charcoal-light">
      {/* Map Section */}
      <div className="w-full h-64 md:h-80 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5647!2d78.4107!3d17.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1262%2C%20Road%20No.%2036%2C%20Jubilee%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SHEARS Location"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="SHEARS" className="w-12 h-12 object-contain" />
              <span className="font-display text-2xl font-semibold text-gradient-gold">SHEARS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium grooming experience where passion meets grace. Trusted by celebrities and style-conscious individuals across Hyderabad.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/shears_hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Instagram size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://wa.me/919502038042" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'Reviews'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  1262, Road No. 36,<br />Jubilee Hills, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+919502038042" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +91 95020 38042
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:hello@shears.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  hello@shears.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Hours</h4>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="text-muted-foreground text-sm space-y-2">
                <p>Monday – Sunday</p>
                <p className="text-primary font-semibold">11:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SHEARS by Arun. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Crafted with ♥ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

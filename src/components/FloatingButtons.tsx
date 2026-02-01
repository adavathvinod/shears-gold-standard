import { Phone, MessageCircle, Instagram } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href="https://instagram.com/shears_hyderabad"
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-instagram"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919502038042"
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-whatsapp"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      {/* Phone */}
      <a
        href="tel:+919502038042"
        className="fab fab-phone"
        aria-label="Call us"
      >
        <Phone size={22} />
      </a>
    </div>
  );
};

export default FloatingButtons;

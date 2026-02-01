import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Scissors } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  'Haircut',
  'Beard Grooming',
  'Hair Color',
  'Hair Treatment',
  'Styling',
  'Tattoo Consultation',
];

const timeSlots = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Build WhatsApp message
      const message = `Hello SHEARS! I'd like to book an appointment.

📝 *Booking Details*
👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
✂️ Service: ${formData.service}
${formData.notes ? `📋 Notes: ${formData.notes}` : ''}

Please confirm my booking. Thank you!`;

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/919502038042?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Reset after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', date: '', time: '', service: '', notes: '' });
        onClose();
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-deep/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-charcoal border border-charcoal-light rounded-xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-charcoal-light">
          <div>
            <h3 className="font-display text-2xl font-semibold">Book Appointment</h3>
            <p className="text-muted-foreground text-sm mt-1">Fill in your details below</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-charcoal-light rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-12 pr-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-12 pr-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full pl-12 pr-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full pl-12 pr-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground appearance-none cursor-pointer"
              >
                <option value="">Time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Service */}
          <div className="relative">
            <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full pl-12 pr-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground appearance-none cursor-pointer"
            >
              <option value="">Select Service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <textarea
            placeholder="Additional notes (optional)"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 bg-charcoal-light border border-charcoal-light rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full btn-gold rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : isSubmitted ? (
              <>
                <span>✓ Redirecting to WhatsApp...</span>
              </>
            ) : (
              <>
                <span>Confirm Booking via WhatsApp</span>
              </>
            )}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Your booking will be confirmed via WhatsApp
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

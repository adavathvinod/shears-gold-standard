import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul K.',
    rating: 5,
    text: 'Best salon experience in Hyderabad! Arun and his team are absolute professionals. The attention to detail is unmatched.',
    date: '2 weeks ago',
  },
  {
    name: 'Priya M.',
    rating: 5,
    text: 'Amazing haircut and the ambiance is so premium. Worth every penny. Highly recommended for anyone looking for quality grooming.',
    date: '1 month ago',
  },
  {
    name: 'Vikram S.',
    rating: 5,
    text: 'Been coming here for 3 years now. The consistency in quality is what keeps me coming back. Arun understands exactly what I want.',
    date: '3 weeks ago',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-charcoal-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-primary/5">
        <Quote size={200} />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/5 rotate-180">
        <Quote size={200} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto" />
        </div>

        {/* Google Rating Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="card-luxury p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-display text-lg font-semibold">Google Reviews</span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-5xl font-display font-bold text-primary">4.4</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'} 
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground text-sm">Based on 505+ reviews</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="card-luxury p-6 lg:p-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{review.name[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

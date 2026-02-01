import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.png';
import gallery2 from '@/assets/gallery-2.png';
import gallery3 from '@/assets/gallery-3.png';
import gallery4 from '@/assets/gallery-4.png';
import gallery5 from '@/assets/gallery-5.png';
import salonInterior from '@/assets/salon-interior.png';

const galleryImages = [
  { src: gallery1, alt: 'Celebrity client 1', category: 'Clients' },
  { src: gallery2, alt: 'Celebrity client 2', category: 'Clients' },
  { src: salonInterior, alt: 'Salon Interior', category: 'Salon' },
  { src: gallery3, alt: 'Styling in action', category: 'Work' },
  { src: gallery4, alt: 'Team with clients', category: 'Clients' },
  { src: gallery5, alt: 'Tattoo artwork', category: 'Tattoo' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-charcoal relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by celebrities, athletes, and style-conscious individuals across Hyderabad
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                index === 2 ? 'md:col-span-2 md:row-span-1' : ''
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-primary text-xs tracking-widest uppercase">{image.category}</span>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal-deep/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

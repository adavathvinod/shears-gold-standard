import { useState } from 'react';
import { X } from 'lucide-react';

// AI Generated gallery images
import galleryG1 from '@/assets/gallery-g1.jpg';
import galleryG2 from '@/assets/gallery-g2.jpg';
import galleryG3 from '@/assets/gallery-g3.jpg';
import galleryG4 from '@/assets/gallery-g4.jpg';
import galleryG5 from '@/assets/gallery-g5.jpg';
import galleryG6 from '@/assets/gallery-g6.jpg';
import galleryG7 from '@/assets/gallery-g7.jpg';
import galleryG8 from '@/assets/gallery-g8.jpg';
import galleryG9 from '@/assets/gallery-g9.jpg';
import galleryG10 from '@/assets/gallery-g10.jpg';
import galleryG11 from '@/assets/gallery-g11.jpg';
import galleryG12 from '@/assets/gallery-g12.jpg';

const galleryImages = [
  { src: galleryG1, alt: 'Modern Fade Haircut', category: 'Haircuts' },
  { src: galleryG2, alt: 'Textured Pompadour', category: 'Haircuts' },
  { src: galleryG3, alt: 'Beard Grooming', category: 'Beard' },
  { src: galleryG7, alt: 'Luxury Salon Interior', category: 'Salon' },
  { src: galleryG4, alt: 'Classic Slick Back', category: 'Haircuts' },
  { src: galleryG5, alt: 'Trendy Undercut', category: 'Haircuts' },
  { src: galleryG6, alt: 'Hair Highlights', category: 'Color' },
  { src: galleryG8, alt: 'Curly Hair Styling', category: 'Styling' },
  { src: galleryG9, alt: 'Hot Towel Treatment', category: 'Experience' },
  { src: galleryG10, alt: 'Geometric Tattoo', category: 'Tattoo' },
  { src: galleryG11, alt: 'Sharp Fade Cut', category: 'Haircuts' },
  { src: galleryG12, alt: 'Keratin Treatment', category: 'Treatment' },
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
            Explore our portfolio of premium haircuts, styling, and transformations
          </p>
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                index === 3 || index === 8 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 3 || index === 8 ? 'aspect-square' : 'aspect-square'} overflow-hidden`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <span className="text-primary text-xs tracking-widest uppercase mb-1">{image.category}</span>
                <span className="text-foreground text-sm font-medium text-center">{image.alt}</span>
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
          className="fixed inset-0 z-50 bg-charcoal-deep/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

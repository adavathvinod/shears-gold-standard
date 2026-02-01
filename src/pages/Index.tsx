import { useState, useCallback } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleOpenBooking = useCallback(() => {
    setIsBookingOpen(true);
  }, []);

  const handleCloseBooking = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  return (
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main Content */}
      <div className={`min-h-screen ${showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Header onBookNow={handleOpenBooking} />
        
        <main>
          <Hero onBookNow={handleOpenBooking} />
          <Services />
          <Gallery />
          <Reviews />
        </main>

        <Footer />
        
        <FloatingButtons />
        
        {/* Booking Modal */}
        <BookingForm isOpen={isBookingOpen} onClose={handleCloseBooking} />
      </div>
    </>
  );
};

export default Index;

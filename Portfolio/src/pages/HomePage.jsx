import HomePageMobile from '../components/HomePage/HomePageMobile'
import HomePageDesktop from '../components/HomePage/HomePageDesktop'
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <HomePageMobile /> : <HomePageDesktop />;
}

export default HomePage;
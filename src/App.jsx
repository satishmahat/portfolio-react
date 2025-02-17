import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UpButton from './components/UpButton';
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Set loading to false when the page is fully loaded
      const handleLoad = () => {
          setTimeout(() => setIsLoading(false),800); // Optional delay for smoother transition
      };

      // Check if the page is already loaded
      if (document.readyState === 'complete') {
          handleLoad();
      } else {
          // Wait for the load event
          window.addEventListener('load', handleLoad);
      }

      // Clean up the event listener
      return () => {
          window.removeEventListener('load', handleLoad);
      };
  }, []);

  return isLoading ? <Loading /> : (
    <div>
      <Navbar /> 
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <UpButton />
    </div>
  );
};

export default App;

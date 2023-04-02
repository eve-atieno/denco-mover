import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import GettingStarted from './GettingStarted';
import About from './About';


const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  function scrollToServices() {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      const servicesElementPosition = servicesElement.offsetTop;
      window.scrollTo({
        top: servicesElementPosition,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div 
        className="h-screen max-w-full flex items-center justify-center bg-cover bg-center"
        style={{backgroundImage: 'url(../../images/homy.jpg)'}}>
        <div className="text-center text-white">
          <h1 className="text-6xl font-serif mb-4">Welcome to</h1>
          <h1 className="text-6xl font-bold mb-4"><span className="text-yellow-400">DENCO MOVERS</span></h1>
          <h2 className="text-3xl font-serif font-medium mb-8">We pride ourselves by serving the best to our customers</h2>
          <button className="bg-yellow-400 text-white font-medium rounded-full py-3 px-8 hover:bg-gray-300 hover:text-black transition-colors duration-300" onClick={scrollToServices}>Move With Us</button>
        </div>
      </div>
      <GettingStarted id="services" />
      <About />
      <Footer />
      {showScrollButton && (
        <button
          className="fixed bottom-4 right-4 bg-yellow-400 text-white font-medium rounded-full py-3 px-8 hover:bg-gray-300 hover:text-black transition-colors duration-300"
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      )}
    </>
  )
}

export default Home;

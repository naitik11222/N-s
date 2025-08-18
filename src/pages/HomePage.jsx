import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default HomePage; 
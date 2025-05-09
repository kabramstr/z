import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DonationSection from './components/DonationSection';
import ProgressBar from './components/ProgressBar';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Impact from './components/Impact';
import Footer from './components/Footer';
import ScrollReveal from './utils/ScrollReveal';

function App() {
  return (
    <div className="min-h-screen bg-primary-100">
      <ScrollReveal>
        <Header />
        <Hero />
        <ProgressBar 
          current={15000} 
          goal={50000} 
          donors={42} 
          daysLeft={30} 
        />
        <About />
        <DonationSection />
        <Gallery />
        <Impact />
        <Testimonials />
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
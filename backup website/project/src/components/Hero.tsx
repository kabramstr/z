import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(47, 62, 70, 0.7), rgba(47, 62, 70, 0.5)), url('https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Help Build a <span className="text-primary-500">Playground</span> for Our Community
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Every child deserves a safe, inclusive space to play and grow. Join us in building a playground that will serve generations of children in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#donate" className="btn btn-primary text-center sm:text-left">
              Donate Now
            </a>
            <a href="#about" className="btn btn-outline text-white border-white hover:border-primary-500 text-center sm:text-left">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow"
        onClick={scrollToAbout}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;
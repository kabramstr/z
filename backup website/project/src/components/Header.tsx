import React, { useState, useEffect } from 'react';
import { Menu, X, TreeDeciduous } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-6 mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <TreeDeciduous className="h-8 w-8 text-primary-700" />
          <span className={`font-semibold text-xl ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
            Playground Dreams
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Gallery', 'Donate', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-primary-600 transition-colors ${
                isScrolled ? 'text-primary-800' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a href="#donate" className="btn btn-primary">
            Donate Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container px-6 mx-auto flex flex-col gap-4">
          {['Home', 'About', 'Gallery', 'Donate', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-medium text-primary-800 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#donate" 
            className="btn btn-primary text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
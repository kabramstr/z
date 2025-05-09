import React, { useEffect, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check on load
    reveal();
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  
  return <>{children}</>;
};

export default ScrollReveal;
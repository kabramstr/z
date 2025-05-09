import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, TreeDeciduous } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TreeDeciduous className="h-8 w-8 text-primary-500" />
              <span className="font-semibold text-xl">Playground Dreams</span>
            </div>
            <p className="text-primary-400 mb-6">
              We're building a safe, inclusive playground where children of all abilities can play, learn, and grow together.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary-300" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary-300" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Donate', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-primary-400">123 Community Lane<br />Anytown, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <a href="tel:+11234567890" className="text-primary-400 hover:text-primary-300 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <a href="mailto:info@playgrounddreams.org" className="text-primary-400 hover:text-primary-300 transition-colors">
                  info@playgrounddreams.org
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-primary-400 mb-4">
              Stay updated with our progress and upcoming events.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button 
                type="submit" 
                className="btn btn-secondary w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 text-center text-primary-400">
          <p>&copy; {new Date().getFullYear()} Playground Dreams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
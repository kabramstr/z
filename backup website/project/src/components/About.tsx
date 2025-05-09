import React from 'react';
import { Wrench as ParkBench, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Our Vision for a Better Playground</h2>
          <p className="text-primary-800 text-lg">
            We're on a mission to create a safe, inclusive, and imaginative playground where children of all abilities can play, learn, and grow together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card p-6 reveal">
            <div className="p-4 bg-primary-500 rounded-full inline-block mb-4">
              <ParkBench className="h-8 w-8 text-primary-900" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-3">Safe Environment</h3>
            <p className="text-primary-800">
              Our playground will feature modern, safety-certified equipment on impact-absorbing surfaces to ensure children can play without worry.
            </p>
          </div>
          
          <div className="card p-6 reveal">
            <div className="p-4 bg-primary-500 rounded-full inline-block mb-4">
              <Heart className="h-8 w-8 text-primary-900" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-3">Inclusive Design</h3>
            <p className="text-primary-800">
              Every aspect of our playground is designed to be accessible for children of all abilities, including wheelchair-friendly equipment and sensory play areas.
            </p>
          </div>
          
          <div className="card p-6 reveal">
            <div className="p-4 bg-primary-500 rounded-full inline-block mb-4">
              <Users className="h-8 w-8 text-primary-900" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-3">Community Focused</h3>
            <p className="text-primary-800">
              This playground will serve as a gathering place for families, fostering community connections and providing a space for events and social interaction.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
          <div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Why This Matters</h3>
            <p className="text-primary-800 mb-4">
              In our growing community, we currently lack adequate play spaces for our children. Research shows that active play is crucial for physical development, social skills, and emotional well-being.
            </p>
            <p className="text-primary-800 mb-6">
              With your support, we can create a space where imagination flourishes, friendships form, and children develop essential life skills through the power of play.
            </p>
            <a href="#donate" className="btn btn-primary">Support Our Cause</a>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
            <img 
              src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Children playing at playground" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
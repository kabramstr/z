import React from 'react';
import { BarChart3, Heart, Users, Activity } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section className="section bg-primary-100">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">The Impact of Your Support</h2>
          <p className="text-primary-800 text-lg">
            Your contribution goes beyond building playground equipment—it creates lasting positive effects for our community's children and families.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md text-center reveal">
            <div className="p-4 bg-primary-500 rounded-full inline-block mb-4">
              <Activity className="h-6 w-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Physical Health</h3>
            <p className="text-primary-800">
              Regular play improves coordination, strength, and cardiovascular health, helping combat childhood obesity.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center reveal">
            <div className="p-4 bg-primary-500 rounded-full inline-block mb-4">
              <Heart className="h-6 w-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Emotional Wellbeing</h3>
            <p className="text-primary-800">
              Play reduces stress and anxiety while building confidence and emotional resilience in children.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center reveal">
            <div className="p-4 bg-primary-500 rounded-full inline-block mb-4">
              <Users className="h-6 w-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Social Connection</h3>
            <p className="text-primary-800">
              Playground interactions help children develop crucial social skills like sharing, cooperation, and empathy.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center reveal">
            <div className="p-4 bg-primary-500 rounded-full inline-block mb-4">
              <BarChart3 className="h-6 w-6 text-primary-900" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">Cognitive Growth</h3>
            <p className="text-primary-800">
              Play stimulates brain development, problem-solving abilities, and creative thinking in children of all ages.
            </p>
          </div>
        </div>
        
        <div className="bg-primary-700 rounded-xl overflow-hidden shadow-xl reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-semibold mb-4">A Lasting Community Legacy</h3>
              <p className="mb-6">
                By supporting our playground project, you're helping to create a community asset that will serve families for generations to come.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-primary-500 p-1 rounded-full mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#2F3E46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>The playground will serve over 500 children in our immediate community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-500 p-1 rounded-full mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#2F3E46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>An inclusive design ensures children of all abilities can play together</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-500 p-1 rounded-full mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#2F3E46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Community events and gatherings will bring people together</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-500 p-1 rounded-full mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#2F3E46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Your name can be recognized on our donor wall for years to come</span>
                </li>
              </ul>
              <a href="#donate" className="btn btn-secondary">Make Your Impact</a>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/1432697/pexels-photo-1432697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy children playing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
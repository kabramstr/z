import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Having a safe, accessible playground in our neighborhood will make such a difference for my daughter who uses a wheelchair. This project means the world to families like ours.",
      name: "Sarah Johnson",
      role: "Local Parent",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "As a pediatrician, I see firsthand how crucial active play is for children's development. This playground will be an invaluable resource for our community's physical and mental health.",
      name: "Dr. Marcus Chen",
      role: "Community Pediatrician",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "I'm excited about having a cool place to play with my friends! I can't wait to try the climbing wall and the swings!",
      name: "Emma, age 8",
      role: "Future Playground User",
      image: "https://images.pexels.com/photos/1090977/pexels-photo-1090977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Community Voices</h2>
          <p className="text-primary-800 text-lg">
            Hear from local residents about why this playground project matters to them and the difference it will make in our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary-100 rounded-xl p-6 shadow-md relative reveal">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary-500 opacity-50" />
              <div className="flex flex-col h-full">
                <p className="text-primary-800 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full object-cover border-2 border-primary-500"
                  />
                  <div>
                    <p className="font-semibold text-primary-900">{testimonial.name}</p>
                    <p className="text-primary-700 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
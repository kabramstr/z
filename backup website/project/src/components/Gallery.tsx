import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "https://beebop.nl/wp-content/uploads/2022/10/speeldorp-RS4710-1.jpg",
      alt: "Modern playground with climbing structure"
    },
    {
      src: "https://lorkenbos.nl/sites/default/files/styles/slider_desktop/public/2022-04/24_Lorkenbos_stock_(c)_Frank_van_Gool_DSC_7557.jpg?itok=fhQ0l_fS",
      alt: "Swing set in playground"
    },
    {
      src: "https://cdn-cms.bookingexperts.nl/media/578/21/preprocessed.jpg",
      alt: "Children playing on playground equipment"
    },
    {
      src: "https://images.pexels.com/photos/571154/pexels-photo-571154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Outdoor playground with natural surroundings"
    },
    {
      src: "https://images.pexels.com/photos/1242081/pexels-photo-1242081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Inclusive playground equipment"
    },
    {
      src: "https://images.pexels.com/photos/274078/pexels-photo-274078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Playground with colorful equipment"
    }
  ];
  
  const openImageModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Playground Gallery</h2>
          <p className="text-primary-800 text-lg">
            Explore our vision through these images of inspiring playgrounds that showcase the features we plan to include in our community project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl shadow-md h-64 cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => openImageModal(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
              />
            </div>
          ))}
        </div>
        
        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary-500 transition-colors"
              onClick={closeImageModal}
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged playground image" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
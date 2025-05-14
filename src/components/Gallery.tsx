import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      before: "https://images.pexels.com/photos/3639480/pexels-photo-3639480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      after: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Строительная площадка ЖК 'Солнечный'"
    },
    {
      before: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      after: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ремонт офисного помещения"
    },
    {
      before: "https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      after: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Демонтаж торгового центра"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">До и После</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Посмотрите фотографии наших работ, демонстрирующие результаты вывоза строительного мусора.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="relative pb-[70%] rounded-lg overflow-hidden shadow-md">
                <img 
                  src={images[currentIndex].before} 
                  alt="До вывоза мусора" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                  <div className="bg-[#3644b9] text-white px-4 py-2 text-sm">ДО</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative pb-[70%] rounded-lg overflow-hidden shadow-md">
                <img 
                  src={images[currentIndex].after} 
                  alt="После вывоза мусора" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                  <div className="bg-green-500 text-white px-4 py-2 text-sm">ПОСЛЕ</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-center text-xl font-medium text-gray-700 mt-4">{images[currentIndex].title}</h3>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Предыдущее изображение"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <div className="flex space-x-2 items-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#3644b9]' : 'bg-gray-300'
                  }`}
                  aria-label={`Перейти к изображению ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Следующее изображение"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
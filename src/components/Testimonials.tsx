import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Александр Иванов",
      role: "Прораб, ООО «СтройМастер»",
      content: "Уже второй год сотрудничаем с компанией. Вывозят мусор со строительных площадок быстро и без задержек. Нареканий к работе нет, всё всегда вовремя и качественно.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Елена Петрова",
      role: "Частный клиент",
      content: "Делали ремонт в квартире, накопилось много мусора. Обратились в компанию, приехали в тот же день, всё быстро вывезли, территорию убрали. Очень довольна сервисом!",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Дмитрий Соколов",
      role: "Директор, ТЦ «Меридиан»",
      content: "Проводили реконструкцию торгового центра, компания обеспечила бесперебойный вывоз строительного мусора. Оперативно, чисто, профессионально. Рекомендую!",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Анна Кузнецова",
      role: "Дизайнер интерьеров",
      content: "Часто рекомендую эту компанию своим клиентам. Никогда не подводят, работают четко по графику, идут навстречу при срочных заказах. Отличный сервис за разумные деньги.",
      rating: 4,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Что говорят наши клиенты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Отзывы наших клиентов говорят сами за себя. Мы ценим каждого заказчика и стремимся обеспечить 
            безупречный сервис в любой ситуации.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-8">
              {[
                (currentIndex - 1 + testimonials.length) % testimonials.length,
                currentIndex,
                (currentIndex + 1) % testimonials.length
              ].map((index, i) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 
                    ${i === 1 ? 'md:scale-110 z-10 border-2 border-[#3644b9]/10' : 'opacity-80 md:opacity-60'}
                  `}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonials[index].name}</h4>
                      <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {renderStars(testimonials[index].rating)}
                  </div>
                  <p className="text-gray-700">{testimonials[index].content}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#3644b9]' : 'bg-gray-300'
                    }`}
                    aria-label={`Перейти к отзыву ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Малый объем",
      price: "от 3 500 ₽",
      description: "Идеально для вывоза мусора после небольшого ремонта",
      features: [
        "Объем до 8 м³",
        "Доступна услуга грузчиков",
        "Вывоз в день обращения",
        "Подходит для квартир"
      ],
      isPopular: false
    },
    {
      title: "Средний объем",
      price: "от 8 000 ₽",
      description: "Оптимальное решение для средних ремонтов и небольших строек",
      features: [
        "Объем до 20 м³",
        "Команда опытных грузчиков",
        "Срочный выезд 24/7",
        "Уборка территории"
      ],
      isPopular: true
    },
    {
      title: "Большой объем",
      price: "от 15 000 ₽",
      description: "Комплексное решение для строительных площадок и промышленных объектов",
      features: [
        "Объем свыше 20 м³",
        "Постоянное обслуживание",
        "Разработка графика вывоза",
        "Официальный договор"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши тарифы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий тариф в зависимости от объема строительного мусора и ваших потребностей.
            Доступные цены и гибкая система скидок для постоянных клиентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                option.isPopular 
                  ? 'border-2 border-[#3644b9] shadow-lg relative' 
                  : 'border border-gray-200 shadow'
              }`}
            >
              {option.isPopular && (
                <div className="bg-[#3644b9] text-white text-center py-1 text-sm font-medium">
                  Популярный выбор
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-[#3644b9]">{option.price}</p>
                  <p className="text-gray-500 text-sm">Единоразовый вывоз</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`w-full py-3 rounded-full font-medium text-center block transition-colors ${
                    option.isPopular 
                      ? 'bg-[#3644b9] text-white hover:bg-[#2d399c]' 
                      : 'bg-white text-[#3644b9] border border-[#3644b9] hover:bg-gray-50'
                  }`}
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { Truck, Building, Building2, Home, Leaf, Package } from 'lucide-react';

const Services = () => {
  const serviceItems = [
    {
      icon: <Building className="h-10 w-10 text-[#3644b9]" />,
      title: 'Вывоз мусора со стройплощадок',
      description: 'Оперативный вывоз всех видов строительного мусора с объектов любой сложности.',
    },
    {
      icon: <Home className="h-10 w-10 text-[#3644b9]" />,
      title: 'Вывоз мусора после ремонта',
      description: 'Чистота в квартире или офисе после ремонта без хлопот и забот.',
    },
    {
      icon: <Building2 className="h-10 w-10 text-[#3644b9]" />,
      title: 'Вывоз после демонтажа',
      description: 'Быстрый вывоз после демонтажных работ любого масштаба и сложности.',
    },
    {
      icon: <Truck className="h-10 w-10 text-[#3644b9]" />,
      title: 'Предоставление контейнеров',
      description: 'Контейнеры различного объема для временного хранения и вывоза мусора.',
    },
    {
      icon: <Package className="h-10 w-10 text-[#3644b9]" />,
      title: 'Погрузка мусора',
      description: 'Услуги грузчиков для быстрой и эффективной погрузки строительного мусора.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-[#3644b9]" />,
      title: 'Экологичная утилизация',
      description: 'Утилизация строительных отходов с соблюдением всех экологических норм.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональный вывоз строительного мусора для частных лиц и организаций. 
            Работаем быстро, чисто и по доступным ценам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-3 bg-blue-50 inline-flex rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Phone, FileText, Truck, CreditCard } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: <Phone className="h-8 w-8 text-white" />,
      title: 'Свяжитесь с нами',
      description: 'Позвоните нам или оставьте заявку онлайн для консультации и расчета стоимости.'
    },
    {
      number: 2,
      icon: <FileText className="h-8 w-8 text-white" />,
      title: 'Согласование деталей',
      description: 'Обсудим объем работ, вид мусора, сроки и согласуем удобное время вывоза.'
    },
    {
      number: 3,
      icon: <Truck className="h-8 w-8 text-white" />,
      title: 'Выполнение работ',
      description: 'Наша команда приедет в назначенное время, выполнит погрузку и вывоз мусора.'
    },
    {
      number: 4,
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: 'Оплата услуг',
      description: 'Оплатите услугу удобным способом после выполнения работ. Предоставляем все документы.'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#3644b9] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 rounded-full bg-white opacity-5 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-white opacity-5 -bottom-40 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Простой процесс заказа</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Мы сделали процесс вывоза строительного мусора максимально удобным для вас. 
            Четыре простых шага — и ваша территория снова чистая!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-[#2d399c] rounded-lg p-6 h-full">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-[#3644b9] rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="opacity-90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
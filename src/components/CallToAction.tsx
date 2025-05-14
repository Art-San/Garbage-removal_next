import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-[#3644b9] rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы избавиться от строительного мусора?</h2>
          <p className="opacity-90 max-w-2xl mx-auto mb-8">
            Закажите вывоз мусора прямо сейчас и получите скидку 10% на первый заказ. 
            Мы гарантируем быстрый выезд и профессиональное выполнение работ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-[#3644b9] rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Заказать вывоз
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="tel:+78001234567" 
              className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
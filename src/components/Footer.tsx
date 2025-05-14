import React from 'react';
import { Truck, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3644b9] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">ЧистоСтрой</span>
            </div>
            <p className="opacity-80 mb-6">
              Профессиональный вывоз строительного мусора в Москве и Московской области.
              Работаем с физическими и юридическими лицами.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 opacity-80">
              <li>8 (800) 123-45-67</li>
              <li>8 (495) 987-65-43</li>
              <li>info@chistostroi.ru</li>
              <li>г. Москва, ул. Строительная, д. 42</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-3 opacity-80">
              <li><a href="#services" className="hover:text-white/100 transition-colors">Вывоз строительного мусора</a></li>
              <li><a href="#services" className="hover:text-white/100 transition-colors">Вывоз после ремонта</a></li>
              <li><a href="#services" className="hover:text-white/100 transition-colors">Вывоз после демонтажа</a></li>
              <li><a href="#services" className="hover:text-white/100 transition-colors">Аренда контейнеров</a></li>
              <li><a href="#services" className="hover:text-white/100 transition-colors">Услуги грузчиков</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-3 opacity-80">
              <li><a href="#" className="hover:text-white/100 transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-white/100 transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-white/100 transition-colors">Фотогалерея</a></li>
              <li><a href="#" className="hover:text-white/100 transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-white/100 transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm">
            © 2025 ЧистоСтрой. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-4 text-sm opacity-80">
              <li><a href="#" className="hover:text-white/100 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white/100 transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
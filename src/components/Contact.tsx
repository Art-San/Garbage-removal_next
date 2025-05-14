import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: 'small'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    alert('Форма отправлена! В реальном приложении здесь будет обработка и отправка данных.');
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-8">
              Готовы избавиться от строительного мусора? Заполните форму, и мы свяжемся с вами 
              в ближайшее время для уточнения деталей и расчета стоимости.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-[#3644b9]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Телефон</h4>
                  <p className="text-gray-600">8 (800) 123-45-67</p>
                  <p className="text-gray-600">8 (495) 987-65-43</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-[#3644b9]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Электронная почта</h4>
                  <p className="text-gray-600">info@chistostroi.ru</p>
                  <p className="text-gray-600">zakaz@chistostroi.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-[#3644b9]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Адрес</h4>
                  <p className="text-gray-600">г. Москва, ул. Строительная, д. 42</p>
                  <p className="text-gray-600">Работаем по всей Москве и Московской области</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Заказать вывоз мусора</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3644b9]"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3644b9]"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3644b9]"
                  placeholder="example@mail.ru"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-2">Объем мусора</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3644b9]"
                >
                  <option value="small">Малый объем (до 8 м³)</option>
                  <option value="medium">Средний объем (до 20 м³)</option>
                  <option value="large">Большой объем (свыше 20 м³)</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3644b9]"
                  placeholder="Опишите детали вашего заказа..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3644b9] text-white rounded-lg font-medium hover:bg-[#2d399c] transition-colors flex items-center justify-center"
              >
                Отправить заявку
                <Send className="h-5 w-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
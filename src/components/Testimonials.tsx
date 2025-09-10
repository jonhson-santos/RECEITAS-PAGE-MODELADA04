import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Star, Quote, TrendingUp, DollarSign } from 'lucide-react';
import { trackEvent } from '../utils/utmify';

const Testimonials: React.FC = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      age: 58,
      location: "São Paulo, SP",
      image: "https://i.pinimg.com/1200x/4c/eb/85/4ceb85b3066d28a976fc51dc75cfc763.jpg",
      quote: "Em 3 semanas consegui melhorar minha glicemia usando chá de canela e limão. Agora gasto menos com remédios e me sinto melhor!",
      condition: "Diabetes Tipo 2",
      savings: "Economia mensal",
      rating: 5,
      result: "Melhora na glicemia"
    },
    {
      id: 2,
      name: "João Pereira",
      age: 45,
      location: "Belo Horizonte, MG", 
      image: "https://i.pinimg.com/736x/d7/45/49/d7454953e338e985810634f4c30b8f20.jpg",
      quote: "Sofria com insônia há anos. Dormia apenas 4 horas por noite. Agora consigo dormir 7-8 horas usando receitas naturais!",
      condition: "Insônia Crônica",
      savings: "Economia mensal",
      rating: 5,
      result: "4h → 8h de sono"
    },
    {
      id: 3,
      name: "Ana Costa", 
      age: 52,
      location: "Rio de Janeiro, RJ",
      image: "https://i.pinimg.com/736x/be/78/24/be7824a79d2a9a94dea3bc2dc1141873.jpg",
      quote: "Consegui reduzir muito minha ansiedade em 30 dias usando receitas naturais. Me sinto mais calma e equilibrada!",
      condition: "Ansiedade Generalizada",
      savings: "Economia mensal",
      rating: 5,
      result: "Menos crises de ansiedade"
    },
    {
      id: 4,
      name: "Carlos Ferreira",
      age: 60,
      location: "Porto Alegre, RS",
      image: "https://i.pinimg.com/736x/da/a4/76/daa47630c68c93497cc16e8f7873b499.jpg",
      quote: "Consegui melhorar meu colesterol em 45 dias seguindo as receitas. Meu médico ficou satisfeito com os resultados!",
      condition: "Colesterol Alto",
      savings: "Economia mensal",
      rating: 5,
      result: "Melhora no colesterol"
    },
    {
      id: 5,
      name: "Rosa Santos",
      age: 55,
      location: "Salvador, BA",
      image: "https://i.pinimg.com/1200x/63/bd/70/63bd705b5cc5ef91704d08ed42462c98.jpg",
      quote: "Consegui aliviar muito minhas dores articulares usando receitas anti-inflamatórias naturais. Voltei a caminhar melhor!",
      condition: "Artrite Reumatoide",
      savings: "Economia mensal",
      rating: 5,
      result: "Alívio das dores"
    },
    {
      id: 6,
      name: "Pedro Lima",
      age: 48,
      location: "Fortaleza, CE",
      image: "https://i.pinimg.com/736x/f9/66/60/f96660f5c3f7adbfb748feba00b535a6.jpg",
      quote: "Consegui melhorar minha pressão arterial em 40 dias usando receitas naturais. Meu médico aprovou os resultados!",
      condition: "Hipertensão",
      savings: "Economia mensal",
      rating: 5,
      result: "Melhora na pressão"
    }
  ];

  const carouselImages = [
    "https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento04.webp",
    "https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento01-1.webp",
    "https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento06.webp"
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialRefs.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });

    return () => {
      testimonialRefs.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
    };
  }, []);

  const handleMainCTA = () => {
    trackEvent('InitiateCheckout', {
      content_name: 'Farmácia Natural em Casa',
      content_category: 'ebook',
      value: 27.00,
      currency: 'BRL',
      event_source_url: window.location.href
    });
    
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('galeria');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calcular economia total
  const totalSavings = testimonials.reduce((total, testimonial) => {
    const savings = parseInt(testimonial.savings.replace('R$ ', '').replace('/mês', ''));
    return total + savings;
  }, 0);

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            ⭐ Veja Como Nossos Clientes <span className="text-green-600">SE BENEFICIARAM</span> 
            <br />com Nossas <span className="text-blue-600">Receitas Naturais</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Mais de 8.500 brasileiros já melhoraram sua qualidade de vida com nossas receitas. 
            Veja os resultados reais:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={el => testimonialRefs.current[index] = el}
              className="testimonial-card opacity-0 transition-opacity duration-700 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 hover:border-green-200 gpu-accelerated"
            >
              {/* Header com foto e info */}
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-green-200 lazy-load"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.age} anos, {testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Resultado em destaque */}
              <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <TrendingUp className="text-green-600 mr-2" size={16} />
                    <span className="text-green-800 font-bold text-sm">Resultado:</span>
                  </div>
                  <span className="text-green-700 font-bold text-sm">{testimonial.result}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="text-green-600 mr-2" size={16} />
                    <span className="text-green-800 font-bold text-sm">Economia:</span>
                  </div>
                  <span className="text-green-700 font-bold">{testimonial.savings}</span>
                </div>
              </div>
              
              {/* Depoimento */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 text-gray-200" size={24} />
                <p className="text-gray-700 italic pl-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Condição tratada */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <span className="text-blue-600 text-sm font-medium">Condição tratada:</span>
                <span className="text-blue-800 font-bold ml-2">{testimonial.condition}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-6">
            📱 Mais Depoimentos Reais de WhatsApp
          </h3>
          <div className="relative">
             <div className="overflow-hidden rounded-2xl shadow-2xl carousel-container">
               <div className="flex transition-transform duration-500 ease-in-out gpu-accelerated"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 carousel-slide">
                    <img 
                      src={image} 
                      alt={`Depoimento WhatsApp ${index + 1}`}
                      className="w-full h-auto object-cover lazy-load"
                      loading="lazy"
                      onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    />
                  </div>
                ))}
              </div>
            </div>
           </div>
            
            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
        </div>

        {/* Resumo de Economia */}

        {/* CTA Principal */}
        <div className="text-center bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🔥 VOCÊ TAMBÉM PODE TER ESSES RESULTADOS!
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Por apenas R$ 27,00 você recebe as mesmas receitas que transformaram a vida dessas pessoas 
            e pode economizar milhares de reais por ano!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="#oferta"
              onClick={handleMainCTA}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse border-2 border-red-400"
            >
              🔥 SIM! QUERO ECONOMIZAR COMO ELES
              <div className="text-sm font-normal mt-1">👇 Ver todas as opções</div>
            </a>
            
            <a 
              href="#resultados-comprovados" 
              onClick={handleScrollToNext}
              className="border border-gray-400 text-gray-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <ArrowDown size={16} className="inline mr-2" />
              Ver Galeria de Ingredientes
            </a>
          </div>
          
          {/* Garantia */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-lg">Garantia Total de 30 Dias</h4>
                <p className="text-green-700">Se não funcionar, devolvemos 100% do seu dinheiro</p>
              </div>
            </div>
            <p className="text-green-800 text-center">
              Estamos tão confiantes que você vai ter os mesmos resultados, 
              que oferecemos garantia total. Sem riscos para você!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
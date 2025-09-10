import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, BookOpen, Users, Award, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import { trackEvent } from '../utils/utmify';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 20, seconds: 0 });

  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: subheadlineRef, delay: 200 },
      { ref: ctaRef, delay: 400 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('animate-fade-in');
        }, delay);
      }
    });

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
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

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: "Maria Silva, 58 anos",
      text: "Em 3 semanas minha glicemia baixou de 180 para 120 usando canela e limão! Economizei R$ 180 por mês.",
      image: "https://i.pinimg.com/736x/a0/77/c7/a077c77697d208bf3c236aad5cc48520.jpg"
    },
    {
      name: "João Pereira, 45 anos", 
      text: "Sofria com insônia há 15 anos. Agora durmo 8 horas por noite sem remédio!",
      image: "https://i.pinimg.com/736x/d7/45/49/d7454953e338e985810634f4c30b8f20.jpg"
    },
    {
      name: "Ana Costa, 52 anos",
      text: "Minha ansiedade desapareceu em 30 dias! Não preciso mais de ansiolíticos.",
      image: "https://i.pinimg.com/736x/be/78/24/be7824a79d2a9a94dea3bc2dc1141873.jpg"
    }
  ];

  return (
    <section className="relative min-h-screen pt-16 pb-8 bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background elements - simplified for mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-200 to-transparent rounded-l-full"></div>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="max-w-lg mx-auto">
          
          <h1 
            ref={headlineRef}
            className="font-serif text-2xl font-bold text-gray-900 mb-4 opacity-0 transition-opacity duration-500 leading-tight text-center"
          >
            <span className="text-red-700 block text-shadow">PARE de gastar dinheiro à toa</span>
            <span className="text-gray-900 block text-shadow">em farmácia —</span>
            <span className="text-green-700 block mt-2 text-xl font-black text-shadow">descubra receitas naturais simples</span>
            <span className="text-gray-900 block text-lg">para aliviar sintomas do dia a dia</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-base text-gray-900 mb-6 opacity-0 transition-opacity duration-500 text-center font-medium leading-relaxed bg-white/90 p-4 rounded-lg shadow-sm"
          >
            Mais de <span className="bg-yellow-300 px-2 py-1 rounded-full font-bold text-gray-900">8.500 brasileiros</span> já economizaram centenas de reais usando <span className="font-bold text-green-800">alternativas naturais para controlar gastrite, refluxo, insônia, ansiedade e muito mais</span> com ingredientes que você já tem em casa
          </p>

          {/* Depoimentos Movidos para Cima */}
          <div className="space-y-4 mb-6">
            {[
              {
                name: "Maria Silva, 58 anos",
                text: "Economizei R$ 180 por mês usando chá de canela e limão para ajudar no diabetes.",
                image: "https://i.pinimg.com/736x/a0/77/c7/a077c77697d208bf3c236aad5cc48520.jpg"
              },
              {
                name: "João Pereira, 45 anos", 
                text: "Reduzi R$ 90 por mês em soníferos. Melhorei muito meu sono com receitas naturais.",
                image: "https://i.pinimg.com/736x/d7/45/49/d7454953e338e985810634f4c30b8f20.jpg"
              },
              {
                name: "Ana Costa, 52 anos",
                text: "Economizo R$ 120 por mês em ansiolíticos usando alternativas naturais para ansiedade.",
                image: "https://i.pinimg.com/736x/be/78/24/be7824a79d2a9a94dea3bc2dc1141873.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-4 border-2 border-green-300 shadow-md">
                <div className="flex items-start gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-image border-2 border-green-400 flex-shrink-0"
                    style={{ 
                      minWidth: '48px', 
                      minHeight: '48px',
                      width: '48px',
                      height: '48px',
                      display: 'block',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                    loading="eager"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-500 fill-current" size={12} />
                      ))}
                    </div>
                    <p className="text-green-900 font-bold text-sm mb-1">
                      "{testimonial.text}"
                    </p>
                    <p className="text-green-700 text-xs font-semibold">- {testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PROVA SOCIAL - Mobile */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow-lg border-2 border-blue-300">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-700 mb-1">R$ 1.680</div>
                <p className="text-gray-800 text-xs font-medium">Economia média/ano</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-700 mb-1">15 dias</div>
                <p className="text-gray-800 text-xs font-medium">Primeiros resultados</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-700 mb-1">94%</div>
                <p className="text-gray-800 text-xs font-medium">Aprovação</p>
              </div>
            </div>
          </div>

          {/* BENEFÍCIOS - Mobile */}
          <div className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-lg p-5 mb-6 shadow-xl border-2 border-red-500">
            <h3 className="text-xl font-black mb-4 text-center text-shadow">🎯 O QUE VOCÊ VAI RECEBER:</h3>
            <div className="space-y-2">
              {[
                "Receitas naturais para ajudar no alívio da gastrite e refluxo",
                "Alternativas naturais para melhorar a qualidade do sono",
                "Ingredientes simples para aliviar sintomas de ansiedade",
                "Receitas caseiras para auxiliar no controle da pressão",
                "Como aliviar dores usando ingredientes baratos",
                "+180 receitas naturais para diversos sintomas"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-red-700" size={12} />
                  </div>
                  <span className="text-sm leading-relaxed font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OFERTA - Mobile */}
          <div className="bg-red-50 border-3 border-red-500 rounded-lg p-5 mb-6 shadow-xl">
            <div className="text-center">
              <h3 className="text-lg font-bold text-red-600 mb-3">
                🔥 OFERTA ESPECIAL - HOJE!
              </h3>
              <p className="text-sm text-gray-900 mb-3 font-medium">
                <strong>ATENÇÃO:</strong> Apenas as próximas 127 pessoas que clicarem no botão abaixo conseguem esse desconto.
              </p>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="text-center">
                  <div className="text-gray-600 line-through text-xl font-bold">R$ 27,00</div>
                  <div className="text-xs text-gray-700 font-medium">Preço normal</div>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-700">R$ 9,99</div>
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">63% OFF</div>
                </div>
              </div>
              {/* Timer - Mobile */}
              <div className="bg-black rounded-lg p-3 mb-3">
                <div className="text-red-400 font-bold text-xs mb-1 text-center">⏰ OFERTA EXPIRA EM:</div>
                <div className="text-2xl font-bold text-white text-center">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={ctaRef} 
            className="opacity-0 transition-all duration-500 text-center"
          >
            {/* CTA PRINCIPAL - Mobile */}
            <button 
              onClick={handleMainCTA}
              className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white text-xl font-black px-6 py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-3 border-green-500 mb-4"
            >
              <div className="text-2xl mb-1 text-shadow">👉 QUERO ACESSAR AS RECEITAS AGORA</div>
              <div className="text-base font-bold">Desconto especial disponível só hoje</div>
              <div className="text-sm font-medium mt-1 text-green-100">✅ Acesso imediato • ✅ Garantia 30 dias</div>
            </button>
            
            {/* Garantias - Mobile */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-800 mb-4 flex-wrap font-medium">
              <div className="flex items-center gap-1">
                <Shield size={14} className="text-green-600" />
                <span>Garantia 30 dias</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} className="text-blue-600" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={14} className="text-purple-600" />
                <span>+8.5k famílias</span>
              </div>
            </div>
            
            {/* CTA Secundário - Mobile */}
            <div className="text-center mb-4">
              <a 
                href="#receitas-lista" 
                onClick={(e) => {
                  e.preventDefault();
                  const nextSection = document.getElementById('receitas-lista');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block border-2 border-gray-500 text-gray-700 hover:bg-gray-100 font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-md text-sm"
              >
                <ArrowDown size={14} className="inline mr-1" />
                Ver Lista de Receitas
              </a>
            </div>
            
            {/* Aviso Final - Mobile */}
            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
              <p className="text-red-900 font-bold text-center text-sm">
                ⚠️ <strong>OFERTA LIMITADA:</strong> Desconto especial válido apenas hoje. 
                Amanhã volta ao preço normal!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
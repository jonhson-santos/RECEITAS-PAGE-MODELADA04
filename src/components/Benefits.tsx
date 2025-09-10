import React from 'react';
import { Moon, Droplets, Heart, Apple, Sparkles, HeartPulse, ArrowDown } from 'lucide-react';
import { benefitsData } from '../utils/benefitsData';

const Benefits: React.FC = () => {
  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('produto');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    Moon: <Moon size={28} className="text-natural-600" />,
    Droplets: <Droplets size={28} className="text-natural-600" />,
    Heart: <Heart size={28} className="text-natural-600" />,
    Apple: <Apple size={28} className="text-natural-600" />,
    Sparkles: <Sparkles size={28} className="text-natural-600" />,
    HeartPulse: <HeartPulse size={28} className="text-natural-600" />
  };

  return (
    <section id="beneficios" className="py-12 md:py-16 lg:py-24 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-20">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
            Natureza que <span className="text-natural-600">Transforma</span> sua Saúde
          </h2>
          <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
            O poder de cura que você precisa está nos ingredientes que já tem em casa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefitsData.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm md:shadow-md hover:shadow-lg transition-shadow border border-natural-100"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-natural-50 rounded-full flex items-center justify-center mb-3 md:mb-4">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-natural-800 mb-2 leading-tight">{benefit.title}</h3>
              <p className="text-natural-700 text-sm md:text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base animate-pulse"
            >
              🔥 Quero Acessar Todas as Receitas
            </a>
            
            <a 
              href="#produto" 
              onClick={handleScrollToNext}
              className="inline-block border border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <ArrowDown size={16} className="inline mr-2" />
              Ver Produto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
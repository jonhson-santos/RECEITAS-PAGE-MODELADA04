import React, { useRef, useEffect } from 'react';
import { Award, TrendingUp, Users, ArrowDown, CheckCircle, Star } from 'lucide-react';

const ScienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.science-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-fade-in');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="garantia" className="py-16 md:py-24 bg-gradient-to-b from-natural-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Guarantee Section */}
          <div className="science-item opacity-0 transition-all duration-700">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-2xl border-4 border-green-600">
              <Award className="mx-auto mb-6 text-green-600" size={64} />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Nossa Garantia de Resultados
              </h3>
              <p className="text-xl mb-8 text-green-800 max-w-3xl mx-auto leading-relaxed">
                Estamos tão confiantes na eficácia de nossas receitas que oferecemos uma garantia única: 
                se você não ver melhorias significativas em 30 dias, devolvemos 100% do seu investimento.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <CheckCircle className="mx-auto mb-4 text-green-600" size={32} />
                  <h4 className="font-bold text-lg mb-2 text-green-800">Receitas Testadas</h4>
                  <p className="text-green-700 text-sm">Cada receita foi testada por centenas de pessoas antes de ser incluída no guia</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <CheckCircle className="mx-auto mb-4 text-green-600" size={32} />
                  <h4 className="font-bold text-lg mb-2 text-green-800">Suporte Completo</h4>
                  <p className="text-green-700 text-sm">Tire suas dúvidas diretamente conosco via WhatsApp durante todo o tratamento</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <CheckCircle className="mx-auto mb-4 text-green-600" size={32} />
                  <h4 className="font-bold text-lg mb-2 text-green-800">Atualizações Gratuitas</h4>
                  <p className="text-green-700 text-sm">Receba novas receitas e atualizações sem custo adicional pelo resto da vida</p>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-xl p-6 max-w-2xl mx-auto border border-green-300">
                <p className="text-lg font-medium mb-2 text-green-800">
                  "Se em 30 dias você não estiver satisfeito com os resultados..."
                </p>
                <p className="text-2xl font-bold text-green-600">
                  DEVOLVEMOS 100% DO SEU DINHEIRO!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#oferta" 
                onClick={handleScrollToOffers}
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
              >
                🔥 Quero Garantir Meus Resultados
              </a>
              
              <a 
                href="#beneficios" 
                onClick={(e) => {
                  e.preventDefault();
                  const nextSection = document.getElementById('beneficios');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block border border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm"
              >
                <ArrowDown size={16} className="inline mr-2" />
                Ver Benefícios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
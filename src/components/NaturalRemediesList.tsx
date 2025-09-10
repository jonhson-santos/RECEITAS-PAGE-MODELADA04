import React from 'react';
import { ArrowDown, CheckCircle } from 'lucide-react';
import { trackEvent } from '../utils/utmify';

const NaturalRemediesList: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  
  const mainRemedies = [
    { name: "Receita natural para Diabetes", savings: "Economize" },
    { name: "Receita natural para Ansiedade", savings: "Economize" },
    { name: "Receita natural para Insônia", savings: "Economize" },
    { name: "Receita natural para Hipertensão", savings: "Economize" },
    { name: "Receita natural para Artrite", savings: "Economize" },
    { name: "Receita natural para Depressão", savings: "Economize" },
    { name: "Receita natural para Dor de Cabeça", savings: "Economize" },
    { name: "Receita natural para Estresse", savings: "Economize" }
  ];
  
  const allRemedies = [
    ...mainRemedies,
    { name: "Receita natural para Obesidade", savings: "Economize" },
    { name: "Receita natural para Menopausa", savings: "Economize" },
    { name: "Receita natural para Varizes", savings: "Economize" },
    { name: "Receita natural para Celulite", savings: "Economize" },
    { name: "Receita natural para Queda Capilar", savings: "Economize" },
    { name: "Receita natural para Flacidez", savings: "Economize" },
    { name: "Receita natural para Micose", savings: "Economize" },
    { name: "Receita natural para Endometriose", savings: "Economize" },
    { name: "Receita natural para Sinusite", savings: "Economize" },
    { name: "Receita natural para Asma", savings: "Economize" },
    { name: "Receita natural para Alzheimer", savings: "Economize" },
    { name: "Receita natural para Parkinson", savings: "Economize" },
    { name: "Receita natural para Doença Renal Crônica", savings: "Economize" },
    { name: "Receita natural para Doença Pulmonar Crônica", savings: "Economize" },
    { name: "Receita natural para Osteoporose", savings: "Economize" },
    { name: "Receita natural para Dor Muscular", savings: "Economize" },
    { name: "Receita natural para Dor de Dente", savings: "Economize" },
    { name: "Receita natural para Dor no Pescoço", savings: "Economize" },
    { name: "Receita natural para Dor de Garganta", savings: "Economize" },
    { name: "Receita natural para Dor Abdominal", savings: "Economize" },
    { name: "Receita natural para Dor nos Pés", savings: "Economize" },
    { name: "Receita natural para Dor no Punho", savings: "Economize" },
    { name: "Receita natural para Dor na Coluna Cervical", savings: "Economize" },
    { name: "Receita natural para Dor Ciática", savings: "Economize" },
    { name: "Receita natural para Dor na Coluna Lombar", savings: "Economize" },
    { name: "Receita natural para Dor de Artrite", savings: "Economize" },
    { name: "Receita natural para Dor de Enxaqueca", savings: "Economize" },
    { name: "Receita natural para Dor de Cólica Menstrual", savings: "Economize" },
    { name: "Receita natural para Dor Neuropática", savings: "Economize" },
    { name: "Receita natural para Mau Hálito", savings: "Economize" },
    { name: "Receita natural para Acne", savings: "Economize" },
    { name: "Receita natural para Parar de Fumar", savings: "Economize" },
    { name: "Receita natural para Transtorno Bipolar", savings: "Economize" },
    { name: "Receita natural para Transtornos Alimentares", savings: "Economize" },
    { name: "Receita natural para Transtorno de Ansiedade", savings: "Economize" },
    { name: "Receita natural para Transtorno de Pânico", savings: "Economize" },
    { name: "Receita natural para Déficit de Atenção", savings: "Economize" },
    { name: "Receita natural para Hepatite C", savings: "Economize" },
    { name: "Receita natural para Tuberculose", savings: "Economize" },
    { name: "Receita natural para Gripe", savings: "Economize" },
    { name: "Receita natural para Libido", savings: "Economize" },
    { name: "Receita natural para Constipação", savings: "Economize" },
    { name: "Receita natural para Infecção de Urina", savings: "Economize" },
    { name: "Receita natural para Resfriado", savings: "Economize" },
    { name: "Receita natural para Febre", savings: "Economize" },
    { name: "Receita natural para Hemorroida", savings: "Economize" },
    { name: "Receita natural para TPM", savings: "Economize" },
    { name: "Receita natural para Alergias", savings: "Economize" },
    { name: "Receita natural para Cãibras Musculares", savings: "Economize" },
    { name: "Receita natural para Retenção de Liquido", savings: "Economize" },
    { name: "Receita natural para Pele Oleosa", savings: "Economize" },
    { name: "Receita natural para Olheiras", savings: "Economize" },
    { name: "Receita natural para Azia", savings: "Economize" }
  ];

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

  return (
    <section id="receitas-lista" className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            🌿 Economize com Nossas <span className="text-green-600">Receitas Naturais</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Veja todas as condições que você pode tratar naturalmente:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {(showAll ? allRemedies : mainRemedies).map((remedy, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-white rounded-xl p-4 shadow-md border-2 border-green-100 hover:shadow-lg transition-shadow hover:border-green-300"
              >
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium text-sm">{remedy.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-bold text-sm">{remedy.savings}</div>
                  <div className="text-xs text-gray-500">com receitas</div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && (
            <div className="text-center mb-8">
              <button 
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                + Ver Todas as {allRemedies.length} Condições e Economias
              </button>
            </div>
          )}


          <div className="text-center">
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto font-medium">
                Você também pode usar essas receitas naturais. Veja as opções abaixo:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a 
                href="#oferta" 
                onClick={(e) => {
                  e.preventDefault();
                  const testimonialsSection = document.getElementById('depoimentos');
                  if (testimonialsSection) {
                    testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🌿 QUERO ESSAS RECEITAS AGORA
                <div className="text-sm font-normal mt-1">👇 Ver depoimentos de clientes</div>
              </a>
              
              <a 
                href="#galeria" 
                onClick={handleScrollToNext}
                className="border border-gray-400 text-gray-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm"
              >
                <ArrowDown size={16} className="inline mr-2" />
                Ver Ingredientes Simples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalRemediesList;
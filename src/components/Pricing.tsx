import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, CreditCard, CheckCircle, Star } from 'lucide-react';
import { trackEvent } from '../utils/utmify';

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 20, seconds: 0 });
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>('complete');

  useEffect(() => {
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

  const handleBasicPurchase = () => {
    setSelectedPlan('basic');
    trackEvent('InitiateCheckout', {
      content_name: 'Farmácia Natural em Casa - Básico',
      content_category: 'ebook',
      value: 27.00,
      currency: 'BRL'
    });
    
    // Redirect to remarketing page for basic plan
    window.location.href = 'https://remarketing-orcin.vercel.app/';
  };

  const handleCompletePurchase = () => {
    setSelectedPlan('complete');
    trackEvent('InitiateCheckout', {
      content_name: 'Farmácia Natural em Casa - Completo',
      content_category: 'ebook',
      value: 47.00,
      currency: 'BRL'
    });
    
    // Show payment options modal instead of direct redirect
    setShowPaymentModal(true);
  };

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <section id="oferta" className="py-12 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-3">

        <div className="max-w-lg mx-auto">
          {/* Oferta Especial */}
          <div className="bg-red-600 text-white rounded-lg shadow-2xl border-4 border-red-400 overflow-hidden mb-6 animate-pulse">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-3">🔥 OFERTA ESPECIAL!</h2>
              <p className="text-lg mb-4">Apenas as próximas 127 pessoas conseguem esse desconto!</p>
              
              {/* Timer */}
              <div className="bg-black rounded-lg p-4">
                <div className="text-red-400 font-bold text-sm mb-2 text-center">⏰ OFERTA EXPIRA EM:</div>
                <div className="text-3xl font-bold text-white text-center">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>

          {/* OPÇÃO 1 - BÁSICA */}
          <div className="bg-gray-50 rounded-lg shadow-md border border-gray-300 overflow-hidden mb-6">
            <div className="bg-gray-500 text-white py-3 text-center">
              <span className="text-lg font-bold">🌿 OPÇÃO BÁSICA</span>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Farmácia Natural em Casa
              </h3>
              
              <div className="space-y-2 mb-4">
                {[
                  "✅ 180 receitas naturais básicas",
                  "✅ Guia para 15 condições principais",
                  "✅ Instruções simples de preparo"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-gray-600 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Preço Básico */}
              <div className="bg-gray-100 rounded-lg p-4 mb-4 border border-gray-300">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div>
                      <div className="text-gray-500 line-through text-lg">R$ 27,00</div>
                      <div className="text-xs text-gray-600">Preço normal</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div>
                      <div className="text-3xl font-bold text-gray-700">R$ 9,99</div>
                      <div className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold">63% OFF</div>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-xs text-gray-700">
                    <div className="flex items-center justify-center gap-2">
                      <CreditCard size={12} className="text-blue-600" />
                      <span>À vista no PIX</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <ShieldCheck size={12} className="text-green-600" />
                      <span>Garantia de 30 dias</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock size={12} className="text-orange-600" />
                      <span>Acesso imediato</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Básico */}
              <button 
                onClick={handleBasicPurchase}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-base font-medium py-3 rounded-lg transition-all duration-300 shadow-md border border-gray-400 mb-3"
              >
                QUERO A OPÇÃO BÁSICA
                <div className="text-sm font-normal mt-1">R$ 9,99 - Acesso Imediato</div>
              </button>
            </div>
          </div>

          {/* OPÇÃO 2 - COMPLETA */}
          <div className="bg-white rounded-lg shadow-2xl border-4 border-green-400 overflow-hidden mb-6 relative">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 text-center relative">
              <span className="text-xl font-bold">🏆 OPÇÃO COMPLETA</span>
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-black text-sm font-bold px-3 py-2 rounded-full animate-pulse shadow-lg">
                MAIS POPULAR
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🌟 980 RECEITAS NATURAIS + BÔNUS EXCLUSIVOS
              </h3>
              
              <div className="space-y-3 mb-6">
                {[
                  "✅ 980 receitas naturais completas",
                  "✅ Receitas para +45 condições de saúde",
                  "✅ Guia Menopausa Natural",
                  "✅ Poder dos Óleos Essenciais",
                  "✅ 10 Banhos Energizantes",
                  "✅ Plano Detox 30 dias",
                  "✅ Suporte WhatsApp 60 dias",
                  "✅ Garantia de 30 dias",
                  "✅ Atualizações gratuitas vitalícias"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Preço Completo */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6 border-2 border-green-300">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div>
                      <div className="text-gray-500 line-through text-2xl font-bold">R$ 97,00</div>
                      <div className="text-sm text-gray-600 font-medium">Preço normal</div>
                    </div>
                    <div className="text-3xl font-bold">→</div>
                    <div>
                      <div className="text-4xl font-bold text-green-600">R$ 27,00</div>
                      <div className="bg-red-600 text-white px-3 py-2 rounded-full text-sm font-bold animate-pulse">72% OFF</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-700 font-medium">
                    <div className="flex items-center justify-center gap-2">
                      <CreditCard size={16} className="text-blue-600" />
                      <span>ou 3x de R$ 9,00 sem juros</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <ShieldCheck size={16} className="text-green-600" />
                      <span>Garantia de 30 dias</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Completo */}
              <button 
                onClick={handleCompletePurchase}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl font-bold py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-3 border-green-400 mb-4 animate-pulse"
              >
                🏆 SIM! QUERO AS 980 RECEITAS
                <div className="text-base font-normal mt-2">👇 R$ 27,00 - MELHOR INVESTIMENTO DA SUA VIDA</div>
              </button>
              
              <div className="text-center">
                <p className="text-sm text-green-700 font-bold">
                  ⭐ Mais de 8.500 pessoas já transformaram suas vidas!
                </p>
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-green-50 p-4 border border-green-200 rounded-lg mb-6">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck size={24} className="text-green-600" />
              <div className="text-center">
                <h4 className="font-bold text-green-800 text-sm">GARANTIA TOTAL DE 30 DIAS</h4>
                <p className="text-green-700 text-xs">Se não funcionar, devolvemos 100% do seu dinheiro</p>
              </div>
            </div>
          </div>

          {/* Depoimentos Rápidos */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            {[
              {
                name: "Carlos, 45 anos",
                text: "Economizei R$ 240 por mês em remédios!",
                rating: 5
              },
              {
                name: "Ana, 52 anos", 
                text: "Minha ansiedade sumiu em 15 dias!",
                rating: 5
              },
              {
                name: "José, 60 anos",
                text: "Durmo 8h por noite sem remédio!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={12} />
                  ))}
                </div>
                <p className="text-gray-800 font-medium text-sm mb-1">"{testimonial.text}"</p>
                <p className="text-gray-600 text-xs">- {testimonial.name}</p>
              </div>
            ))}
          </div>

          {/* Aviso Final */}
          {/* URGÊNCIA - Movido para baixo */}
          <div className="text-center mb-8">
            <div className="bg-red-600 text-white rounded-lg p-4 mb-6 shadow-lg animate-pulse">
              <h2 className="text-xl font-bold mb-2">🔥 OFERTA ESPECIAL!</h2>
              <p className="text-sm mb-3">Apenas as próximas 127 pessoas conseguem esse desconto!</p>
              
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
        </div>
      </div>
    </section>

    {/* Payment Options Modal */}
    {showPaymentModal && (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              💳 Escolha sua forma de pagamento
            </h3>
            <p className="text-gray-700">
              Selecione a opção mais conveniente para você
            </p>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={() => {
                // Determine which plan was selected and use appropriate PIX link
                const pixLink = selectedPlan === 'basic' 
                  ? 'https://app.pushinpay.com.br/service/pay/9F2F7657-66AE-46EB-B770-BC034D63EBA9'
                  : 'https://app.pushinpay.com.br/service/pay/9F2F81DA-27C6-47AB-9476-DFA943D410E1';
                window.open(pixLink, '_blank');
                setShowPaymentModal(false);
              }}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">PIX</span>
              </div>
              <div className="text-left">
                <div className="text-lg">Pagar com PIX</div>
                <div className="text-sm text-green-100">Aprovação instantânea</div>
              </div>
            </button>
            
            <button 
              onClick={() => {
                // Determine which plan was selected and use appropriate card link
                const cardLink = selectedPlan === 'basic'
                  ? 'https://pay.kiwify.com.br/6tkqn2K'
                  : 'https://pay.kiwify.com.br/jk0QIb9';
                window.open(cardLink, '_blank');
                setShowPaymentModal(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <CreditCard className="text-blue-600" size={16} />
              </div>
              <div className="text-left">
                <div className="text-lg">Cartão de Crédito</div>
                <div className="text-sm text-blue-100">Parcele em até 5x sem juros</div>
              </div>
            </button>
          </div>
          
          <button 
            onClick={() => setShowPaymentModal(false)}
            className="w-full mt-4 text-gray-600 hover:text-gray-800 font-medium py-2"
          >
            Fechar
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default Pricing;
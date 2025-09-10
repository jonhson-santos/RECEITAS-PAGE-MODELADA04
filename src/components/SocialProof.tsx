import React, { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    { name: "Renata Silva", location: "São Paulo, SP", product: "Farmácia Natural Completa", time: "há 2 minutos" },
    { name: "Carlos Pereira", location: "Rio de Janeiro, RJ", product: "Farmácia Natural Básica", time: "há 3 minutos" },
    { name: "Maria Santos", location: "Belo Horizonte, MG", product: "Farmácia Natural Completa", time: "há 5 minutos" },
    { name: "João Oliveira", location: "Salvador, BA", product: "Farmácia Natural Completa", time: "há 7 minutos" },
    { name: "Ana Costa", location: "Fortaleza, CE", product: "Farmácia Natural Básica", time: "há 8 minutos" },
    { name: "Pedro Lima", location: "Brasília, DF", product: "Farmácia Natural Completa", time: "há 10 minutos" },
    { name: "Rosa Ferreira", location: "Porto Alegre, RS", product: "Farmácia Natural Completa", time: "há 12 minutos" },
    { name: "José Almeida", location: "Recife, PE", product: "Farmácia Natural Básica", time: "há 15 minutos" },
    { name: "Lucia Rodrigues", location: "Curitiba, PR", product: "Farmácia Natural Completa", time: "há 18 minutos" },
    { name: "Antonio Silva", location: "Manaus, AM", product: "Farmácia Natural Completa", time: "há 20 minutos" },
    { name: "Carmen Souza", location: "Goiânia, GO", product: "Farmácia Natural Básica", time: "há 22 minutos" },
    { name: "Roberto Costa", location: "Belém, PA", product: "Farmácia Natural Completa", time: "há 25 minutos" }
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotification(randomIndex);
      setIsVisible(true);

      // Hide after 20 seconds
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentNotification(null);
        }, 500);
      }, 2500);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);

    // Then show notifications every 2.5 seconds
    const interval = setInterval(showNotification, 2500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentNotification(null);
    }, 500);
  };

  if (currentNotification === null) return null;

  const notification = notifications[currentNotification];

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 max-w-xs md:max-w-sm transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ maxWidth: '220px' }}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 relative">
        <button 
          onClick={handleClose}
          className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm"
        >
          <X size={10} />
        </button>
        
        <div className="flex items-start gap-1.5">
          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <ShoppingCart className="text-green-600" size={10} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-0.5 mb-0.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 text-xs font-medium">Comprou</span>
            </div>
            
            <p className="text-gray-900 font-medium text-xs mb-0.5">
              <strong>{notification.name}</strong> de {notification.location}
            </p>
            
            <p className="text-gray-700 text-xs mb-0.5">
              <strong>{notification.product}</strong>
            </p>
            
            <p className="text-gray-500 text-xs">
              {notification.time}
            </p>
          </div>
        </div>
        
        <div className="mt-1.5 pt-1.5 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>✅ Verificada</span>
            <span>🔒 Seguro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
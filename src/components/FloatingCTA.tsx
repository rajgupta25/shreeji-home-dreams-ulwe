
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      {isExpanded ? (
        <div className="bg-white rounded-2xl shadow-2xl p-4 border-2 border-yellow-400/30 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900">Quick Contact</h3>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsExpanded(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
              onClick={() => window.location.href = 'tel:+919876543210'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            
            <Button
              size="sm"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/919876543210?text=Hi, I am interested in your real estate services', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      ) : (
        <Button
          size="lg"
          className="rounded-full h-14 w-14 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black shadow-2xl animate-pulse"
          onClick={() => setIsExpanded(true)}
        >
          <Phone className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default FloatingCTA;

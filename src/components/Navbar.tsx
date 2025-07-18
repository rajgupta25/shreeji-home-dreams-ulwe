import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-yellow-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3c25c0c4-6fea-4f2f-aa1c-631af87d3a06.png" 
              alt="Shreeji Enterprises" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-white/80 hover:text-yellow-400 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+917718019291" className="text-sm font-medium">
                +91 77180 19291
              </a>
            </div>
            <div className="flex items-center text-white/80 hover:text-yellow-400 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:bizz.shreejienterises@gmail.com" className="text-sm font-medium">
                bizz.shreejienterises@gmail.com
              </a>
            </div>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-6 py-3 text-sm shadow-[0_4px_16px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_24px_rgba(255,215,0,0.4)] transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://calendly.com/bizz-shreejienterprises/30min', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Contact */}
          <div className="md:hidden">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold shadow-[0_4px_16px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_24px_rgba(255,215,0,0.4)] transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('tel:+917718019291', '_self')}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
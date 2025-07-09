
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffd700\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mb-2">
              SHREEJI
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-yellow-400 tracking-wide">
              ENTERPRISES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-4"></div>
          </div>

          {/* Taglines */}
          <div className="mb-12 space-y-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light italic">
              "Where Every Dream Finds a Home"
            </h3>
            <h3 className="text-lg md:text-xl lg:text-2xl text-yellow-400 font-light">
              "प्रत्येक स्वप्नाला मिळतं आपलं घर"
            </h3>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <a href="tel:+919876543210" className="text-yellow-400 text-xl md:text-2xl font-semibold hover:text-yellow-300 transition-colors">
              +91 98765 43210
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              📅 Book Free Property Consultation
            </Button>
            <div className="flex gap-3">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-full px-6 py-2">
            <span className="text-yellow-400 font-medium">📍 Ulwe, Navi Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

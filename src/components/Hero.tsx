import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import naviMumbaiSkyline from '@/assets/navi-mumbai-skyline.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${naviMumbaiSkyline})` }}
      />
      
      {/* Dark Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      {/* Subtle Gold Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-transparent" />

      <div className="relative container mx-auto px-4 py-16 lg:py-24 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          {/* Logo Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/3c25c0c4-6fea-4f2f-aa1c-631af87d3a06.png" 
              alt="Shreeji Enterprises Logo" 
              className="h-48 md:h-56 lg:h-64 w-auto object-contain filter drop-shadow-2xl"
            />
          </div>

          {/* Taglines */}
          <div className="mb-12 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-serif leading-tight">
              "Where Every Dream Finds a Home"
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-serif font-medium">
              "प्रत्येक स्वप्नाला मिळतं आपलं घर"
            </h3>
          </div>

          {/* Contact Info */}
          <div className="mb-10">
            <a 
              href="tel:+917718019291" 
              className="inline-block text-yellow-400 text-lg md:text-xl font-bold hover:text-yellow-300 transition-colors duration-300 bg-black/30 px-4 py-2 rounded-full border border-yellow-400/30"
            >
              +91 77180 19291
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold px-10 py-4 text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl border-2 border-yellow-400 animate-pulse hover:animate-none relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_2s_infinite] hover:shadow-yellow-400/50"
            >
              Book Free Consultation
            </Button>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold px-8 py-4 backdrop-blur-sm bg-black/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 font-bold px-8 py-4 shadow-lg border-2 border-green-500"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400/40 rounded-full px-8 py-3 backdrop-blur-sm">
            <span className="text-yellow-300 font-bold text-lg">Real Estate, Rentals, and Investments in Ulwe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Subtle Gold Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent" />

      <div className="relative container mx-auto px-4 py-16 lg:py-24 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          {/* Logo Image */}
          <div className="mb-3 md:mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/3c25c0c4-6fea-4f2f-aa1c-631af87d3a06.png" 
              alt="Shreeji Enterprises Logo" 
              className="h-48 md:h-56 lg:h-60 w-auto object-contain filter drop-shadow-[0_8px_32px_rgba(255,215,0,0.3)]"
            />
          </div>

          {/* Taglines */}
          <div className="mb-12 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-playfair leading-tight tracking-wide drop-shadow-lg">
              "Where Every Dream Finds a Home"
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-serif font-medium tracking-wide drop-shadow-md">
              "प्रत्येक स्वप्नाला मिळतं आपलं घर"
            </h3>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4 sm:px-0">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold px-6 sm:px-12 py-4 sm:py-5 text-base sm:text-lg transition-all duration-500 transform hover:scale-105 shadow-[0_20px_40px_rgba(255,215,0,0.3)] hover:shadow-[0_25px_50px_rgba(255,215,0,0.4)] border-2 border-yellow-400 relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-[shimmer_3s_infinite] backdrop-blur-sm"
              onClick={() => window.open('https://calendly.com/bizz-shreejienterprises/30min', '_blank')}
            >
              Book Free Consultation
            </Button>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-yellow-400/80 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-500 font-bold px-6 sm:px-10 py-4 sm:py-5 backdrop-blur-md bg-black/30 hover:bg-yellow-400 shadow-[0_8px_32px_rgba(255,215,0,0.2)] hover:shadow-[0_12px_48px_rgba(255,215,0,0.4)] hover:scale-105 transform"
                onClick={() => window.open('tel:+917718019291', '_self')}
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Call Now</span>
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white transition-all duration-500 font-bold px-6 sm:px-10 py-4 sm:py-5 shadow-[0_8px_32px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.4)] border-2 border-green-500 hover:scale-105 transform backdrop-blur-sm"
                onClick={() => window.open('https://wa.me/917718019291?text=Hello+I%27m+interested+in+Shreeji+Enterprises+Properties', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-block bg-gradient-to-r from-yellow-400/25 to-yellow-600/25 border-2 border-yellow-400/60 rounded-full px-10 py-4 backdrop-blur-md shadow-[0_8px_32px_rgba(255,215,0,0.2)]">
            <span className="text-yellow-300 font-bold text-lg tracking-wide">Real Estate, Rentals, and Investments in Ulwe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
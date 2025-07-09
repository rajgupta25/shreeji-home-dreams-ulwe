
import { Home, TrendingUp, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-yellow-400" />,
      title: "Buy, Sell & Rent",
      subtitle: "Flats & Shops",
      description: "Comprehensive property solutions for residential and commercial spaces with transparent pricing."
    },
    {
      icon: <MapPin className="h-12 w-12 text-yellow-400" />,
      title: "End-to-End",
      subtitle: "Plot Assistance",
      description: "Complete guidance from plot selection to documentation with legal compliance support."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-400" />,
      title: "Investment Deals",
      subtitle: "High Returns",
      description: "Curated investment opportunities with proven track record of delivering exceptional returns."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Premium</span> Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience excellence in every transaction with our comprehensive real estate solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-2 border-transparent hover:border-yellow-400/30 overflow-hidden"
            >
              <CardContent className="p-8 text-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-yellow-600 mb-4">
                    {service.subtitle}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

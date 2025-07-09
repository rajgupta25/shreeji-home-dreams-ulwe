
import { Shield, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Trust & Transparency",
      description: "Every transaction backed by complete transparency and ethical practices"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Local Expertise",
      description: "Deep understanding of Ulwe and Navi Mumbai real estate market"
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: "Client First Approach",
      description: "Personalized service with your dreams and requirements at the center"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      text: "Excellent service! Shreeji Enterprises helped us find our dream home in Ulwe. Their transparency and professionalism are unmatched.",
      rating: 5
    },
    {
      name: "Priya Patel",
      text: "Great investment advice! The team guided us through every step and delivered exactly what they promised. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Shreeji Enterprises</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With years of experience in Ulwe and Navi Mumbai real estate market, we bring unparalleled expertise, 
            trust, and commitment to making your property dreams a reality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            What Our <span className="text-yellow-400">Clients</span> Say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-yellow-400 font-semibold text-lg">
                  - {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

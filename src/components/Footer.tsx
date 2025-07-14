
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              SHREEJI ENTERPRISES
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
            "Where Every Dream Finds a Home"<br />
            "प्रत्येक स्वप्नाला मिळतं आपलं घर"
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto md:mx-0"></div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">
                    Shreeji Kuber Corner, Sec 20<br />
                    Plot no. 79, Shop No. 06<br />
                    Ulwe, Navi Mumbai
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                <a href="tel:+917718019291" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  +91 77180 19291
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <a href="mailto:bizz.shreejienterises@gmail.com" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  bizz.shreejienterises@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours & Services */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-6">Operating Hours</h4>
            <div className="flex items-start mb-6">
              <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
              <div className="text-slate-300">
                <p>All Days: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Our Services</h4>
            <ul className="text-slate-300 space-y-2">
              <li>• Buy, Sell & Rent Properties</li>
              <li>• Plot Assistance & Documentation</li>
              <li>• Investment Consultation</li>
              <li>• Property Valuation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Shreeji Enterprises. All rights reserved. | Licensed Real Estate Agent
            </p>
            <p className="text-slate-400 text-sm">
              Committed to Transparency • Trusted by Hundreds • Your Property Partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

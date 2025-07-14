
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', number: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to find your perfect property? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-yellow-500" />
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Shreeji Kuber Corner, Sec 20<br />
                  Plot no. 79, Shop No. 06<br />
                  Ulwe, Navi Mumbai
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
                  <a href="tel:+917718019291" className="text-yellow-600 hover:text-yellow-700 font-medium">
                    +91 77180 19291
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                  <a href="mailto:bizz.shreejienterises@gmail.com" className="text-yellow-600 hover:text-yellow-700 font-medium">
                    bizz.shreejienterises@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Operating Hours</h3>
                <p className="text-slate-600">
                  All Days: 10:00 AM - 7:00 PM
                </p>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400/20">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1!2d73.028762!3d18.977856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU4JzQwLjMiTiA3M8KwMDEnNDMuNSJF!5e0!3m2!1sen!2sin!4v1629789456123!5m2!1sen!2sin`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreeji Enterprises Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-2 border-yellow-400/30 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
                <CardTitle className="text-2xl font-bold text-center">
                  📅 Book Free Property Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-2 border-slate-200 focus:border-yellow-400 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="number" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="number"
                      name="number"
                      type="tel"
                      required
                      value={formData.number}
                      onChange={handleChange}
                      className="border-2 border-slate-200 focus:border-yellow-400 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="border-2 border-slate-200 focus:border-yellow-400 transition-colors min-h-[120px]"
                      placeholder="Tell us about your property requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

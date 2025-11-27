import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ShieldStackLogoBox } from '@/components/ShieldStackLogo';
import { SecurityBackground } from '@/components/SecurityBackground';
import { useToast } from '@/hooks/use-toast';
import { MobileMenu } from '@/components/MobileMenu';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFreeScanClick = () => {
    navigate('/', { state: { scrollToScan: true } });
  };

  return (
    <div className="min-h-screen bg-white relative">
      <SecurityBackground />
      
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <ShieldStackLogoBox size="md" />
            <span className="text-xl font-bold text-gray-900">ShieldStack</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Home
            </button>
            <button onClick={() => navigate('/products')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Products
            </button>
            <button onClick={() => navigate('/blog')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Blog
            </button>
            <button onClick={() => navigate('/about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              About
            </button>
            <button onClick={() => navigate('/contact')} className="text-gray-900 font-medium text-sm">
              Contact
            </button>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's talk about your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">security needs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Want to see how ShieldStack can protect your business? 
              We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your security needs..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">hello@shieldstack.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                      <p className="text-gray-600">
                        123 Security Street<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer to start with a scan?</h3>
                <p className="text-gray-600 mb-6">
                  Try our free website security scan to see what we can find about your public-facing security.
                </p>
                <Button 
                  onClick={handleFreeScanClick}
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Try Free Scan
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/90 backdrop-blur-sm relative z-10 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <ShieldStackLogoBox size="sm" />
              <span className="font-bold text-gray-900">ShieldStack</span>
            </div>
            <p className="text-gray-600 mb-2">Security made simple for business owners</p>
            <p className="text-sm text-gray-500">© 2025 ShieldStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
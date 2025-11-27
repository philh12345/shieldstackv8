import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Target, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShieldStackLogoBox } from '@/components/ShieldStackLogo';
import { SecurityBackground } from '@/components/SecurityBackground';
import { MobileMenu } from '@/components/MobileMenu';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <button onClick={() => navigate('/about')} className="text-gray-900 font-medium text-sm">
              About
            </button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Contact
            </button>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
            <Shield className="h-3.5 w-3.5" />
            About ShieldStack
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Security made simple for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">business owners</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We believe every business deserves enterprise-grade security without needing a security team. 
            ShieldStack makes cloud security accessible, understandable, and actionable.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Most small and medium businesses can't afford a full-time security team. But they face the same threats as large enterprises. 
                  That's not fair, and it's not sustainable.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  ShieldStack exists to level the playing field. We give every business owner the tools and insights they need to protect 
                  their company, their customers, and their reputation—without needing a computer science degree.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What we believe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl bg-white/80 backdrop-blur-sm">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plain English, Always</h3>
              <p className="text-gray-600 leading-relaxed">
                Security doesn't have to be complicated. We explain everything in terms anyone can understand, 
                because you shouldn't need a technical background to protect your business.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl bg-white/80 backdrop-blur-sm">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Stay in Control</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't make changes to your systems. We show you what's wrong, explain why it matters, 
                and recommend what to do. You decide what happens next.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl bg-white/80 backdrop-blur-sm">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security for Everyone</h3>
              <p className="text-gray-600 leading-relaxed">
                Every business deserves protection, regardless of size or budget. We're building tools that 
                make enterprise-grade security accessible to companies of all sizes.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl bg-white/80 backdrop-blur-sm">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Focus on What Matters</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't overwhelm you with every possible security check. We focus on the risks that actually 
                matter to your business and help you prioritize what to fix first.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-2xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to protect your business?</h2>
            <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
              Join businesses that trust ShieldStack to keep their cloud systems secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 shadow-lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                size="lg"
                onClick={() => navigate('/products')}
                className="bg-blue-800 text-white hover:bg-blue-900 border-2 border-white font-semibold px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </Card>
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

export default About;
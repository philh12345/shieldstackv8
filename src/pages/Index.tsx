import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Cloud, Zap, CheckCircle2, ArrowRight, Lock, RefreshCw, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ShieldStackLogoBox } from '@/components/ShieldStackLogo';
import { SecurityBackground } from '@/components/SecurityBackground';
import { MobileMenu } from '@/components/MobileMenu';

const Index = () => {
  const [domain, setDomain] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to scan section
    if (location.state?.scrollToScan) {
      setTimeout(() => {
        const scanSection = document.getElementById('free-scan');
        if (scanSection) {
          scanSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      // Clear the state
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) {
      const cleanDomain = domain.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
      navigate(`/results/${cleanDomain}`);
    }
  };

  const scrollToScan = () => {
    const scanSection = document.getElementById('free-scan');
    if (scanSection) {
      scanSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <SecurityBackground />
      
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldStackLogoBox size="md" />
            <span className="text-xl font-bold text-gray-900">ShieldStack</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/products')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Products</button>
            <button onClick={() => navigate('/blog')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Blog</button>
            <button onClick={() => navigate('/about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">About</button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Contact</button>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* Rest of the page content remains the same */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto pt-20 pb-16 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200 backdrop-blur-sm">
                <Cloud className="h-3.5 w-3.5" />
                Cloud tenant security platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Know your security posture
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">every single day</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                ShieldStack connects to your cloud tenants and continuously monitors your security configuration. 
                Get clear, plain-spoken insights about your Microsoft 365, Google Workspace, AWS, and Azure security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={scrollToScan}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold"
                >
                  Try Free Website Scan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What ShieldStack Does */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What ShieldStack does</h2>
                <p className="text-xl text-gray-600">Continuous security monitoring, explained in plain English</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Cloud className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Connects to Your Cloud</h3>
                  <p className="text-gray-600 leading-relaxed">
                    ShieldStack securely connects to your Microsoft 365, Google Workspace, AWS, or Azure tenant 
                    to monitor your security configuration.
                  </p>
                </Card>

                <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <RefreshCw className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Monitors Continuously</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We check your security posture every day, watching for misconfigurations, weak settings, 
                    or changes that could put your business at risk.
                  </p>
                </Card>

                <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Explains Clearly</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When we spot an issue, we tell you in plain English—what it is, why it matters, 
                    and exactly what to do about it.
                  </p>
                </Card>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => navigate('/products')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold"
                >
                  Learn more about ShieldStack
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Free Scanner Section */}
        <section id="free-scan" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200">
                  <Zap className="h-3.5 w-3.5" />
                  Free website security scan
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Start with a free website scan
                </h2>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                  Before diving into your cloud security, check your website's public-facing security. 
                  Get instant insights in plain English—no technical knowledge required.
                </p>

                {/* Scan Form */}
                <form onSubmit={handleScan} className="max-w-2xl mx-auto mb-12">
                  <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all">
                    <div className="flex-1 flex items-center gap-3 px-4">
                      <Input
                        type="text"
                        placeholder="example.com"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="border-0 focus-visible:ring-0 text-base placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                      Scan now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Free • No signup • Instant results</p>
                </form>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all backdrop-blur-sm">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Plain English</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Security explained in simple terms anyone can understand</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all backdrop-blur-sm">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Get your security report in seconds, not hours</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all backdrop-blur-sm">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Lock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Actionable</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Clear steps to improve your website security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* After Scan - Next Steps */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xl backdrop-blur-sm">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">After your scan, go deeper</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                    Your website scan shows public-facing security. But your biggest risks are hidden in your 
                    cloud tenant configuration. ShieldStack monitors those systems continuously, so you always 
                    know your true security posture.
                  </p>
                  <Button 
                    onClick={() => navigate('/products')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    Discover complete protection
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/90 backdrop-blur-sm relative z-10">
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

export default Index;
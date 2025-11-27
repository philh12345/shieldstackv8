import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Zap, CheckCircle2, ArrowRight, Bell, BarChart3, RefreshCw, Shield, AlertTriangle, FileText, TrendingUp, Users, Settings, Database, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShieldStackLogoBox } from '@/components/ShieldStackLogo';
import { SecurityBackground } from '@/components/SecurityBackground';
import { MobileMenu } from '@/components/MobileMenu';

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <button onClick={() => navigate('/products')} className="text-gray-900 font-medium text-sm">
              Products
            </button>
            <button onClick={() => navigate('/blog')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Blog
            </button>
            <button onClick={() => navigate('/about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              About
            </button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Contact
            </button>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* Rest of the page content remains the same */}
      <main className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto pt-20 pb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5" />
              Subscription-based cloud security monitoring
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Your single pane of glass for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">cloud tenant security</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              ShieldStack is a subscription-based service that monitors your cloud tenant security configurations 
              and provides clear, plain-spoken recommendations to strengthen your security posture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-base font-semibold shadow-lg"
              >
                <Shield className="h-5 w-5 mr-2" />
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleFreeScanClick}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold"
              >
                Try Free Website Scan
              </Button>
            </div>
          </div>

          {/* Service Diagram */}
          <section className="mb-24">
            <Card className="p-12 bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How ShieldStack works</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                {/* ShieldStack Logo */}
                <div className="flex flex-col items-center">
                  <div className="bg-white p-6 rounded-3xl shadow-2xl mb-4 border-2 border-blue-200">
                    <div className="w-16 h-16">
                      <ShieldStackLogoBox size="lg" />
                    </div>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">ShieldStack</p>
                  <p className="text-sm text-gray-600">Monitoring Platform</p>
                </div>

                {/* Connection Arrow */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                  <div className="md:hidden h-12 w-0.5 bg-gradient-to-b from-blue-600 to-blue-400"></div>
                  <RefreshCw className="h-6 w-6 text-blue-600 animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="md:hidden h-12 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                </div>

                {/* Cloud Tenants */}
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-lg">
                      <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-gray-700 text-center">Microsoft 365</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-lg">
                      <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-gray-700 text-center">Google Workspace</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-lg">
                      <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-gray-700 text-center">AWS</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-lg">
                      <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-gray-700 text-center">Azure</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">Your Cloud Tenants</p>
                  <p className="text-sm text-gray-600">Where your data lives</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-700 text-center leading-relaxed">
                  <strong>Read-only access:</strong> ShieldStack connects securely to your cloud tenants with read-only permissions. 
                  We monitor your security configurations continuously and alert you to risks—but all remediation happens on your tenant side.
                </p>
              </div>
            </Card>
          </section>

          {/* What ShieldStack Does */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What ShieldStack does</h2>
              <p className="text-xl text-gray-600">We identify risks and provide clear recommendations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Configuration Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  We scan your cloud tenant configurations daily, checking security settings, policies, and access controls 
                  against industry best practices and compliance standards.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Identification & Alerts</h3>
                <p className="text-gray-600 leading-relaxed">
                  When we spot a security risk—like unauthorized users, weak policies, or misconfigurations—we alert you 
                  immediately with clear explanations of what's wrong and why it matters.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plain-English Recommendations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every alert comes with clear, actionable recommendations in plain English. No technical jargon—just 
                  straightforward guidance on how to fix the issue in your tenant.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Posture Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track your security improvements over time with clear dashboards and reports. See your progress, 
                  demonstrate compliance, and prove to stakeholders that you're taking security seriously.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">User & Access Visibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  We highlight users who shouldn't have access, accounts with excessive permissions, and inactive users 
                  that pose security risks. You handle the remediation in your tenant.
                </p>
              </Card>

              <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur-sm">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Bell className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Configuration Drift Detection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Security settings change over time. We track every configuration change and alert you when settings 
                  drift away from secure baselines or compliance requirements.
                </p>
              </Card>
            </div>
          </section>

          {/* Subscription Model */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
              <p className="text-xl text-gray-600">One subscription, complete visibility</p>
            </div>

            <Card className="p-12 bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-xl max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-100">
                  <Zap className="h-3.5 w-3.5" />
                  Subscription-based service
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Everything you need to stay secure</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Daily security configuration scans across all connected tenants</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Real-time alerts when risks are detected</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Plain-English recommendations for every issue</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Security posture tracking and reporting</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Support from security experts who speak your language</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Single pane of glass for all your cloud tenants</p>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => navigate('/contact')} 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 text-base shadow-lg"
                >
                  Contact us for pricing
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          </section>

          {/* Why Choose ShieldStack */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why businesses choose ShieldStack</h2>
              <p className="text-xl text-gray-600">Security monitoring that makes sense</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm border-2 border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Technical Expertise Required</h3>
                <p className="text-gray-600 leading-relaxed">
                  We explain everything in plain English. You don't need a security team to understand your risks 
                  and take action.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm border-2 border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Single Pane of Glass</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor all your cloud tenants from one dashboard. No more jumping between different platforms 
                  to check your security.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm border-2 border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">You Stay in Control</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify risks and recommend fixes, but you decide what to change and when. Your tenant, 
                  your rules.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="p-12 md:p-16 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl backdrop-blur-sm shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to secure your cloud tenants?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Get started with ShieldStack today and gain complete visibility into your cloud security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/contact')} 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Get ShieldStack
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button 
                  onClick={handleFreeScanClick} 
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold"
                >
                  Try free website scan
                </Button>
              </div>
            </Card>
          </section>
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

export default Products;
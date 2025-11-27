import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, RefreshCw, Cloud, Users, ArrowRight, Shield, Award, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { runSecurityScan } from '@/services/securityScanner';
import type { SecurityScanResult } from '@/types/security';
import { ShieldStackLogoBox } from '@/components/ShieldStackLogo';
import { SecurityBackground } from '@/components/SecurityBackground';
import { MobileMenu } from '@/components/MobileMenu';

const Results = () => {
  const { domain } = useParams<{ domain: string }>();
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);
  const [results, setResults] = useState<SecurityScanResult | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!domain) {
      navigate('/');
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    // Run async scan
    const performScan = async () => {
      const scanResults = await runSecurityScan(domain);
      setResults(scanResults);
      setProgress(100);
      setTimeout(() => setScanning(false), 500);
    };

    performScan();

    return () => clearInterval(progressInterval);
  }, [domain, navigate]);

  const getStatusIcon = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />;
      case 'fail':
        return <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600" />;
    }
  };

  const getStatusColor = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return 'border-green-200 bg-green-50/80';
      case 'warning':
        return 'border-amber-200 bg-amber-50/80';
      case 'fail':
        return 'border-red-200 bg-red-50/80';
    }
  };

  const getOverallScore = () => {
    if (!results) return 0;
    const total = results.checks.length;
    const passed = results.checks.filter(c => c.status === 'pass').length;
    const warnings = results.checks.filter(c => c.status === 'warning').length;
    return Math.round(((passed + warnings * 0.5) / total) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  if (scanning) {
    return (
      <div className="min-h-screen bg-white relative flex items-center justify-center">
        <SecurityBackground />
        <div className="max-w-md w-full mx-4 relative z-10">
          <Card className="p-8 md:p-12 text-center shadow-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm">
            <div className="mb-6">
              <RefreshCw className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto animate-spin" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Checking {domain}</h2>
            <p className="text-gray-600 mb-6">Running security checks...</p>
            <Progress value={progress} className="mb-3 h-2" />
            <p className="text-sm text-gray-500 font-medium">{progress}%</p>
          </Card>
        </div>
      </div>
    );
  }

  if (!results) return null;

  const score = getOverallScore();
  const listedCount = results.reputationChecks?.filter(c => c.status === 'listed').length || 0;
  const hasReputationChecks = results.reputationChecks && results.reputationChecks.length > 0;

  return (
    <div className="min-h-screen bg-white relative">
      <SecurityBackground />
      
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <ShieldStackLogoBox size="md" />
            <span className="text-lg md:text-xl font-bold text-gray-900">ShieldStack</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={() => navigate('/products')} className="hidden md:block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Products
            </button>
            <button onClick={() => navigate('/about')} className="hidden md:block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              About
            </button>
            <button onClick={() => navigate('/contact')} className="hidden md:block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Contact
            </button>
            <Button variant="outline" onClick={() => navigate('/')} className="hidden sm:flex border-gray-300 hover:bg-gray-50 text-sm md:text-base">
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              New scan
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Overall Score */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-lg md:text-2xl font-semibold text-gray-600 mb-2">Quick scan results for</h1>
            <p className="text-2xl md:text-4xl text-gray-900 font-bold break-all">{domain}</p>
          </div>

          <Card className="p-8 md:p-12 text-center bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl">
            <div className="inline-flex flex-col items-center">
              <div className={`text-6xl md:text-8xl font-bold mb-4 ${getScoreColor(score)}`}>
                {score}
              </div>
              <div className="text-gray-600 text-lg md:text-xl mb-6">Website Security Score</div>
              
              <p className="text-gray-700 text-base md:text-lg max-w-2xl mb-6">
                {score >= 80 
                  ? "Your website looks pretty good! But this is just a basic check of what's visible from the outside."
                  : score >= 60
                  ? "Your website has some issues that need attention. And this is just what we can see from the outside."
                  : "Your website has several security problems. And remember, this is only checking what's publicly visible."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm bg-white py-4 px-6 md:px-8 rounded-xl border border-gray-200 shadow-sm w-full max-w-md">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  <span className="font-semibold text-gray-700">{results.checks.filter(c => c.status === 'pass').length} Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />
                  <span className="font-semibold text-gray-700">{results.checks.filter(c => c.status === 'warning').length} Needs Attention</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
                  <span className="font-semibold text-gray-700">{results.checks.filter(c => c.status === 'fail').length} Problems</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Summary */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">What we checked</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {results.checks.map((check, index) => (
              <Card key={index} className={`p-6 border-2 ${getStatusColor(check.status)} backdrop-blur-sm`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(check.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <check.icon className="h-4 w-4 text-gray-600" />
                      <h3 className="font-bold text-gray-900">{check.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{check.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {hasReputationChecks && (
            <Card className={`mt-6 p-6 border-2 ${listedCount === 0 ? 'border-green-200 bg-green-50/80' : 'border-red-200 bg-red-50/80'} backdrop-blur-sm`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {listedCount === 0 ? (
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-gray-600" />
                    <h3 className="font-bold text-gray-900">Reputation Check</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {listedCount === 0 
                      ? "We checked if your website is on any spam or malware blacklists. Good news - it's not!"
                      : "Your website appears on spam or malware blacklists. This is serious and needs immediate attention."}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* The Real Story */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="bg-blue-100 p-3 md:p-4 rounded-2xl flex-shrink-0">
                <Eye className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Here's what you need to know</h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  This scan only checked your <strong>public website</strong>—what anyone on the internet can see. 
                  That's useful, but it's not where your real security risks are.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  <strong>Your biggest security risks are hidden inside your business systems:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-base md:text-lg mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Your Microsoft 365 or Google Workspace settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Who has access to your business data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Your cloud storage and file sharing settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Your AWS or Azure configurations</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold">
                  That's where data breaches actually happen. And that's what ShieldStack monitors for you.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* What ShieldStack Does */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ShieldStack protects your business</h2>
            <p className="text-lg md:text-xl text-gray-600">We watch the systems that actually matter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <Card className="p-6 md:p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:border-blue-300 transition-all hover:shadow-xl backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                <Cloud className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Connects to Your Systems</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We securely connect to your Microsoft 365, Google Workspace, AWS, or Azure to see what's really happening inside your business.
              </p>
            </Card>

            <Card className="p-6 md:p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:border-blue-300 transition-all hover:shadow-xl backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                <Shield className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Checks Every Day</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We run hundreds of security checks automatically every single day, looking for problems before they become disasters.
              </p>
            </Card>

            <Card className="p-6 md:p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:border-blue-300 transition-all hover:shadow-xl backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Explains in Plain English</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                When we find a problem, we tell you exactly what it is, why it matters, and what to do about it—no technical jargon.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => navigate('/products')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold"
            >
              Learn more about ShieldStack
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-2xl text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to see your real security risks?</h2>
              <p className="text-blue-50 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Stop guessing about your security. Let ShieldStack show you exactly what's happening inside your business systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-base shadow-lg w-full sm:w-auto"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Get ShieldStack
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-blue-800 text-white hover:bg-blue-900 border-2 border-white font-semibold px-8 py-6 text-base w-full sm:w-auto"
                >
                  Talk to us
                </Button>
              </div>
              <p className="text-blue-100 text-sm mt-6">
                Or <button onClick={() => navigate('/')} className="underline hover:text-white font-medium">scan another website</button>
              </p>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/90 backdrop-blur-sm relative z-10 mt-16 md:mt-24">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <ShieldStackLogoBox size="sm" />
              <span className="font-bold text-gray-900">ShieldStack</span>
            </div>
            <p className="text-gray-600 mb-2 text-sm md:text-base">Security made simple for business owners</p>
            <p className="text-xs md:text-sm text-gray-500">© 2025 ShieldStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Results;
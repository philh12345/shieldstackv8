import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShieldStackLogoBox } from '@/components/ShieldStackLogo';
import { SecurityBackground } from '@/components/SecurityBackground';
import { MobileMenu } from '@/components/MobileMenu';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
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
            <button onClick={() => navigate('/blog')} className="text-gray-900 font-medium text-sm">
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

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
            <BookOpen className="h-3.5 w-3.5" />
            Security insights for business owners
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The ShieldStack
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Security Blog</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Plain-English advice about cloud security, data protection, and keeping your business safe. 
            No technical jargon—just practical tips you can actually use.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl bg-white/80 backdrop-blur-sm cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Button 
                        variant="ghost" 
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        Read more
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="mt-16 p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xl backdrop-blur-sm text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to protect your business?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Reading about security is great. Actually securing your business is better. 
              Let ShieldStack monitor your cloud security automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 shadow-lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                onClick={() => navigate('/', { state: { scrollToScan: true } })}
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 font-semibold"
              >
                Try Free Scan
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

export default Blog;
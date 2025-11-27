import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShieldStackLogoBox } from '@/components/ShieldStackLogo';
import { SecurityBackground } from '@/components/SecurityBackground';
import { MobileMenu } from '@/components/MobileMenu';
import { blogPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle clicks on links within the markdown content
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href') === '/#free-scan') {
        e.preventDefault();
        navigate('/', { state: { scrollToScan: true } });
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white relative flex items-center justify-center">
        <SecurityBackground />
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to blog
          </Button>
        </div>
      </div>
    );
  }

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
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to blog
          </Button>

          {/* Article Header */}
          <article className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden">
            {/* Featured Image */}
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
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

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Author */}
              <p className="text-gray-600 mb-8">By {post.author}</p>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
                    p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                    a: ({node, href, ...props}) => {
                      // Check if it's the free scan link
                      if (href === '/#free-scan') {
                        return (
                          <a 
                            href="/#free-scan"
                            className="text-blue-600 hover:text-blue-700 underline cursor-pointer" 
                            {...props} 
                          />
                        );
                      }
                      // Regular links
                      return <a href={href} className="text-blue-600 hover:text-blue-700 underline" {...props} />;
                    },
                    hr: ({node, ...props}) => <hr className="my-8 border-gray-200" {...props} />,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>

          {/* CTA */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 shadow-xl backdrop-blur-sm text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to secure your business?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Stop worrying about cloud security. Let ShieldStack monitor your systems and tell you exactly what needs fixing.
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

export default BlogPost;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed top-16 right-0 left-0 bg-white border-b border-gray-200 shadow-lg z-40 animate-in slide-in-from-top">
            <nav className="flex flex-col p-4 space-y-2">
              <button
                onClick={() => handleNavigate('/')}
                className="text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('/products')}
                className="text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => handleNavigate('/blog')}
                className="text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => handleNavigate('/about')}
                className="text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavigate('/contact')}
                className="text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};
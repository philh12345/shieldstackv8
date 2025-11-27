import React from 'react';
import { Shield, Lock, Eye, Server, Cloud, Key } from 'lucide-react';

export const SecurityBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 opacity-60" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgb(59 130 246 / 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(59 130 246 / 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating Security Icons */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Shield className="h-16 w-16 text-blue-600" />
      </div>
      
      <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Lock className="h-12 w-12 text-blue-500" />
      </div>
      
      <div className="absolute bottom-40 left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Cloud className="h-20 w-20 text-blue-600" />
      </div>
      
      <div className="absolute top-60 right-40 animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
        <Eye className="h-14 w-14 text-blue-500" />
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
        <Server className="h-16 w-16 text-blue-600" />
      </div>
      
      <div className="absolute top-1/3 left-1/4 animate-float opacity-20" style={{ animationDelay: '2.5s' }}>
        <Key className="h-12 w-12 text-blue-500" />
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-scan" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Hexagon Pattern */}
      <svg className="absolute top-0 right-0 w-1/2 h-1/2 opacity-5" viewBox="0 0 100 100">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-600" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#hexagons)" />
      </svg>

      {/* Binary Code Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-600 text-xs font-mono"
            style={{
              left: `${i * 5}%`,
              animation: `scan-line ${3 + i * 0.2}s linear infinite`,
              animationDelay: `${i * 0.1}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
    </div>
  );
};
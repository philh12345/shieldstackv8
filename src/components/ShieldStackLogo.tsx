import React from 'react';

interface ShieldStackLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ShieldStackLogo: React.FC<ShieldStackLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top chevron - Blue */}
        <path
          d="M50 5 L90 25 L90 45 L50 25 L10 45 L10 25 Z"
          fill="#3B82F6"
          stroke="#2563EB"
          strokeWidth="2"
        />
        
        {/* Middle chevron - Darker Blue */}
        <path
          d="M50 45 L90 65 L90 85 L50 65 L10 85 L10 65 Z"
          fill="#2563EB"
          stroke="#1D4ED8"
          strokeWidth="2"
        />
        
        {/* Bottom chevron - Navy (same height as others: 20 units) */}
        <path
          d="M50 85 L90 105 L90 125 L50 105 L10 125 L10 105 Z"
          fill="#1E40AF"
          stroke="#1E3A8A"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export const ShieldStackLogoBox: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  return <ShieldStackLogo size={size} />;
};
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-black/5 ${className}`}>
      {children}
    </div>
  );
}

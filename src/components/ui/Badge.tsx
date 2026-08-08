import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold';
  
  const variants = {
    primary: 'bg-jb-navy text-white',
    secondary: 'bg-jb-sand text-jb-navy',
    accent: 'bg-jb-gold-deep text-white',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

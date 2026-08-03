import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-jb-navy text-white hover:bg-jb-gold-deep focus:ring-jb-navy shadow-sm hover:shadow',
    secondary: 'bg-jb-sand text-jb-navy hover:bg-jb-white-warm focus:ring-jb-sand shadow-sm',
    outline: 'border border-jb-navy text-jb-navy hover:bg-jb-navy hover:text-white focus:ring-jb-navy',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

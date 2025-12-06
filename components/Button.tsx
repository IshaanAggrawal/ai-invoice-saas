import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = "rounded-full px-6 py-2 font-medium transition-colors";
  
  const variantClasses = variant === 'primary' 
    ? "bg-[#EC4899] text-white hover:opacity-90" 
    : "border border-[#EC4899] text-[#EC4899] hover:bg-[#EC4899] hover:text-white";
  
  const classes = `${baseClasses} ${variantClasses} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
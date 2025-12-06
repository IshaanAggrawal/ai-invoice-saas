import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'pink' | 'green';
  children: React.ReactNode;
}

export default function Badge({ 
  variant = 'pink', 
  children, 
  className = '', 
  ...props 
}: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
  
  const variantClasses = variant === 'pink' 
    ? "bg-[#FDF2F8] text-[#DB2777]" 
    : "bg-[#F0FDF4] text-[#16A34A]";
  
  const classes = `${baseClasses} ${variantClasses} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
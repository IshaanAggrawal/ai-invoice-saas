import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = '', ...props }: CardProps) {
  const classes = `bg-white rounded-2xl shadow-lg ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
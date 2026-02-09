import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-cinzel font-bold transition-all duration-300 uppercase tracking-widest text-sm relative overflow-hidden group";
  
  const variants = {
    primary: "bg-royal-red text-white border border-royal-red hover:bg-royal-redDark hover:border-royal-gold shadow-[0_0_15px_rgba(114,14,30,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    outline: "bg-transparent text-royal-gold border border-royal-gold hover:bg-royal-gold hover:text-royal-purpleDark"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};
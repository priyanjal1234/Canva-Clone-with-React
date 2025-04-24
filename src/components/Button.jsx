import React from 'react';

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50';
  
  const variantClasses = {
    default: 'bg-purple-700 hover:bg-purple-800 text-white',
    outline: 'border border-purple-700 text-purple-700 hover:bg-purple-50',
    secondary: 'bg-teal-500 hover:bg-teal-600 text-white',
  };
  
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import { cn } from '@/lib/utils';

interface QuizButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'negative';
  className?: string;
  icon?: string;
}

const QuizButton: React.FC<QuizButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  icon
}) => {
  const baseStyle = "quiz-button";
  
  const variantStyles = {
    'primary': 'bg-dating-primary hover:bg-dating-primary/90',
    'secondary': 'bg-dating-secondary hover:bg-dating-secondary/90',
    'negative': 'bg-gray-500 hover:bg-gray-600'
  };
  
  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyle,
        variantStyles[variant],
        className,
        'animate-fade-in'
      )}
    >
      <span className="flex items-center justify-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default QuizButton;

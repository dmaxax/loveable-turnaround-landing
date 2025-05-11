
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
  const baseStyle = "quiz-button border border-white/20";
  
  const variantStyles = {
    'primary': 'bg-primary/80 hover:bg-primary/90 shadow-glow-pink border-primary/40',
    'secondary': 'bg-secondary/80 hover:bg-secondary/90 shadow-glow border-secondary/40',
    'negative': 'bg-muted hover:bg-muted/90 text-gray-300 border-white/10'
  };
  
  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyle,
        variantStyles[variant],
        className,
        'animate-fade-in backdrop-blur-sm'
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

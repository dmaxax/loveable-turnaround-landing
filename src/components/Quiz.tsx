
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import FinalStep from './steps/FinalStep';
import Footer from './Footer';

const Quiz: React.FC = () => {
  const { currentStep } = useQuiz();
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 'final':
        return <FinalStep />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="quiz-container bg-opacity-90 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-secondary shadow-glow"></div>
      
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-center px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/70 shadow-glow">
        <span className="text-accent text-shadow-blue">Late Night</span> 
        <span className="mx-1">•</span> 
        <span className="text-primary text-shadow-pink">Chat</span>
      </div>
      
      {renderStep()}
      <Footer />
    </div>
  );
};

export default Quiz;

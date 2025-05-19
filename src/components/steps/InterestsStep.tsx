
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const InterestsStep: React.FC = () => {
  const { setCurrentStep } = useQuiz();

  const handleSelection = () => {
    setCurrentStep('final');
  };

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={5} />
      <h1 className="quiz-header">👀 What are you looking for tonight?</h1>
      <p className="quiz-subheader">Be honest. Your matches will depend on what you choose.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleSelection} className="bg-pink-400 hover:bg-pink-500" icon="💬">Long flirty chat</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-purple-500 hover:bg-purple-600" icon="💘">Serious Relationship</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-red-500 hover:bg-red-600" icon="🔥">One Night Sex</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-blue-500 hover:bg-blue-600" icon="📸">See Nudes</QuizButton>
      </div>
    </div>
  );
};

export default InterestsStep;

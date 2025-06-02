
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
      <h1 className="quiz-header">💭 What are you hoping to find here?</h1>
      <p className="quiz-subheader">Be honest about what you're looking for. It helps us match you better.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleSelection} className="bg-pink-400 hover:bg-pink-500" icon="💬">Great conversation</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-purple-500 hover:bg-purple-600" icon="💕">Serious relationship</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-blue-500 hover:bg-blue-600" icon="🎉">Fun and casual</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-green-500 hover:bg-green-600" icon="🌟">See what happens</QuizButton>
      </div>
    </div>
  );
};

export default InterestsStep;

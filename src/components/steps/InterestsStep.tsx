
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
      <h1 className="quiz-header">💭 Wonach suchst du hier?</h1>
      <p className="quiz-subheader">Sei ehrlich darüber, was du suchst. Es hilft uns, dich besser zu matchen.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleSelection} className="bg-pink-400 hover:bg-pink-500" icon="💬">Langen flirtenden Chat</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-purple-500 hover:bg-purple-600" icon="💕">Ernsthafte Beziehung</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-blue-500 hover:bg-blue-600" icon="🔥">One Night Sex</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-green-500 hover:bg-green-600" icon="👀">Nacktbilder sehen</QuizButton>
      </div>
    </div>
  );
};

export default InterestsStep;

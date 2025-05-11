
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const Step4: React.FC = () => {
  const { setCurrentStep } = useQuiz();

  const handleSelection = () => {
    setCurrentStep(5);
  };

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={4} />
      <h1 className="quiz-header">🔮 There's always someone awake… what vibe are you chasing tonight?</h1>
      <p className="quiz-subheader">We'll find her, or maybe she'll find you. Depends how you click.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleSelection} className="bg-pink-500 hover:bg-pink-600" icon="💋">Married but bored</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-purple-500 hover:bg-purple-600" icon="💄">Single & teasing</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-gray-700 hover:bg-gray-800 text-white" icon="🖤">Widowed but wild</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-blue-600 hover:bg-blue-700" icon="🔐">Strictly private</QuizButton>
      </div>
    </div>
  );
};

export default Step4;


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
      <h1 className="quiz-header">💕 What kind of connection are you hoping to find?</h1>
      <p className="quiz-subheader">Everyone's looking for something different. What speaks to you?</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleSelection} className="bg-pink-500 hover:bg-pink-600" icon="💝">Someone thoughtful</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-purple-500 hover:bg-purple-600" icon="✨">Someone adventurous</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-blue-600 hover:bg-blue-700" icon="🎯">Someone focused</QuizButton>
        <QuizButton onClick={handleSelection} className="bg-green-600 hover:bg-green-700" icon="🌱">Someone genuine</QuizButton>
      </div>
    </div>
  );
};

export default Step4;

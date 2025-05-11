
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const Step5: React.FC = () => {
  const { setCurrentStep } = useQuiz();

  const handleSelection = () => {
    setCurrentStep('final');
  };

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={5} />
      <h1 className="quiz-header">🎂 One last thing. How old are you?</h1>
      <p className="quiz-subheader">We match based on age and location.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleSelection} icon="🧑">Under 25</QuizButton>
        <QuizButton onClick={handleSelection} icon="🧔">25–34</QuizButton>
        <QuizButton onClick={handleSelection} icon="👨">35–44</QuizButton>
        <QuizButton onClick={handleSelection} icon="🧓">45–54</QuizButton>
        <QuizButton onClick={handleSelection} icon="🧠">55+</QuizButton>
      </div>
    </div>
  );
};

export default Step5;

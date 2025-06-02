
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const Step2: React.FC = () => {
  const { setCurrentStep, turnaroundState, setTurnaroundState } = useQuiz();

  const handleYes = () => {
    setCurrentStep(3);
  };

  const handleNo = () => {
    setTurnaroundState(2, 'turnaround');
  };

  const handleTurnaroundYes = () => {
    setCurrentStep(3);
  };

  if (turnaroundState[2] === 'turnaround') {
    return (
      <div className="quiz-content animate-fade-in">
        <CatImage index={2} />
        <h1 className="quiz-header">She appreciates confidence and knows what she wants.</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>That sounds perfect</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={2} />
      <h1 className="quiz-header">💬 She sent you a message: "I like people who are direct and honest."</h1>
      <p className="quiz-subheader">Some people take forever to open up. She's not one of them.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="✅">I appreciate honesty</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">I prefer taking it slow</QuizButton>
      </div>
    </div>
  );
};

export default Step2;

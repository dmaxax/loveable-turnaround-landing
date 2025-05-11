
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
        <h1 className="quiz-header">She likes that too — she just wants you to prove it.</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>I'll prove it</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={2} />
      <h1 className="quiz-header">🧠 Do you like it when she takes control?</h1>
      <p className="quiz-subheader">They're not waiting for pickup lines. They say what they want.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="✅">That turns me on</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">I prefer to lead</QuizButton>
      </div>
    </div>
  );
};

export default Step2;

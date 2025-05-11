import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const Step1: React.FC = () => {
  const { setCurrentStep, turnaroundState, setTurnaroundState } = useQuiz();

  const handleYes = () => {
    setCurrentStep(2);
  };

  const handleNo = () => {
    setTurnaroundState(1, 'turnaround');
  };

  const handleTurnaroundYes = () => {
    setCurrentStep(2);
  };

  const handleTurnaroundNo = () => {
    // Even if they select "Leave quietly", we'll move them forward to keep engagement
    setCurrentStep(2);
  };

  if (turnaroundState[1] === 'turnaround') {
    return (
      <div className="quiz-content animate-fade-in">
        <CatImage index={1} />
        <h1 className="quiz-header">She'll be offline in 5 minutes. Want her to think you're shy?</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>Show me anyway</QuizButton>
          <QuizButton onClick={handleTurnaroundNo} variant="negative">Leave quietly</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={1} />
      <h1 className="quiz-header">📲 She texted first. No bios. No filters. Just raw energy.</h1>
      <p className="quiz-subheader">Women here don't match. They message.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="✅">Let me see what she wrote</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">Maybe later</QuizButton>
      </div>
    </div>
  );
};

export default Step1;

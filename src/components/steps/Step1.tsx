
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
        <h1 className="quiz-header">She's looking for someone genuine. Ready to take a chance?</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>Show me her profile</QuizButton>
          <QuizButton onClick={handleTurnaroundNo} variant="negative">Maybe later</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={1} />
      <h1 className="quiz-header">✨ There's someone special online right now. Looking for a real connection.</h1>
      <p className="quiz-subheader">This isn't just another dating app. Find someone who's actually interested in getting to know you.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="✅">I'm interested</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">Not for me</QuizButton>
      </div>
    </div>
  );
};

export default Step1;

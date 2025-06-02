
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const Step3: React.FC = () => {
  const { setCurrentStep, turnaroundState, setTurnaroundState } = useQuiz();

  const handleYes = () => {
    setCurrentStep(4);
  };

  const handleNo = () => {
    setTurnaroundState(3, 'turnaround');
  };

  const handleTurnaroundYes = () => {
    setCurrentStep(4);
  };

  if (turnaroundState[3] === 'turnaround') {
    return (
      <div className="quiz-content animate-fade-in">
        <CatImage index={3} />
        <h1 className="quiz-header">Fair enough. Want to see what she's really like?</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>Show me her profile</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={3} />
      <h1 className="quiz-header">🌟 She just sent: "Are you free to chat tonight?"</h1>
      <p className="quiz-subheader">Sometimes the best connections happen when you least expect them.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="💬">I'd love to chat</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">Not tonight</QuizButton>
      </div>
    </div>
  );
};

export default Step3;

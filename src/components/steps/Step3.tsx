
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
        <h1 className="quiz-header">Then what are you doing here?</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>Okay — show me what she said</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={3} />
      <h1 className="quiz-header">💬 They want moments that burn. You ready?</h1>
      <p className="quiz-subheader">One message can flip the mood. Are you the guy who hesitates?</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="🔥">I'm all in</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">Not my thing</QuizButton>
      </div>
    </div>
  );
};

export default Step3;

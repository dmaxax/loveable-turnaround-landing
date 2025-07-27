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
        <h1 className="quiz-header">Sie schätzt Selbstvertrauen und weiß, was sie will.</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>Das klingt perfekt</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={2} />
      <h1 className="quiz-header">💬 Sie schreibt dir: "Ich mag Menschen, die direkt und ehrlich sind."</h1>
      <p className="quiz-subheader">Manche Menschen brauchen ewig, um sich zu öffnen. Sie gehört nicht dazu.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="✅">Ich schätze Ehrlichkeit</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">Ich gehe lieber langsam vor</QuizButton>
      </div>
    </div>
  );
};

export default Step2;
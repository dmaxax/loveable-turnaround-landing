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
        <h1 className="quiz-header">Sie sucht jemanden Echten. Bereit, eine Chance zu wagen?</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>Zeig mir ihr Profil</QuizButton>
          <QuizButton onClick={handleTurnaroundNo} variant="negative">Vielleicht später</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={1} />
      <h1 className="quiz-header">✨ Jemand Besonderes ist gerade online. Auf der Suche nach echter Verbindung.</h1>
      <p className="quiz-subheader">Das ist nicht nur eine weitere Dating-App. Finde jemanden, der wirklich daran interessiert ist, dich kennenzulernen.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="✅">Ich bin interessiert</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">Nicht für mich</QuizButton>
      </div>
    </div>
  );
};

export default Step1;

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
        <h1 className="quiz-header">In Ordnung. Willst du sehen, wie sie wirklich ist?</h1>
        <div className="w-full space-y-3 mt-6">
          <QuizButton onClick={handleTurnaroundYes}>Zeig mir ihr Profil</QuizButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={3} />
      <h1 className="quiz-header">🌟 Sie schreibt gerade: "Hast du heute Abend Zeit zu chatten?"</h1>
      <p className="quiz-subheader">Manchmal entstehen die besten Verbindungen, wenn man sie am wenigsten erwartet.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={handleYes} icon="💬">Ich würde gerne chatten</QuizButton>
        <QuizButton onClick={handleNo} variant="negative" icon="❌">Heute Abend nicht</QuizButton>
      </div>
    </div>
  );
};

export default Step3;
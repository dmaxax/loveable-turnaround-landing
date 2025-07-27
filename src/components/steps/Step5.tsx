
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const Step5: React.FC = () => {
  const { setCurrentStep, setAgeGroup } = useQuiz();

  const handleSelection = (ageGroup: 'ya' | 'oa') => {
    setAgeGroup(ageGroup);
    setCurrentStep('interests');  // Changed to go to interests step instead of final
  };

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={5} />
      <h1 className="quiz-header">🎂 Alter ist nur eine Zahl, aber es hilft uns, deinen perfekten Partner zu finden. Wie alt bist du?</h1>
      <p className="quiz-subheader">Verschiedene Menschen verbinden sich besser in verschiedenen Lebensphasen. Hilf uns, deine zu finden.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={() => handleSelection('ya')} icon="👶">Unter 20</QuizButton>
        <QuizButton onClick={() => handleSelection('ya')} icon="🧑">21–30</QuizButton>
        <QuizButton onClick={() => handleSelection('oa')} icon="🧔">31–40</QuizButton>
        <QuizButton onClick={() => handleSelection('oa')} icon="👨">41–50</QuizButton>
        <QuizButton onClick={() => handleSelection('oa')} icon="🧓">51–60</QuizButton>
        <QuizButton onClick={() => handleSelection('oa')} icon="🧠">60+</QuizButton>
      </div>
    </div>
  );
};

export default Step5;

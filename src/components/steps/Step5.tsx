
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const Step5: React.FC = () => {
  const { setCurrentStep, setAgeGroup } = useQuiz();

  const handleSelection = (ageGroup: 'ya' | 'oa') => {
    setAgeGroup(ageGroup);
    setCurrentStep('final');
  };

  return (
    <div className="quiz-content animate-fade-in">
      <CatImage index={5} />
      <h1 className="quiz-header">🕰 This chat is old-school. Age sets the tone. How old are you?</h1>
      <p className="quiz-subheader">Some women are into 25. Others wait for 45. Your age = your algorithm.</p>
      <div className="w-full space-y-3 mt-6">
        <QuizButton onClick={() => handleSelection('ya')} icon="🧑">Under 25</QuizButton>
        <QuizButton onClick={() => handleSelection('ya')} icon="🧔">25–34</QuizButton>
        <QuizButton onClick={() => handleSelection('oa')} icon="👨">35–44</QuizButton>
        <QuizButton onClick={() => handleSelection('oa')} icon="🧓">45–54</QuizButton>
        <QuizButton onClick={() => handleSelection('oa')} icon="🧠">55+</QuizButton>
      </div>
    </div>
  );
};

export default Step5;

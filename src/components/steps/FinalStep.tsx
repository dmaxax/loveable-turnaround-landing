
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const FinalStep: React.FC = () => {
  const { resetQuiz } = useQuiz();

  return (
    <div className="quiz-content animate-scale-in">
      <CatImage index={6} />
      <h1 className="quiz-header">
        <span className="text-primary text-shadow-pink">🔓 Access granted.</span> 
        <span className="text-white"> She's online for the next</span> 
        <span className="text-secondary text-shadow-blue"> 9 minutes.</span>
      </h1>
      <p className="quiz-subheader">Open her message before it disappears.</p>
      <div className="w-full mt-6">
        <QuizButton 
          onClick={() => window.location.href = "https://example.com/signup"} 
          className="bg-green-500/90 hover:bg-green-500 text-lg py-4 shadow-glow-green border-green-400/50"
        >
          Open Messages Now
        </QuizButton>
        <div className="text-center mt-4">
          <button 
            onClick={resetQuiz}
            className="text-sm text-gray-400 hover:text-accent transition-colors text-shadow"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;

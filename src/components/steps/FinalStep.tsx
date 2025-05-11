
import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const FinalStep: React.FC = () => {
  const { resetQuiz } = useQuiz();

  return (
    <div className="quiz-content animate-scale-in">
      <CatImage index={6} />
      <h1 className="quiz-header">🔓 Access granted. She's online for the next 9 minutes.</h1>
      <p className="quiz-subheader">Open her message before it disappears.</p>
      <div className="w-full mt-6">
        <QuizButton 
          onClick={() => window.location.href = "https://example.com/signup"} 
          className="bg-green-500/90 hover:bg-green-500 text-lg py-4 shadow-[0_0_12px_rgba(34,197,94,0.4)]"
        >
          Open Messages Now
        </QuizButton>
        <div className="text-center mt-4">
          <button 
            onClick={resetQuiz}
            className="text-sm text-gray-400 hover:text-accent transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;

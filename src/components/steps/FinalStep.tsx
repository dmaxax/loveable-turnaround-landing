
import React, { useEffect } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import QuizButton from '@/components/QuizButton';
import CatImage from '@/components/CatImage';

const FinalStep: React.FC = () => {
  const { resetQuiz, ageGroup, handleSecondOffer, handleBackOffer } = useQuiz();
  
  // Set up back button detection for back offer
  useEffect(() => {
    const handleBackButton = (e: PopStateEvent) => {
      e.preventDefault();
      handleBackOffer();
    };
    
    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handleBackButton);
    
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [handleBackOffer]);
  
  const handlePrimaryClick = () => {
    // Redirect to main offer with age group parameter
    const baseUrl = "https://example.com/signup";
    const params = new URLSearchParams();
    
    if (ageGroup) {
      params.append('sub5', ageGroup);
    }
    
    const url = `${baseUrl}?${params.toString()}`;
    console.log("Redirecting to main offer:", url);
    window.location.href = url;
  };

  return (
    <div className="quiz-content animate-scale-in">
      <CatImage index={6} />
      <h1 className="quiz-header">
        <span className="text-primary text-shadow-pink">✉️ You're in.</span> 
        <span className="text-white"> Her screen just blinked.</span> 
        <span className="text-secondary text-shadow-blue"> She thinks you're someone interesting.</span>
      </h1>
      <p className="quiz-subheader">It's not a match. It's a moment. One message. One night. You ready?</p>
      <div className="w-full mt-6">
        <QuizButton 
          onClick={handlePrimaryClick}
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
        <div className="text-center mt-2">
          <button 
            onClick={handleSecondOffer}
            className="text-sm text-secondary hover:text-accent transition-colors text-shadow-blue"
          >
            Other Available Girls
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;

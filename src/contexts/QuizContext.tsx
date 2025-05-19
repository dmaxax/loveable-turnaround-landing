
import React, { createContext, useContext, useState } from 'react';

export type Step = 1 | 2 | 3 | 4 | 5 | 'interests' | 'final';
export type TurnaroundState = 'initial' | 'turnaround';
export type AgeGroup = 'ya' | 'oa' | null;

interface QuizContextType {
  currentStep: Step;
  turnaroundState: Record<number, TurnaroundState>;
  ageGroup: AgeGroup;
  setCurrentStep: (step: Step) => void;
  setTurnaroundState: (step: number, state: TurnaroundState) => void;
  setAgeGroup: (group: AgeGroup) => void;
  resetQuiz: () => void;
  handleSecondOffer: () => void;
  handleBackOffer: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(null);
  const [turnaroundState, setTurnaroundStateRecord] = useState<Record<number, TurnaroundState>>({
    1: 'initial',
    2: 'initial',
    3: 'initial',
    4: 'initial',
    5: 'initial',
  });

  const setTurnaroundState = (step: number, state: TurnaroundState) => {
    setTurnaroundStateRecord((prev) => ({
      ...prev,
      [step]: state
    }));
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAgeGroup(null);
    setTurnaroundStateRecord({
      1: 'initial',
      2: 'initial',
      3: 'initial',
      4: 'initial',
      5: 'initial',
    });
  };

  // Function to call external script
  const callSecondOfferScript = () => {
    try {
      if (typeof window !== 'undefined' && window.secondoffer) {
        window.secondoffer();
      } else {
        console.log("secondoffer script not found");
      }
    } catch (error) {
      console.error("Error calling secondoffer script:", error);
    }
  };

  // Keitaro tracking functions
  const handleSecondOffer = () => {
    const baseUrl = "https://trk.soulmatesblog.com/M6P464";
    const params = new URLSearchParams();
    
    if (ageGroup) {
      params.append('sub5', ageGroup);
    }
    
    const url = `${baseUrl}?${params.toString()}`;
    console.log("Redirecting to second offer:", url);
    
    // Call the secondoffer script before redirecting
    callSecondOfferScript();
    
    window.location.href = url;
  };

  const handleBackOffer = () => {
    const baseUrl = "https://example.com/back-offer";
    const params = new URLSearchParams();
    
    if (ageGroup) {
      params.append('sub5', ageGroup);
    }
    
    const url = `${baseUrl}?${params.toString()}`;
    console.log("Redirecting to back offer:", url);
    window.location.href = url;
  };

  return (
    <QuizContext.Provider value={{ 
      currentStep, 
      turnaroundState,
      ageGroup,
      setCurrentStep, 
      setTurnaroundState,
      setAgeGroup,
      resetQuiz,
      handleSecondOffer,
      handleBackOffer
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

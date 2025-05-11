
import React, { createContext, useContext, useState } from 'react';

export type Step = 1 | 2 | 3 | 4 | 5 | 'final';
export type TurnaroundState = 'initial' | 'turnaround';

interface QuizContextType {
  currentStep: Step;
  turnaroundState: Record<number, TurnaroundState>;
  setCurrentStep: (step: Step) => void;
  setTurnaroundState: (step: number, state: TurnaroundState) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
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
    setTurnaroundStateRecord({
      1: 'initial',
      2: 'initial',
      3: 'initial',
      4: 'initial',
      5: 'initial',
    });
  };

  return (
    <QuizContext.Provider value={{ 
      currentStep, 
      turnaroundState, 
      setCurrentStep, 
      setTurnaroundState,
      resetQuiz
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

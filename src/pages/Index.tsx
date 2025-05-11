
import React from 'react';
import { QuizProvider } from '@/contexts/QuizContext';
import Quiz from '@/components/Quiz';
import { Toaster } from '@/components/ui/toaster';

const Index: React.FC = () => {
  React.useEffect(() => {
    // Update the document title
    document.title = "Dating Quiz | Find Your Match";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
      <Toaster />
    </div>
  );
};

export default Index;


import React from 'react';
import { QuizProvider } from '@/contexts/QuizContext';
import Quiz from '@/components/Quiz';
import { Toaster } from '@/components/ui/toaster';

const Index: React.FC = () => {
  React.useEffect(() => {
    // Update the document title
    document.title = "Late Night Chat | Find Your Match";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1218]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
      <Toaster />
    </div>
  );
};

export default Index;

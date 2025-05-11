
import React from 'react';

interface CatImageProps {
  index: number;
}

const CatImage: React.FC<CatImageProps> = ({ index }) => {
  // Placeholder for cat images - in a real app, these would be actual image files
  const getImageUrl = (idx: number) => {
    // Using placeholder cat images from placekitten.com
    return `https://placekitten.com/400/${300 + (idx * 10)}`;
  };

  return (
    <div className="quiz-image relative overflow-hidden">
      <img 
        src={getImageUrl(index)} 
        alt={`Cute cat ${index}`}
        className="object-cover w-full h-full rounded-xl border-2 border-accent/30 shadow-glow"
      />
      <div className="absolute bottom-2 right-2 bg-black/40 text-xs text-white/70 px-2 py-1 rounded-lg backdrop-blur-sm">
        Online Now
      </div>
    </div>
  );
};

export default CatImage;

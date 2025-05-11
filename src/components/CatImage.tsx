
import React from 'react';

interface CatImageProps {
  index: number;
}

const CatImage: React.FC<CatImageProps> = ({ index }) => {
  // Use the uploaded image for all steps
  const imageUrl = "public/lovable-uploads/d3ec0165-3492-44d7-b077-d41eee42cbbe.png";

  return (
    <div className="quiz-image relative overflow-hidden">
      <img 
        src={imageUrl} 
        alt={`Profile ${index}: ${getProfileReference(index)}`}
        className="object-cover w-40 h-40 rounded-xl border-2 border-accent/30 shadow-glow"
      />
      <div className="absolute bottom-2 right-2 bg-black/40 text-xs text-white/70 px-2 py-1 rounded-lg backdrop-blur-sm">
        Online Now
      </div>
    </div>
  );
};

// Get reference descriptions for each profile image
const getProfileReference = (index: number): string => {
  const references = [
    "Mystery Profile",
    "Texting First",
    "Takes Control",
    "Moments That Burn",
    "Tonight's Choice",
    "Age Verification",
    "Access Granted"
  ];
  
  return index >= 0 && index < references.length ? references[index] : references[0];
};

export default CatImage;

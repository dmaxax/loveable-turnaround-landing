
import React from 'react';

interface CatImageProps {
  index: number;
}

const CatImage: React.FC<CatImageProps> = ({ index }) => {
  // Use the uploaded image for all steps
  const imageUrl = "public/lovable-uploads/d3ec0165-3492-44d7-b077-d41eee42cbbe.png";

  return (
    <div className="quiz-image relative overflow-hidden neon-border">
      <img 
        src={imageUrl} 
        alt={`Profile ${index}: ${getProfileReference(index)}`}
        className="object-cover w-40 h-40 rounded-xl border-2 border-accent/50"
      />
      <div className="absolute bottom-2 right-2 bg-black/60 text-xs text-white/90 px-2 py-1 rounded-lg backdrop-blur-sm border border-primary/40 shadow-glow-pink">
        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
        Online Now
      </div>
      <div className="absolute top-2 right-2 bg-black/50 text-[10px] text-white/70 px-1.5 py-0.5 rounded backdrop-blur-sm border border-accent/30">
        A/S/L?
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

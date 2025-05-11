
import React from 'react';

interface CatImageProps {
  index: number;
}

const CatImage: React.FC<CatImageProps> = ({ index }) => {
  // Cat images with specific references for each step
  const getImageUrl = (idx: number) => {
    // Map index to specific cat images with references
    const catImages = [
      "https://placekitten.com/400/300", // Default fallback
      "https://placekitten.com/420/320", // Step 1: Texting cat
      "https://placekitten.com/410/330", // Step 2: In control cat
      "https://placekitten.com/430/340", // Step 3: Ready cat
      "https://placekitten.com/440/350", // Step 4: Tonight's cat
      "https://placekitten.com/425/335", // Step 5: Age cat
      "https://placekitten.com/450/360", // Final step: Access granted cat
    ];
    
    // Return the appropriate cat image or fallback to first image
    return idx >= 0 && idx < catImages.length ? catImages[idx] : catImages[0];
  };

  return (
    <div className="quiz-image relative overflow-hidden">
      <img 
        src={getImageUrl(index)} 
        alt={`Cat ${index}: ${getCatReference(index)}`}
        className="object-cover w-full h-full rounded-xl border-2 border-accent/30 shadow-glow"
      />
      <div className="absolute bottom-2 right-2 bg-black/40 text-xs text-white/70 px-2 py-1 rounded-lg backdrop-blur-sm">
        Online Now
      </div>
    </div>
  );
};

// Get reference descriptions for each cat image
const getCatReference = (index: number): string => {
  const references = [
    "Mystery Cat",
    "Texting First Cat",
    "Takes Control Cat",
    "Moments That Burn Cat",
    "Tonight's Choice Cat",
    "Age Verification Cat",
    "Access Granted Cat"
  ];
  
  return index >= 0 && index < references.length ? references[index] : references[0];
};

export default CatImage;


import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-2 border-t border-accent/30 mt-2 neon-border shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center text-xs text-gray-400">
          <div>
            <span className="font-bold text-primary text-shadow-pink">18+</span> | 
            <span className="mx-1">Anonymous</span> | 
            <span className="text-secondary text-shadow-blue">Paid Features</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

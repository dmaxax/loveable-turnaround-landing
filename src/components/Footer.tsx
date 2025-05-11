
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-2 border-t border-accent/30 mt-2 neon-border shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="mb-1 md:mb-0">
            <span className="font-bold text-primary text-shadow-pink">18+</span> | 
            <span className="mx-1">Anonymous</span> | 
            <span className="text-secondary text-shadow-blue">Paid Features</span>
          </div>
          <div className="flex items-center">
            <a href="#" className="hover:text-accent mr-2 transition-colors text-shadow">Support</a>
            <span className="text-xs opacity-70 italic">Nivroku</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

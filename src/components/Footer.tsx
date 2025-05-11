
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-2 border-t border-border/40 mt-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="mb-1 md:mb-0">
            <span className="font-bold text-primary">18+</span> | Anonymous | Paid Features
          </div>
          <div className="flex items-center">
            <a href="#" className="hover:text-accent mr-2 transition-colors">Support</a>
            <span className="text-xs opacity-70">Nivroku</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

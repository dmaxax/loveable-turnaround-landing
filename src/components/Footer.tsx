
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-2 md:mb-0">
            <span className="font-bold">18+</span> | 100% Anonymous | Paid Features Inside
          </div>
          <div className="flex items-center">
            <a href="#" className="hover:text-dating-primary mr-4">Support</a>
            <span className="text-xs">Made with Nivroku Traffic</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

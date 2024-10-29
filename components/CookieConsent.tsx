import Image from 'next/image';
import { useState } from 'react';

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
      >
        <Image
          src="/images/cookie-icon.png"
          alt="Cookie Settings"
          width={40}
          height={40}
          className="opacity-80 hover:opacity-100 transition-opacity duration-200"
        />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-72">
          <h3 className="font-semibold mb-2">Cookie Settings</h3>
          <p className="text-sm text-gray-600 mb-4">
            We use cookies to enhance your browsing experience.
          </p>
          <div className="flex justify-end">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;


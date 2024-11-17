// src/components/Layout/EmailModal.tsx

import React, { useState } from 'react';
import { submitEmailToGithub } from '../../api/submitEmail';

interface EmailModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await submitEmailToGithub(email);
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit email:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!showModal) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center transition-opacity duration-300"
      onClick={() => setShowModal(false)}
    >
      <div 
        className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {!isSubmitted ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Please Submit Your Email to Get Wallpapers
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="123456@gmail.com"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Go!
                </button>
              </div>
            </form>
            <p className="mt-4 text-gray-600 text-sm">
              We'd send that wallpaper to your Email soon!
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Hi, {email}
            </h2>
            <p className="text-gray-600 mb-4">
              You've Successfully submitted your email address
            </p>
            <div className="space-y-2">
              <p className="text-purple-600 font-medium">
                Wanna High-Res wallpaper?
              </p>
              <p className="text-purple-600 font-medium">
                Register and get it!
              </p>
              <button
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
                onClick={() => window.open("https://pixai.art/sign-up", "_blank", "noopener,noreferrer")}
              >
                Apply Now - It's Free
                <span className="bg-white text-purple-600 px-2 py-0.5 rounded text-sm">
                  Go!
                </span>
              </button>
            </div>
          </div>
        )}

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => setShowModal(false)}
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EmailModal;  // This is important!
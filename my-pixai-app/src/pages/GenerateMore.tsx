import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

export const GenerateMore = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const galleryImages = [
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Main Content */}
      <div className="bg-purple-50 p-6">
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 text-sm"
          >
            ← Generate More
          </button>
        </div>

        {/* Clickable Main Image */}
        <div className="max-w-sm mx-auto mb-8">
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="aspect-[5/6] bg-gray-100 flex items-center justify-center">
              <img 
                src="/api/placeholder/400/600" 
                alt="Generated art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      {/* First Register Button - Single Line */}
      <div className="max-w-md mx-auto">
        <button className="w-full bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors text-base font-medium whitespace-nowrap">
          Register PixAI for High-Res Wallpaper
        </button>
      </div>
      </div>

      {/* Bottom Section with Black Background */}
      <div className="bg-black mt-auto p-8">
        {/* Second Register Button - Smaller */}
        <div className="max-w-xs mx-auto mb-4">
          <button className="w-full bg-purple-700 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
            Register to Unlock Even More!
          </button>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="overflow-x-auto">
          <div className="flex gap-2 pb-4 px-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="flex-none w-32 h-32 bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center transition-opacity duration-300"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          {/* Modal Content */}
          <div 
            className="p-4 max-w-2xl w-full" 
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
            }}
          >
            {/* Large Image */}
            <div className="relative mb-6">
              <img 
                src="/api/placeholder/800/1200" 
                alt="Generated art large"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Buttons Container */}
            <div className="flex gap-4 justify-center">
              <button className="bg-pink-500 text-white py-2 px-8 rounded-full hover:bg-indigo-700 transition-colors">
                Register for PixAI
              </button>
              <button 
                className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Download image"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  // Download logic here
                }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
              </button>
            </div>

            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                setShowModal(false);
              }}
              aria-label="Close modal"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
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
      )}
    </div>
  );
};
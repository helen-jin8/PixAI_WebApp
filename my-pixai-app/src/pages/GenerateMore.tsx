import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import EmailModal from '../components/Layout/EmailModal';

export const GenerateMore: React.FC = () => {  // Changed back to export const
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);

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

      {/* Email Modal */}
      <EmailModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-4">
      {/* Purple circular loading animation */}
      <div className="mb-8">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
      
      {/* Loading text */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-medium text-gray-800">Creating Your Wallpaper</h2>
        <p className="text-sm text-gray-600">This might take a few moments...</p>
      </div>
      
      {/* Loading progress bar */}
      <div className="w-64 h-2 bg-purple-100 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-purple-500 rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

export default LoadingPage;

// Add this to your global CSS or style block
const styles = `
@keyframes loading {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
`;

// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);
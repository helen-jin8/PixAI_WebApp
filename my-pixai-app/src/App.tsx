import { useState } from 'react';

const STYLE_OPTIONS = Array(4).fill("Mystic Forest Night");
const EXAMPLE_IMAGES = Array(9).fill({
  title: "Genshin",
  src: "/placeholder-image.jpg" // We'll use a placeholder for now
});

const App = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">
            P
          </div>
          <h1 className="text-lg font-medium">
            From Anime Dream to Your Screen
          </h1>
        </div>
        <p className="text-sm text-gray-600">-- Create Unique Wall Paper</p>
      </header>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {EXAMPLE_IMAGES.map((image, index) => (
          <div key={index} className="aspect-square rounded-xl overflow-hidden bg-white p-1 shadow-sm">
            <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col items-center justify-between p-2">
              <div className="w-full h-3/4 bg-blue-100 rounded-lg" />
              <span className="text-xs text-center mt-1">{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Style Selection */}
      <div className="space-y-2 mb-6">
        {STYLE_OPTIONS.map((style, index) => (
          <button
            key={index}
            onClick={() => setSelectedStyle(style)}
            className={`w-full py-3 px-4 rounded-xl text-center 
              ${selectedStyle === style 
                ? 'bg-white shadow-sm border-2 border-purple-300' 
                : 'bg-white shadow-sm hover:border-2 hover:border-purple-200'
              }`}
          >
            {style}
          </button>
        ))}
      </div>

      {/* Generate Button */}
      <button 
        className="w-full py-3 px-4 rounded-xl bg-purple-400 text-white font-medium hover:bg-purple-500 transition-colors"
        onClick={() => console.log('Generate with style:', selectedStyle)}
      >
        Generate
      </button>
    </div>
  );
};

export default App;
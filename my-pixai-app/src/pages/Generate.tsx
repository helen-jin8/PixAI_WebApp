import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Types for our selections
type GridSelection = {
  id: number;
  title: string;
};

type StyleSelection = {
  id: number;
  name: string;
};

export const Generate = () => {
  // State for selections
  const [selectedGridItem, setSelectedGridItem] = useState<GridSelection | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<StyleSelection | null>(null);
  const navigate = useNavigate(); 


  // Check if both selections are made
  const isGenerateEnabled = selectedGridItem !== null && selectedStyle !== null;

  // Grid items data
  const gridItems: GridSelection[] = Array(9).fill(null).map((_, index) => ({
    id: index,
    title: "Genshin"
  }));

  // Style options data
  const styleOptions: StyleSelection[] = Array(4).fill(null).map((_, index) => ({
    id: index,
    name: "Mystic Forest Night"
  }));

  // Handle generate click - prepare data for backend
  const handleGenerate = () => {
    if (!isGenerateEnabled) return;

    // This is where to send data to backend
    const dataToSend = {
      selectedGrid: selectedGridItem,
      selectedStyle: selectedStyle
    };
    
    console.log('Data to send to backend:', dataToSend);
    // TODO: Add API call here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Example:
    // await generateWallpaper(dataToSend);
    navigate('/generate/more');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
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

      {/* Selection Status */}
      <div className="mb-4 text-sm text-gray-600">
        <p>Step 1: {selectedGridItem ? '✅ Selected grid style' : '⭕ Select a grid style'}</p>
        <p>Step 2: {selectedStyle ? '✅ Selected theme style' : '⭕ Select a theme style'}</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {gridItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedGridItem(item)}
            className={`aspect-square rounded-xl overflow-hidden bg-white p-1 shadow-sm 
              ${selectedGridItem?.id === item.id ? 'ring-2 ring-purple-500' : ''}
              hover:ring-2 hover:ring-purple-300 transition-all`}
          >
            <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col items-center justify-between p-2">
              <div className="w-full h-3/4 bg-blue-100 rounded-lg" />
              <span className="text-xs text-center mt-1">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Style Selection */}
      <div className="space-y-2 mb-6">
        {styleOptions.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style)}
            className={`w-full py-3 px-4 rounded-xl text-center transition-all
              ${selectedStyle?.id === style.id
                ? 'bg-white shadow-sm ring-2 ring-purple-500' 
                : 'bg-white shadow-sm hover:ring-2 hover:ring-purple-300'
              }`}
          >
            {style.name}
          </button>
        ))}
      </div>

      {/* Generate Button */}
      <button 
        className={`w-full py-3 px-4 rounded-xl font-medium transition-colors
          ${isGenerateEnabled 
            ? 'bg-purple-500 text-white hover:bg-purple-600' 
            : 'bg-purple-200 text-purple-400 cursor-not-allowed'}`}
        onClick={handleGenerate}
        disabled={!isGenerateEnabled}
      >
        Generate
      </button>
    </div>
  );
};
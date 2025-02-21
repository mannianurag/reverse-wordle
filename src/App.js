import React from "react";

function App() {
  const grid = Array.from({ length: 5 }, () => Array(5).fill(""));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Reverse Wordle</h1>
      <div className="grid grid-cols-5 gap-2 border-2 border-gray-500 p-2">
        {grid.flat().map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center text-lg font-bold bg-white"
          >
            {/* Placeholder for letters */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

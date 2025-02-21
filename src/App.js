import React from "react";

function App() {
  const grid = Array.from({ length: 5 }, () => Array(5).fill(""));

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Reverse Wordle</h1>
      <div className="grid grid-rows-5 gap-2">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((_, colIndex) => (
              <div
                key={colIndex}
                className="w-12 h-12 flex items-center justify-center text-lg font-bold border border-black bg-gray-200"
              >
                {/* Placeholder for letters */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

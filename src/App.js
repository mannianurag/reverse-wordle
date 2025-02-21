import React from "react";

function App() {
  const grid = Array(5).fill(Array(5).fill("?"));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-4">
      <h1 className="text-2xl font-bold mb-4 border-4 border-green-500">Reverse Wordle</h1>
      
      <div className="border-4 border-red-500 p-2">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 border-2 border-blue-500">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="w-12 h-12 border-2 border-black flex items-center justify-center text-lg font-bold bg-yellow-300"
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

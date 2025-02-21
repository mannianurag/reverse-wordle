import React from "react";
import "./index.css"; // Ensure Tailwind is included

const GameGrid = () => {
  const grid = Array.from({ length: 5 }, () => Array(5).fill(""));

  return (
    <div className="flex flex-col gap-2 p-4 items-center">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((_, colIndex) => (
            <div
              key={colIndex}
              className="w-12 h-12 flex items-center justify-center text-lg font-bold border border-black bg-gray-200"
              style={{ width: "48px", height: "48px", border: "2px solid black" }}
            >
              {/* Placeholder for letters */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Reverse Wordle</h1>
      <GameGrid />
    </div>
  );
}

export default App;

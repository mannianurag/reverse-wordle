import React from "react";
import "./index.css"; // Ensure Tailwind is included
import GameGrid from "./GameGrid";

const GameGrid = () => {
  const grid = Array.from({ length: 5 }, () => Array(5).fill(""));

  return (
    <div className="p-4 flex flex-col gap-2 items-center">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-2">
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
  );
};

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Reverse Wordle</h1>
      <GameGrid />
    </div>
  );
}

export default App;

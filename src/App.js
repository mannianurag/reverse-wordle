import React from "react";

const GameGrid = () => {
  const grid = Array(5).fill(Array(5).fill(""));

  return (
    <div className="flex flex-col gap-2 p-4 items-center">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((_, colIndex) => (
            <div
              key={colIndex}
              className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center text-lg font-bold"
            >
              {/* Placeholder for letters */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;

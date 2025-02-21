import React from "react";

function App() {
  const grid = Array.from({ length: 5 }, () => Array(5).fill(""));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-4">
      <h1 className="text-2xl font-bold mb-4">Reverse Wordle</h1>
      <div className="grid grid-cols-5 gap-1 border-4 border-red-500 bg-white p-2">
        {grid.flat().map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 border-2 border-blue-500 flex items-center justify-center text-lg font-bold bg-yellow-300"
          >
            ?
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

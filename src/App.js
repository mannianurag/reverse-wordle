import React, { useState } from "react";
import "./App.css";

const GRID_SIZE = 5;

function App() {
  const [grid, setGrid] = useState(
    Array(GRID_SIZE).fill(Array(GRID_SIZE).fill(""))
  );

  const handleInputChange = (row, col, value) => {
    if (value.length > 1) return; // Allow only one character

    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value.toUpperCase() : cell
      )
    );

    setGrid(newGrid);

    // Move focus to the next cell
    const nextCol = col + 1;
    const nextRow = row + (nextCol >= GRID_SIZE ? 1 : 0);
    const nextCell = document.getElementById(`cell-${nextRow}-${nextCol % GRID_SIZE}`);
    if (nextCell) nextCell.focus();
  };

  return (
    <div className="container">
      <h1>Reverse Wordle</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                id={`cell-${rowIndex}-${colIndex}`}
                className="cell"
                type="text"
                maxLength="1"
                value={cell}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

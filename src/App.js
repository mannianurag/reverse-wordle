import React, { useState, useEffect } from "react";
import "./App.css";

const GRID_SIZE = 5;
const VALID_WORDS = ["APPLE", "HOUSE", "GHOST", "PLANE", "BRICK"]; // Replace with API later

function App() {
  const [grid, setGrid] = useState(
    Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(""))
  );

  const [rowStatus, setRowStatus] = useState(Array(GRID_SIZE).fill(null));

  const handleInputChange = (row, col, value) => {
    if (!/^[a-zA-Z]$/.test(value)) return;

    // Deep copy grid
    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = value.toUpperCase();
    setGrid(newGrid);

    // Move focus to the next cell
    const nextCol = col + 1;
    const nextRow = row + (nextCol >= GRID_SIZE ? 1 : 0);
    const nextCell = document.getElementById(`cell-${nextRow}-${nextCol % GRID_SIZE}`);
    if (nextCell) nextCell.focus();
  };

  useEffect(() => {
    setRowStatus(grid.map((row) => (row.join("").length === GRID_SIZE ? VALID_WORDS.includes(row.join("")) : null)));
  }, [grid]);

  return (
    <div className="container">
      <h1>Reverse Wordle</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className={`row ${rowStatus[rowIndex] === false ? "invalid" : rowStatus[rowIndex] === true ? "valid" : ""}`}>
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

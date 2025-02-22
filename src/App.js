import React, { useState } from "react";
import "./App.css";

const GRID_SIZE = 5;
const VALID_WORDS = ["APPLE", "HOUSE", "GHOST", "PLANE", "BRICK"]; // Replace with API later

function App() {
  const [grid, setGrid] = useState(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(""))
  );
  const [rowStatus, setRowStatus] = useState(Array(GRID_SIZE).fill(null));

  const handleInputChange = (row, col, value) => {
    if (!/^[a-zA-Z]$/.test(value)) return;

    const newGrid = grid.map((r) => [...r]); // Deep copy grid
    newGrid[row][col] = value.toUpperCase();
    setGrid(newGrid);

    // Move focus to the next cell
    const nextCol = col + 1;
    const nextRow = row + (nextCol >= GRID_SIZE ? 1 : 0);
    const nextCell = document.getElementById(
      `cell-${nextRow}-${nextCol % GRID_SIZE}`
    );
    if (nextCell) nextCell.focus();
  };

  const handleKeyDown = (row, col, event) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      const newGrid = grid.map((r) => [...r]); // Deep copy grid
      if (newGrid[row][col]) {
        newGrid[row][col] = "";
      } else if (col > 0 || row > 0) {
        const prevCol = col === 0 ? GRID_SIZE - 1 : col - 1;
        const prevRow = col === 0 ? row - 1 : row;
        newGrid[prevRow][prevCol] = "";
        const prevCell = document.getElementById(
          `cell-${prevRow}-${prevCol}`
        );
        if (prevCell) prevCell.focus();
      }
      setGrid(newGrid);
    }
  };

  const validateRow = (rowIndex) => {
    const word = grid[rowIndex].join(""); // Get full word from row
    const isValid = VALID_WORDS.includes(word);
    setRowStatus((prev) => {
      const newStatus = [...prev];
      newStatus[rowIndex] = isValid;
      return newStatus;
    });
  };

  return (
    <div className="container">
      <h1>Reverse Wordle</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`row ${rowStatus[rowIndex] === false ? "invalid" : ""}`}
          >
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                id={`cell-${rowIndex}-${colIndex}`}
                className="cell"
                type="text"
                maxLength="1"
                value={cell}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                onKeyDown={(e) => handleKeyDown(rowIndex, colIndex, e)}
                onBlur={() => validateRow(rowIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

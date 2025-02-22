import React, { useState } from "react";
import "./App.css";

const GRID_SIZE = 5;
const VALID_WORDS = ["APPLE", "HOUSE", "GHOST", "PLANE", "BRICK"]; // Replace with API later

function App() {
  const [grid, setGrid] = useState(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(""))
  );
  const [rowStatus, setRowStatus] = useState(Array(GRID_SIZE).fill(null));
  const [currentRow, setCurrentRow] = useState(0);
  const [version] = useState("1.1");

  const handleInputChange = (row, col, value) => {
    if (!/^[a-zA-Z]$/.test(value)) return;
    if (row !== currentRow) return; // Prevent typing in future rows

    const newGrid = grid.map((r) => [...r]); // Deep copy grid
    newGrid[row][col] = value.toUpperCase();
    setGrid(newGrid);

    // Move focus to the next cell in the same row
    const nextCol = col + 1;
    if (nextCol < GRID_SIZE) {
      const nextCell = document.getElementById(`cell-${row}-${nextCol}`);
      if (nextCell) nextCell.focus();
    }
  };

  const handleKeyDown = (row, col, event) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      const newGrid = grid.map((r) => [...r]); // Deep copy grid
      if (newGrid[row][col]) {
        newGrid[row][col] = "";
      } else if (col > 0) {
        const prevCol = col - 1;
        newGrid[row][prevCol] = "";
        const prevCell = document.getElementById(`cell-${row}-${prevCol}`);
        if (prevCell) prevCell.focus();
      }
      setGrid(newGrid);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      validateRow(row);
    }
  };

  const validateRow = (rowIndex) => {
    const word = grid[rowIndex].join(""); // Get full word from row
    if (word.length === GRID_SIZE) { // Only validate when row is full
      const isValid = VALID_WORDS.includes(word);
      setRowStatus((prev) => {
        const newStatus = [...prev];
        newStatus[rowIndex] = isValid;
        return newStatus;
      });
      if (isValid && rowIndex < GRID_SIZE - 1) {
        setCurrentRow(rowIndex + 1); // Move to next row only if valid
      }
    }
  };

  return (
    <div className="container">
      <h1>Reverse Wordle (v{version})</h1>
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
                disabled={rowIndex > currentRow} // Disable future rows
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

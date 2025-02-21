import React from "react";
import "./styles.css"; // Import CSS file

function App() {
  const grid = Array(5).fill(Array(5).fill("?"));

  return (
    <div className="app-container">
      <h1 className="title">Reverse Wordle</h1>
      
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="grid-cell">{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

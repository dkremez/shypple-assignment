import React, { useState, useCallback } from "react";
import { Grid } from "./components/Grid";
import "./App.css";

const defaultGrid = new Array(50).fill(new Array(50).fill());

const updateGridOnClick = (grid, rowIndex, columnIndex) =>
  grid.map((row, i) => {
    return row.map((cell, j) => {
      if (i === rowIndex || j === columnIndex) {
        return cell ? cell + 1 : 1;
      }
      return cell;
    });
  });

function App() {
  const [grid, setGrid] = useState(defaultGrid);

  const handleCellClick = useCallback(
    (rowIndex, columnIndex) => {
      let newGrid = updateGridOnClick(grid, rowIndex, columnIndex);

      setGrid(newGrid);
    },
    [grid]
  );

  return (
    <div className="App">
      <Grid grid={grid} onCellClick={handleCellClick} />
    </div>
  );
}

export default App;

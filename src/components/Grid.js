import React, { useState, useCallback, useEffect } from "react";
import { Row } from "./Row";
import { getFibonacciCells } from "../utils/getFibonacciCells";

const defaultGrid = new Array(50).fill(new Array(50).fill());

const updateGridOnClick = (grid, rowIndex, columnIndex) =>
  grid.map((row, i) =>
    row.map((cell, j) => {
      if (i === rowIndex || j === columnIndex) {
        return cell ? cell + 1 : 1;
      }
      return cell;
    })
  );

const resetGridCells = (grid, resetCoordinates) => {
  const newGrid = JSON.parse(JSON.stringify(grid)); // Quick way to create a deep copy of a grid
  resetCoordinates.forEach((coordinate) => {
    newGrid[coordinate[0]][coordinate[1]] = null;
  });
  return newGrid;
};

export const Grid = () => {
  const [grid, setGrid] = useState(defaultGrid);

  const handleCellClick = useCallback(
    (rowIndex, columnIndex) => {
      let newGrid = updateGridOnClick(grid, rowIndex, columnIndex);
      setGrid(newGrid);
    },
    [grid]
  );

  const handleCellsReset = useCallback(
    (coordinates) => {
      let newGrid = resetGridCells(grid, coordinates);

      setGrid(newGrid);
    },
    [grid]
  );

  useEffect(() => {
    let cells = getFibonacciCells(grid);
    if (cells.length) handleCellsReset(cells);
  }, [grid, handleCellsReset]);

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          onCellClick={handleCellClick}
        />
      ))}
    </div>
  );
};

import React from "react";
import { Row } from "./Row";

export const Grid = ({ grid, onCellClick, resetCells }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          resetCells={resetCells}
          onCellClick={onCellClick}
        />
      ))}
    </div>
  );
};

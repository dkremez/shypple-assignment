import React from "react";
import { Row } from "./Row";

export const Grid = ({ grid, onCellClick }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          onCellClick={onCellClick}
        />
      ))}
    </div>
  );
};

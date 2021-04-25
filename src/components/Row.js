import React from "react";
import { Cell } from "./Cell";

export const Row = ({ row, rowIndex, onCellClick }) => {
  return (
    <div className="row">
      {row.map((cell, columnIndex) => (
        <Cell
          key={columnIndex}
          cell={cell}
          onClick={onCellClick}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      ))}
    </div>
  );
};

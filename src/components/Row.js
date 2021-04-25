import React, { useEffect } from "react";
import { Cell } from "./Cell";
import { detectFibonacciSequence } from "../utils/detectFibonacciSequence";

export const Row = ({ row, rowIndex, onCellClick, resetCells }) => {
  useEffect(() => {
    const fibSequenceCoordinates = detectFibonacciSequence(row, rowIndex);

    if (fibSequenceCoordinates.length >= 4) {
      resetCells(fibSequenceCoordinates);
    }
  }, [row, rowIndex, resetCells]);

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

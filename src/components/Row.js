import React, { useEffect } from "react";
import { Cell } from "./Cell";

const detectFibonacciSequence = (row, rowIndex) => {
  const coordinates = [];
  let fibCount = 0;
  for (let i = 2; i < row.length; i++) {
    if (row[i - 1] + row[i - 2] === row[i]) {
      fibCount++;
    } else {
      if (fibCount >= 3) {
        for (let j = i - fibCount - 2; j < i; j++) {
          coordinates.push([rowIndex, j]);
        }
      }
      fibCount = 0;
    }
  }
  return coordinates;
};

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

import React, { useCallback, memo } from "react";

const areEqual = (prevProps, newProps) => {
  return (
    prevProps.cell === newProps.cell &&
    prevProps.rowIndex === newProps.rowIndex &&
    prevProps.onClick === newProps.columnIndex
  );
};

export const Cell = memo(({ cell, rowIndex, columnIndex, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(rowIndex, columnIndex);
  }, [rowIndex, columnIndex, onClick]);

  return (
    <div className="cell" onClick={handleClick}>
      {cell}
    </div>
  );
}, areEqual);

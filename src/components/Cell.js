import React, { useState, useCallback } from "react";

export const Cell = ({ cell, rowIndex, columnIndex, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick(rowIndex, columnIndex);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div
      className={`cell ${clicked ? "cell--clicked" : ""}`}
      onClick={handleClick}
    >
      {cell}
    </div>
  );
};

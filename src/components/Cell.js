import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { usePrevious } from "../hooks/usePrevious";

export const Cell = ({ cell, rowIndex, columnIndex, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const [reseted, setReseted] = useState(false);
  const prevCell = usePrevious(cell);

  useEffect(() => {
    if (prevCell && !cell) {
      setReseted(true);
      setTimeout(() => {
        setReseted(false);
      }, 1000);
    }
  }, [cell, prevCell]);

  const handleClick = () => {
    setClicked(true);
    onClick(rowIndex, columnIndex);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  const cellClassName = classnames("cell", {
    "cell--clicked": clicked,
    "cell--reseted": reseted,
  });

  return (
    <div className={cellClassName} onClick={handleClick}>
      {cell}
    </div>
  );
};

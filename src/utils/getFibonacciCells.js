import { transposeArray } from "./transposeArray";

export const MIN_DETECT_SIZE = 3;
export const MIN_RESET_SEQUENCE_SIZE = 5;

export const isPerfectSquare = (x) => {
  let s = parseInt(Math.sqrt(x));
  return s * s === x;
};

export const isFibonacci = (n) => {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
};

export const detectFibonacciSequence = (row, rowIndex) => {
  const coordinates = [];
  let fibCount = 0;
  for (let i = 2; i < row.length; i++) {
    if (
      row[i - 2] + row[i - 1] === row[i] &&
      isFibonacci(row[i - 2]) &&
      isFibonacci(row[i - 1])
    ) {
      fibCount++;
    } else {
      if (fibCount >= MIN_DETECT_SIZE) {
        for (let j = i - fibCount - 2; j < i; j++) {
          coordinates.push([rowIndex, j]);
        }
      }
      fibCount = 0;
    }
  }
  return coordinates;
};

export const getFibonacciSequenceInColumns = (grid) => {
  let coordinates = [];

  const transposedGrid = transposeArray(grid);
  transposedGrid.forEach((row, rowIndex) => {
    const transposedCoordinates = detectFibonacciSequence(row, rowIndex);

    if (transposedCoordinates.length >= MIN_RESET_SEQUENCE_SIZE) {
      const columnCoordinates = transposedCoordinates.map((coord) => [
        coord[1],
        coord[0],
      ]);
      coordinates = coordinates.concat(columnCoordinates);
    }
  });

  return coordinates;
};

export const getFibonacciSequenceInRows = (grid) => {
  let coordinates = [];

  grid.forEach((row, rowIndex) => {
    const rowCoordinates = detectFibonacciSequence(row, rowIndex);
    if (rowCoordinates.length >= MIN_RESET_SEQUENCE_SIZE) {
      coordinates = coordinates.concat(rowCoordinates);
    }
  });

  return coordinates;
};

export const getFibonacciCells = (grid) => {
  const rowCells = getFibonacciSequenceInRows(grid);
  const columnsCells = getFibonacciSequenceInColumns(grid);

  return [...rowCells, ...columnsCells];
};

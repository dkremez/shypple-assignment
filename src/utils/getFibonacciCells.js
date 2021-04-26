import { transposeArray } from "./transposeArray";

export const MIN_DETECT_SIZE = 3;

export const detectFibonacciSequence = (row, rowIndex) => {
  const coordinates = [];
  let fibCount = 0;
  for (let i = 2; i < row.length; i++) {
    if (row[i - 1] + row[i - 2] === row[i]) {
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

    if (transposedCoordinates.length >= 4) {
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
    if (rowCoordinates.length >= 4) {
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

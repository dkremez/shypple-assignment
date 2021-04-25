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

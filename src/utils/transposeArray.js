export const transposeArray = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
};

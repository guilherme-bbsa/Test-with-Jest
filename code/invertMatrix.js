export const invertMatrix = matrix => {
  const invertedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (invertedMatrix[j] !== undefined) {
        invertedMatrix[j].push(matrix[i][j]);
      } else {
        invertedMatrix.push([matrix[i][j]]);
      }
    }
  }
  return invertedMatrix;
};

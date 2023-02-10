export const averageColumn = (matrix, columnPosition) => {
  let sum = 0;
  matrix.map(line => {
    if (typeof line[columnPosition] === 'number') {
      sum += line[columnPosition];
    }
  });
  if (sum === 0) {
    return sum;
  }
  return sum / matrix.length;
};

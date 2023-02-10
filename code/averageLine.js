export const averageMatrix = (matrix) => {
  const averagePerLine = [];
  matrix.map(line => {
    let sum = 0;
    line.map(num => {
      sum += num;
    });
    averagePerLine.push(sum / line.length);
  });
  return averagePerLine;
};

export const averageLine = (line) => {
  let sum = 0;
  line.map(num => {
    sum += num;
  });
  return sum / line.length;
};


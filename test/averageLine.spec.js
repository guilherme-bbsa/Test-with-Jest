import { averageMatrix, averageLine } from '../code/averageLine';

describe('averageMatrix()', () => {
  const testCases = [
    {
      matrix: [
        [1, 2],
        [2, 3],
        [8, 9],
        [0, 0]
      ],
      averageMatrix: [1.5, 2.5, 8.5, 0],
      description: 'matrix of positive numbers'
    },
    {
      matrix: [
        [-1, 2],
        [6, -3],
        [11, -9],
        [0, 0]
      ],
      averageMatrix: [0.5, 1.5, 1, 0],
      description: 'matrix of negative numbers'
    }
  ];
  testCases.map(testCase => {
    it(`should return the average of the sum of the matrix: ${testCase.description}`, () => {
      expect(averageMatrix(testCase.matrix)).toEqual(testCase.averageMatrix);
    });
  });
});

describe('averageLine()', () => {
  const testCases = [
    {
      line: [1, 2],
      averageLine: 1.5,
      description: 'array of positive numbers'
    },
    {
      line: [-1, 2],
      averageLine: 0.5,
      description: 'array of negative numbers'
    }
  ];
  testCases.map(testCase => {
    it(`should return the average of the sum of the numbers present in the array ${testCase.description}` , () => {
      expect(averageLine(testCase.line)).toBe(testCase.averageLine)
    });
  })
});

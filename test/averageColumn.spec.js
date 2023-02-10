import { averageColumn } from '../code/averageColumns';

describe('averageColumn ()', () => {
  const testCases = [
    {
      matrix: [
        [1, 2],
        [4, 3],
        [5, 3],
        [10, 0]
      ],
      columnPosition: 0,
      expected: 5,
      description: 'matrix of positive numbers and, column 0'
    },
    {
      matrix: [
        [1, 2],
        [4, 3],
        [5, 3],
        [10, 0]
      ],
      columnPosition: 1,
      expected: 2,
      description: 'matrix of positive numbers and, column 1'
    },
    {
      matrix: [
        [1, 2],
        [4, 3],
        [5, 3],
        [10, 0]
      ],
      columnPosition: 2,
      expected: 0,
      description: 'matrix of positive numbers and, column 2'
    },
    {
      matrix: [
        [-1, -2],
        [-4, -3],
        [-5, -3],
        [10, 0]
      ],
      columnPosition: 0,
      expected: 0,
      description: 'matrix of negative numbers and, column 0'
    },
    {
      matrix: [
        [-1, 2],
        [4, -3],
        [-5, 3],
        [10, 0]
      ],
      columnPosition: 1,
      expected: 0.5,
      description: 'matrix of negative numbers and, column 1'
    },
    {
      matrix: [
        [1, -2],
        [-4, 3],
        [-5, -3],
        [10, 0]
      ],
      columnPosition: 2,
      expected: 0,
      description: 'matrix of negative numbers and, column 2'
    },
  ];

  testCases.map(testCase => {
    it(`should return the average of the sum of all numbers in the indicated column: ${testCase.description}`, () => {
      expect(averageColumn(testCase.matrix, testCase.columnPosition)).toEqual(
        testCase.expected
      );
    });
  });
});

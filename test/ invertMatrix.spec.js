import { invertMatrix } from '../code/invertMatrix';

describe('invertMatrix ()', () => {
  const testCases = [
    {
      matrix: [
        [1, 2],
        [3, 4],
        [5, 4]
      ],
      expect: [
        [1, 3, 5],
        [2, 4, 4]
      ],
      description: 'matrix of positive numbers'
    },
    {
      matrix: [
        [-1, -2],
        [-3, -4],
        [-5, 4]
      ],
      expect: [
        [-1, -3, -5],
        [-2, -4, 4]
      ],
      description: 'matrix of negative numbers'
    },
    {
      matrix: [
        [1, 2, 3],
        [3, 4],
        [5, 4, 0]
      ],
      expect: [
        [1, 3, 5],
        [2, 4, 4],
        [3, 0]
      ],
      description: 'matrix of positive numbers and missing number'
    },
    {
      matrix: [[], [], []],
      expect: [],
      description: 'empty matrix'
    }
  ];
  testCases.map(testCase => {
    it(`should return an inverted matrix, what was a column becomes a line: ${testCase.description}`, () => {
      expect(invertMatrix(testCase.matrix)).toEqual(testCase.expect)
    });
  })
});

import sum from '../code/sum';

describe('sum()', () => {
  const testCases = [
    {
      matriz: [
        [1, 2],
        [3, -12]
      ],
      sum:-6,
      description: 'sum negative numbers'
    },
    {
      matriz: [
        [1, 2],
        [3, 2]
      ],
      sum: 8,
      description: 'sum postive numbers'
    },
    {
      matriz: [],
      sum: 0,
      description: 'sum empty matrix'
    },
  ];
  for (let testCase of testCases) {
    it(`should return the sum of array elements: ${testCase.description}`, () => {
      expect(sum(testCase.matriz)).toBe(testCase.sum);
    });
  }
});

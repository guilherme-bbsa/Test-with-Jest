import menor from "../code/menor";

describe('Menor()', () => {
  const testCases = [
    {
      matrix: [[1,3,-10],[90,-112,-12]],
      smaller: -112,
      description: 'smaller number is negative'
    },
    {
      matrix: [[1,3,2],[90,12,2]],
      smaller: 1,
      description: 'smaller number is positive'
    },
  ]
  for(let testCase of testCases){
    it(`should return the smallest number from an array:${testCase.description}`, () => {
      expect(menor(testCase.matrix)).toBe(testCase.smaller)
    });
  }

});
import computeMatchStats from './computeMatchStats';

describe('computeMatchStats', () => {
  let result = {};

  describe('Given an array of 1s and 0s is passed in', () => {
    const matches = [1, 0, 1, 0, 1];

    beforeAll(() => {
      result = computeMatchStats(matches);
    });

    it('should return 3 wins', () => {
      expect(result.wins).toEqual(3);
    });

    it('should return 2 losses', () => {
      expect(result.losses).toEqual(2);
    }); 
  });

  describe('Given no parameter is passed in', () => {
    let fn;

    beforeAll(() => {
      fn = () => computeMatchStats();
    });
  
    it('should throw error', () => {
      expect(fn).toThrowError();
    });
  });
});
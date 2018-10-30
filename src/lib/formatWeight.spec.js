import formatWeight from './formatWeight';

describe('formatWeight', () => {
  let result;

  describe('Given a number is passed in grams', () => {
    beforeAll(() => {
      result = formatWeight(80000);
    });

    it('should return the Weight in kilograms', () => {
      expect(result).toEqual('80 kg');
    });
  });
});
import formatHeight from './formatHeight';

describe('formatHeight', () => {
  let result;

  describe('Given a number is passed in centimetres', () => {
    beforeAll(() => {
      result = formatHeight(180);
    });

    it('should return the height in metres', () => {
      expect(result).toEqual('1.8 m');
    });
  });
});
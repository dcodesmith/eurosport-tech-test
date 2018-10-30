import mockAxios from 'axios';
import fetchPlayers from './fetchPlayers';

describe('Fetch Players', () => {
  let result;

  describe('successfully fetches players', () => {
    beforeAll(async () => {
      const players = [{}, {}];

      mockAxios.get.mockImplementationOnce(() => 
        Promise.resolve({ data: { players }})
      );
      result = await fetchPlayers();
    });

    afterAll(() => {
      mockAxios.get.mockReset();
    });

    it('should return players', () => {
      expect(result.players).toEqual([{}, {}]);
    });

    it('should invoke axios.get with the correct endpoint', () => {
      expect(mockAxios.get).toHaveBeenCalledWith(process.env.REACT_APP_HEADTOHEAD_ENPOINT);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe.skip('unsuccessfully fetches players', () => {
    beforeAll(async () => {
      mockAxios.get.mockImplementationOnce(() => 
        Promise.reject()
      );
      // await fetchPlayers();
    });

    it('should throw errors', () => {
      expect(() => fetchPlayers()).toThrowError();
    });
  });
});
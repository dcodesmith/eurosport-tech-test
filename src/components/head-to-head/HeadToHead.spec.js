import React from 'react';
import { shallow } from 'enzyme';
import mockfetchPlayers from '../../services/fetchPlayers';

import HeadToHead from './';
import mockPlayers from '../../fixtures/players';
jest.mock('../../services/fetchPlayers');

describe('Given a HeadToHead Component', () => {
	describe('When rendered', () => {
    let HeadToHeadComponent;

    describe('and players have not been fetched', () => {
      beforeAll(() => {
        HeadToHeadComponent = shallow(<HeadToHead />);
      });

      it('should render the Loading Message component', () => {
        expect(HeadToHeadComponent.find('LoadingMessage')).toMatchSnapshot();
      });
    });

    describe('and players have been fetched', () => {
      beforeAll(() => {
        mockfetchPlayers.mockImplementationOnce(() => 
          Promise.resolve({ players: mockPlayers })
        );

        HeadToHeadComponent = shallow(<HeadToHead />);
      });

      it('should not render the Loading Message component', () => {
        expect(HeadToHeadComponent.find('LoadingMessage')).toMatchSnapshot();
      });

      it('should render a Label component', () => {
        expect(HeadToHeadComponent.find('Labels')).toMatchSnapshot();        
      });

      it('should render a Stats component for each players with the correct props', () => {
        const statsComponents = HeadToHeadComponent.find('Stats');
        const firstPlayerStatsComponent = statsComponents.at(0);
        const secondPlayerStatsComponent = statsComponents.at(1);

        expect(HeadToHeadComponent.find('Stats').length).toEqual(2);

        expect(firstPlayerStatsComponent.prop('player')).toEqual(mockPlayers[1]);
        expect(secondPlayerStatsComponent.prop('player')).toEqual(mockPlayers[0]);
      });
    });
	});
});
import React from 'react';
import { shallow } from 'enzyme';

import Stats from './';
import computeMatchStats from '../../lib/computeMatchStats';
import formatWeight from '../../lib/formatWeight';
import formatHeight from '../../lib/formatHeight';
import mockPlayers from '../../fixtures/players';

const player = mockPlayers[0];
const { firstname, lastname, data: { weight, height, last } } = player;

describe('Given a Stats Component', () => {
	describe('When rendered', () => {
    let statsComponent;
    const props = { player };
    let matches = {};

		beforeAll(() => {
      statsComponent = shallow(<Stats { ...props } />);
      matches = computeMatchStats(last)
		});

    it('should display the players fullname', () => {
      const text = statsComponent.find('h3').text().trim();
      const expectedText = `${firstname} ${lastname}`;

      expect(text).toEqual(expectedText);
    });

    it('should display playersweight in correct format', () => {
      expect(statsComponent.find('.player-weight').text().trim()).toEqual(formatWeight(weight));
    });

    it('should display players height in correct format', () => {
      expect(statsComponent.find('.player-height').text().trim()).toEqual(formatHeight(height));
    });

    it('should display players wins', () => {
      expect(statsComponent.find('.player-height').text().trim()).toEqual(formatHeight(height));
    });

    it('should display players wins', () => {
      expect(statsComponent.find('.player-wins').text().trim()).toEqual(matches.wins.toString());
    });

    it('should display players losses', () => {
      expect(statsComponent.find('.player-losses').text().trim()).toEqual(matches.losses.toString());
    });
	});
});
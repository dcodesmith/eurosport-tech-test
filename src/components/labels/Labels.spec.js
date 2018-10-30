import React from 'react';
import { shallow } from 'enzyme';

import Labels from './';

describe('Given a Labels Component', () => {
	describe('When rendered', () => {
    let LabelsComponent;
      
		beforeAll(() => {
      LabelsComponent = shallow(<Labels/>);
		});

    it('should display the statistics labels', () => {
      expect(LabelsComponent).toMatchSnapshot();
    });
	});
});
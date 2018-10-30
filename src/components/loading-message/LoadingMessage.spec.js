import React from 'react';
import { shallow } from 'enzyme';

import Labels from './';

describe('Given a LoadingMessage Component', () => {
	describe('When rendered', () => {
    let LabelsComponent;
      
		beforeAll(() => {
      LabelsComponent = shallow(<Labels/>);
		});

    it('should display the appriopriate message', () => {
      expect(LabelsComponent).toMatchSnapshot();
    });
	});
});
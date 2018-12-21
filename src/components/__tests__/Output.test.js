import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Output from '../Output';

const mockProps = {
  paragraphs: [],
};

describe('rendering', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Output { ...mockProps } />
    );
  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
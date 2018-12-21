import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Input from '../Input';

const mockProps = {
  onClick: jest.fn(),
  value: '3',
};

describe('rendering', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Input { ...mockProps }/>
    );
  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
import React from 'react';
import { shallow, } from 'enzyme';
import { Header, } from '../Header';

let props;

beforeEach(() => {
  props = {};
});

describe('Header', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

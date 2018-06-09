import React from 'react';
import { shallow, } from 'enzyme';
import { Audio, } from '../Audio';

let props;

beforeEach(() => {
  props = {
    src       : 'src',
    keyToPress: 'K',
  };
});

describe('Audio', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Audio {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow, } from 'enzyme';
import { Audio, } from '../Audio';
import theme from '../../theme';

let props, wrapper, spy;

beforeEach(() => {
  props = {
    src       : 'src',
    keyToPress: 'K',
    name      : 'src',
    handlePlay: jest.fn(),
  };
  spy = jest.fn();
  wrapper = shallow(<Audio {...props} />);
});

describe('Audio', () => {
  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('calls handlePlay when audio plays', () => {
    wrapper.instance().handlePlay = spy;
    wrapper.find('#K').simulate('play');
    expect(spy).toHaveBeenCalled();
  });
  test('calls handleStop when audio stops', () => {
    wrapper.instance().handleStop = spy;
    wrapper.find('#K').simulate('ended');
    expect(spy).toHaveBeenCalled();
  });
  test('calls handleClick when div is clicked', () => {
    wrapper.instance().handleClick = spy;
    wrapper.find('.drum-pad').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  describe('handleClick', () => {
    test('calls this.audio.play', () => {
      wrapper.instance().audio = { play: spy, };
      wrapper.instance().handleClick();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handlePlay', () => {
    test('calls handlePlay prop', () => {
      wrapper.instance().handlePlay(props.name);
      expect(props.handlePlay).toHaveBeenLastCalledWith(props.name);
    });
    test('calls setState', () => {
      const setState = jest.spyOn(Audio.prototype, 'setState');

      wrapper.instance().handlePlay(props.name);
      expect(setState).toHaveBeenCalled();
    });
    test('sets the backgroundColor state', () => {
      wrapper.instance().handlePlay(props.name);
      expect(wrapper.state('backgroundColor')).toBe(theme.palette.primary.main);
    });
  });
  describe('handleStop', () => {
    test('calls setState', () => {
      const setState = jest.spyOn(Audio.prototype, 'setState');

      wrapper.instance().handleStop();
      expect(setState).toHaveBeenCalled();
    });
    test('sets the backgroundColor state', () => {
      wrapper.instance().handleStop();
      expect(wrapper.state('backgroundColor')).toBe(theme.palette.primary.light);
    });
  });
});

import React from 'react';
import { shallow, } from 'enzyme';
import { App, } from '../App';

let wrapper, props;

beforeEach(() => {
  wrapper = shallow(<App {...props} />);
});

describe('App', () => {
  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('componentDidMount', () => {
    test('adds event listener to keypress', () => {
      document.addEventListener = jest.fn();
      wrapper.instance().componentDidMount();
      expect(document.addEventListener).toHaveBeenCalled();
    });
    test();
  });
  test('calls handleVolumeChange when slider value changes', () => {
    const spy = jest.spyOn(App.prototype, 'handleVolumeChange');

    wrapper.find('#volume-slider').simulate('change');
    expect(spy).toHaveBeenCalled();
  });
  describe('handleVolumeChange', () => {
    test('calls setState', () => {
      const setState = jest.spyOn(App.prototype, 'setState');

      wrapper.instance().handleVolumeChange(50);
      expect(setState).toHaveBeenCalled();
    });
    test('sets the volume state', () => {
      wrapper.instance().handleVolumeChange(50);
      expect(wrapper.state('volume')).toBe(0.5);
    });
  });
  describe('handlePlay', () => {
    test('calls setState', () => {
      const setState = jest.spyOn(App.prototype, 'setState');

      wrapper.instance().handlePlay('Clap');
      expect(setState).toHaveBeenCalled();
    });
    test('sets the lastPlayed state', () => {
      wrapper.instance().handlePlay('Clap');
      expect(wrapper.state('lastPlayed')).toBe('Clap');
    });
  });
});

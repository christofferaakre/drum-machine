/* eslint jsx-a11y/media-has-caption: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import theme from '../theme';

export const styles = {
  container: {
    padding: 25,
    color  : 'white',
  },
};

export class Audio extends React.Component {
  state = {
    backgroundColor: theme.palette.primary.light,
  };
  componentDidMount() {
    const { keyToPress, } = this.props;

    this.audio = document.getElementById(keyToPress);
  }

  handlePlay(name) {
    this.props.handlePlay(name);
    this.setState(() => ({ backgroundColor: theme.palette.primary.main, }));
  }

  handleStop() {
    this.setState(() => ({ backgroundColor: theme.palette.primary.light, }));
  }

  handleClick() {
    this.audio.play();
  }

  render() {
    const {
      src, keyToPress, volume, name, handlePlay,
    } = this.props;
    const { backgroundColor, } = this.state;

    if (this.audio) {
      this.audio.volume = volume;
    }
    return (
      <div
        onClick={() => this.handleClick()}
        className='drum-pad'
        id={`drum-pad-container-${ src }`}
        style={{ ...styles.container, backgroundColor, }}
      >
        {keyToPress || 'Click'}
        <audio
          onPlay={() => this.handlePlay(name)}
          onEnded={() => this.handleStop()}
          volume={volume}
          className='clip'
          id={keyToPress}
          src={src}
        >
          Unfortunately, it seems your browser does not support HTML5 audio, and this drum machine
          relies heavily on it
        </audio>
      </div>
    );
  }
}

Audio.propTypes = {
  src       : PropTypes.string.isRequired,
  keyToPress: PropTypes.string,
  name      : PropTypes.string.isRequired,
  volume    : PropTypes.number,
  handlePlay: PropTypes.func.isRequired,
};

Audio.defaultProps = {
  keyToPress: '',
  volume    : 0.5,
};

export default Audio;

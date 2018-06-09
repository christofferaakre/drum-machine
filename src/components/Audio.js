/* eslint jsx-a11y/media-has-caption: "off" */

import React from 'react';
import PropTypes from 'prop-types';

export const styles = {
  container: {
    padding: 15,
  },
};

export class Audio extends React.Component {
  componentDidMount() {
    const { keyToPress, } = this.props;

    this.audio = document.getElementById(keyToPress);
  }
  render() {
    const { src, keyToPress, volume, } = this.props;

    if (this.audio) {
      this.audio.volume = volume;
    }
    return (
      <div
        onClick={() => this.audio.play()}
        className='drum-pad'
        id={`drum-pad-container-${ src }`}
        style={styles.container}
      >
        {keyToPress || 'Click'}
        <audio volume={volume} className='clip' id={keyToPress} src={src} />
      </div>
    );
  }
}

Audio.propTypes = {
  src       : PropTypes.string.isRequired,
  keyToPress: PropTypes.string,
  volume    : PropTypes.number,
};

Audio.defaultProps = {
  keyToPress: '',
  volume    : 0.5,
};

export default Audio;

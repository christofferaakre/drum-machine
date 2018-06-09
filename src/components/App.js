import React from 'react';

import Slider from 'react-rangeslider';

import Header from './Header';
import Audio from './Audio';
import audio from '../utils/audio';
import theme from '../theme';

export const styles = {
  container: {
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    height        : '100vh',
    padding       : 25,
  },
  gridContainer: {
    display            : 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap            : 15,
  },
  display: {
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'center',
    padding      : 15,
    width        : 200,
  },
  lastPlayed: {
    color   : theme.palette.primary.main,
    fontSize: 28,
    padding : 15,
  },
  sliderContainer: {
    width  : 200,
    padding: '0 25px',
  },
};

export class App extends React.Component {
  state = {
    volume    : 0.5,
    lastPlayed: '',
  };
  componentDidMount() {
    let sounds = {};

    audio.forEach(({ keyToPress, }) => {
      const Key = keyToPress.toUpperCase();

      sounds = { ...sounds, [Key]: document.getElementById(Key), };
    });
    document.addEventListener('keypress', ({ key, }) => {
      const Key = key.toUpperCase();

      if (audio.map(({ keyToPress, }) => keyToPress).includes(Key)) {
        sounds[Key].play();
      }
    });
  }
  handleVolumeChange(volume) {
    this.setState(() => ({ volume: Math.round(volume) / 100, }));
  }
  handlePlay = name => this.setState(() => ({ lastPlayed: name, }));
  render() {
    const { volume, lastPlayed, } = this.state;

    return (
      <div id='container'>
        <Header />
        <div style={styles.container} id='drum-machine'>
          <div style={styles.gridContainer} id='drum-pads-container'>
            {audio.map(({ src, keyToPress, name, }) => (
              <Audio
                key={src}
                src={src}
                name={name}
                keyToPress={keyToPress}
                volume={volume}
                handlePlay={this.handlePlay}
              />
            ))}
          </div>
          <div style={styles.display} id='display'>
            <span style={styles.lastPlayed}>{lastPlayed || 'Click a drum'}</span>
            <div style={styles.sliderContainer} id='slider-container'>
              <Slider
                id='volume-slider'
                min={0}
                max={100}
                value={Math.round(volume * 100)}
                onChange={value => this.handleVolumeChange(value)}
              />
            </div>
            <span style={styles.volume}>Volume: {Math.round(volume * 100)}%</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

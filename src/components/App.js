import React from 'react';
import Audio from './Audio';
import audio from '../utils/audio';

export const styles = {
  container: {
    display            : 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
};

export class App extends React.Component {
  state = {
    volume: 0.5,
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
  handleVolumeChange = (e) => {
    const { value, } = e.target;

    this.setState(() => ({ volume: Number(value), }));
  };
  render() {
    const { volume, } = this.state;

    return (
      <div style={styles.container} id='drum-machine'>
        <div id='display'>
          {audio.map(({ src, keyToPress, }) => (
            <Audio key={src} src={src} keyToPress={keyToPress} volume={volume} />
          ))}
          <input
            type='range'
            name='volume'
            id='volume'
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={this.handleVolumeChange}
          />
        </div>
      </div>
    );
  }
}

export default App;

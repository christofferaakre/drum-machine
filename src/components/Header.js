import React from 'react';
import theme from '../theme';

export const styles = {
  container: {
    position       : 'fixed',
    backgroundColor: theme.palette.primary.main,
    color          : 'white',
    padding        : 15,
    width          : '100%',
  },
  leftSide: {
    float: 'left',
  },
  rightSide: {
    float: 'right',
  },
  link: {
    display   : 'flex',
    alignItems: 'center',
  },
  iconSpan: {
    display   : 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 26,
    margin: '0 5px',
  },
};

export const Header = () => (
  <header style={styles.container} id='header'>
    <div style={styles.leftSide}>
      <span>Drum machine by Christoffer Aakre</span>
    </div>
    <div style={styles.rightSide}>
      <a
        style={styles.link}
        className='link'
        href='https://github.com/christofferaakre/drum-machine'
      >
        Source on<span style={styles.iconSpan}>
          <img style={styles.icon} src='images/github-logo-light.png' alt='Github logo' /> Github
        </span>
      </a>
    </div>
  </header>
);

export default Header;

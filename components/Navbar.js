import React from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">WORKS</a>
      </div>
      <h1>EUGEr.</h1>
    </nav>
  );
}

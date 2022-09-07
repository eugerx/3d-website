import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            welcome to my <br /> portfolio!🚀
          </h1>
          <button>Let&apos;s GO!</button>
          <p>
            Software Engineer / Software Developer
            <br /> Coder 💻 /Gamer 🎮/ Anime Fan 📺
          </p>
        </div>
        <div className={styles.splineContainer}>
          <Spline
            className={styles.spline}
            scene="https://prod.spline.design/hsJFJia7H1s-te0h/scene.splinecode"
          />
          <div className={styles.tips}>
            You can actually move the chicken with WASD !
          </div>
        </div>
      </div>
    </>
  );
}

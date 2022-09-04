import Spline from '@splinetool/react-spline';
import React from 'react';
import Navbar from '../components/Navbar';
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

      <div className={styles.container}>
        <div className={styles.splineContainer}>
          <Spline
            title="Try to click the umbrella!"
            className={styles.spline}
            scene="https://prod.spline.design/TTNxS8TvZtkSR6Sx/scene.splinecode"
          />
          <div className={styles.tips}>
            You can actually move the chicken with WASD !
          </div>
        </div>
        <div className={styles.header}>
          <h1>
            about <br /> me?🎈
          </h1>
          <button>Let&apos;s GO!</button>
          <p>
            I like to teach myself how to code. I am <br /> passionate about
            coding and I am constantly <br /> learning more about web
            development.
          </p>
        </div>
      </div>
    </>
  );
}

import Spline from '@splinetool/react-spline';
import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import splineStyle from '../styles/Spline.module.css';
import Cloud from '../images/cloud.svg';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className={styles.container}>
       
          <p>
            Software Engineer / Software Developer
            <br /> Coder 💻 /Gamer 🎮/ Anime Fan 📺
          </p>
        </div>
      
          />
          <div className={styles.tips}>
            You can actually move the chicken with WASD !
          </div>
        </div>
      </div> */}

      <div className={splineStyle.wrapper}>
        <Spline
          className={splineStyle.spline}
          scene="https://prod.spline.design/hsJFJia7H1s-te0h/scene.splinecode"
        />
        <div className={splineStyle.content}>
          <h1>
            welcome to my <br /> portfolio!🚀
          </h1>
          <button>Let&apos;s GO!</button>
          <p>Software Engineer / Software Developer</p>
        </div>
      </div>
    </>
  );
}

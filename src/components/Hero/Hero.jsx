import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adesh</h1>
        <p className={styles.description}>
          "I am a Full Stack Developer specializing in the MERN stack (MongoDB,
          Express, React, Node.js). Feel free to reach out if you'd like to
          learn more."
        </p>
        <a href="mailto:adeshjadhav103@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Img"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;

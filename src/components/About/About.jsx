import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/frankDecleration.JPG")}
          alt="aboutMe"
          className={styles.aboutImage}
        />
        <p className={styles.description}>
          Hey! I'm Frank Liu, a fourth-year computer science student at
          Princeton University with plans on minoring in statistics and machine
          learning, originally from Atlanta, Georgia. <br /> <br />
          I’m passionate about building engaging experiences. <br /> <br />
          Beyond coding, you'll find me thrifting, rock climbing, and playing
          video games!
        </p>
      </div>
    </section>
  );
};

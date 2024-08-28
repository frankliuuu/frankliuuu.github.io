import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:fl9971@princeton.edu" target="_blank">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          </a>
          <a href="mailto:fl9971@princeton.edu" target="_blank">
            fl9971@princeton.edu
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/frank-liu-/" target="_blank">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linkedin Icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/frankliuuu/" target="_blank">
            linkedin.com/in/frankliuuu
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/frankliuuu" target="_blank">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github Icon"
            />
          </a>
          <a href="https://github.com/frankliuuu" target="_blank">
            github.com/frankliuuu
          </a>
        </li>
      </ul>
    </footer>
  );
};

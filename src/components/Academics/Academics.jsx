import React from "react";

import styles from "./Academics.module.css";
import courses from "../../data/courses.json";

export const Academics = () => {
  return (
    <section className={styles.container} id="academics">
      <h2 className={styles.title}>Academics</h2>
      <div className={styles.content}>
        {courses.map((course, id) => {
          return (
            <div className={styles.description} key={id}>
              <p>
                {course.id} - {course.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

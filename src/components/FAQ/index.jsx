import React from 'react';
import styles from './FAQ.module.css';

const FAQ = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img
          className={styles.box}
          src="/illustration-box-desktop.svg"
          alt="box"
        />
        <img
          className={styles.pattern}
          src="/bg-pattern-desktop.svg"
          alt="pattern"
        />
        <img
          className={styles.illustration}
          src="/illustration-woman-online-desktop.svg"
          alt="illustration"
        />
      </div>
      <div className={styles.faq}>
        <h1 className={styles.title}>FAQ</h1>
      </div>
    </div>
  );
};

export default FAQ;

import React, { useState } from 'react';
import cx from 'classnames';
import { useSpring, animated } from 'react-spring';
import styles from './FAQ.module.css';

const questions = [
  {
    id: 1,
    question: 'How many team members can I invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    id: 2,
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    id: 3,
    question: 'How do I reset my password?',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },
  {
    id: 4,
    question: 'Can I cancel my subscription?',
    answer:
      'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    id: 5,
    question: 'Do you provide additional support?',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

const Question = ({ id, question, answer, toggle, open }) => {
  const openAnimation = useSpring({
    from: { opacity: '0', maxHeight: '50px' },
    to: { opacity: '1', maxHeight: open ? '120px' : '50px' },
    config: { duration: '200' },
  });

  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    config: { duration: '200' },
  });

  return (
    <animated.div key={id} className={styles.question} style={openAnimation}>
      <div className={styles.questionRow} onClick={() => toggle(id)}>
        <h2
          className={cx(`${styles.questionTitle}`, {
            [styles.active]: open,
          })}
        >
          {question}
        </h2>
        <animated.img
          style={iconAnimation}
          className={styles.questionIcon}
          src="/icon-arrow-down.svg"
          alt="arrow"
        />
      </div>
      <p className={styles.questionAnswer}>{answer}</p>
    </animated.div>
  );
};

const FAQ = (props) => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId !== id ? id : null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <img
          className={styles.box}
          src="/illustration-box-desktop.svg"
          alt="box"
        />
      </div>
      <div className={styles.images}>
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
        {questions.map(({ id, question, answer }) => (
          <Question
            key={id}
            id={id}
            question={question}
            answer={answer}
            toggle={handleToggle}
            open={activeId === id}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

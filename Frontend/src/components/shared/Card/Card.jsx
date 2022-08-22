import React from 'react';
import styles from './Card.module.css';

const Card = (Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
          <img src={`/images/${Props.logo}`} alt='logo' />
          <h1 className={styles.heading}>{Props.title}</h1>
      </div>
      {Props.children}
    </div>
  )
}

export default Card
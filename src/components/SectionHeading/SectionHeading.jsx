import React from 'react';
import styles from './SectionHeading.module.css';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false
}) {
  return (
    <div className={`${styles.headingContainer} ${center ? styles.center : ''} ${light ? styles.light : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.divider} />
    </div>
  );
}

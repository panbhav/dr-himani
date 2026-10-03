import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export default function Logo({ compact = false, light = false }) {
  return (
    <Link to="/" className={`${styles.logoContainer} ${light ? styles.light : ''}`}>
      <svg 
        className={styles.symbol} 
        viewBox="0 0 44 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="22" cy="22" r="20" className={styles.outerRing} strokeWidth="1.5" />
        {/* Subtle botanical / feminine curved form */}
        <path 
          d="M22 8 C15.5 8, 11 14.5, 11 22 C11 29.5, 17 35.5, 22 36 C27 35.5, 33 29.5, 33 22 C33 14.5, 28.5 8, 22 8 Z" 
          className={styles.petal} 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path 
          d="M22 14 C18.5 17.5, 16.5 22, 16.5 26.5 C19 25.5, 22 23.5, 22 19" 
          className={styles.innerCurve} 
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle cx="22" cy="16.5" r="2.5" className={styles.accentDot} />
      </svg>
      
      {!compact && (
        <div className={styles.textGroup}>
          <span className={styles.doctorName}>DR. HIMANI</span>
          <span className={styles.specialty}>OBSTETRICS &amp; GYNAECOLOGY</span>
        </div>
      )}
    </Link>
  );
}

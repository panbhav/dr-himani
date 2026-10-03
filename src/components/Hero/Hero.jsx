import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Stethoscope, Sparkles } from 'lucide-react';
import { DOCTOR } from '../../data/doctor';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Doctor Profile & Intro */}
        <div className={styles.heroContent}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulseDot} />
            <span className={styles.eyebrowText}>OBSTETRICS &amp; GYNAECOLOGY</span>
          </div>

          <h1 className={styles.headline}>
            Specialist Care for Women's Health, <span className={styles.headlineAccent}>Every Step of the Way.</span>
          </h1>

          <p className={styles.subtext}>
            {DOCTOR.name} ({DOCTOR.qualificationsDisplay}) is a specialist obstetrician and gynaecologist trained at AIIMS Rishikesh, with advanced fellowships in Gynaecological Endoscopy and Reproductive Medicine, and specialized training in Pain &amp; Palliative Care.
          </p>

          <div className={styles.ctaGroup}>
            <Link to="/about" className="btn-primary">
              Explore Profile <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Dr. Himani
            </Link>
          </div>

          {/* Quick Credential Highlights */}
          <div className={styles.highlightPills}>
            <div className={styles.pill}>
              <Award size={15} className={styles.pillIcon} />
              <span>MD — AIIMS Rishikesh</span>
            </div>
            <div className={styles.pill}>
              <Stethoscope size={15} className={styles.pillIcon} />
              <span>Fellowship in Endoscopy</span>
            </div>
            <div className={styles.pill}>
              <Sparkles size={15} className={styles.pillIcon} />
              <span>Fellowship in Reproductive Medicine</span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Portrait Placeholder with Clinical Crest */}
        <div className={styles.heroVisual}>
          <div className={styles.visualFrame}>
            <div className={styles.portraitPlaceholder}>
              <div className={styles.crestContainer}>
                <svg viewBox="0 0 120 120" className={styles.crestSvg} fill="none">
                  <circle cx="60" cy="60" r="54" stroke="#1A3636" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                  <circle cx="60" cy="60" r="46" stroke="#40534C" strokeWidth="2" opacity="0.8" />
                  <path 
                    d="M60 25 C45 25, 35 38, 35 55 C35 74, 48 88, 60 92 C72 88, 85 74, 85 55 C85 38, 75 25, 60 25 Z" 
                    stroke="#677D6B" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M60 38 C52 46, 48 57, 48 68 C54 66, 60 62, 60 52" 
                    stroke="#1A3636" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="44" r="5" fill="#C2A68D" />
                </svg>

                <div className={styles.placeholderMeta}>
                  <span className={styles.nameTag}>DR. HIMANI</span>
                  <span className={styles.specTag}>MBBS, MD, FGES, FRM</span>
                  <span className={styles.deptTag}>Department of Obstetrics &amp; Gynaecology</span>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className={styles.floatingBadge}>
                <ShieldCheck size={20} className={styles.floatingIcon} />
                <div>
                  <span className={styles.floatTitle}>Verified Medical Specialist</span>
                  <span className={styles.floatSubtitle}>AIIMS Rishikesh Alumna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Award, GraduationCap, Stethoscope, HeartPulse, Activity } from 'lucide-react';
import styles from './CredentialsStrip.module.css';

export default function CredentialsStrip() {
  const credentials = [
    { label: "MBBS", detail: "Pt. BD Sharma PGIMS Rohtak", icon: GraduationCap },
    { label: "MD Obstetrics & Gynaecology", detail: "AIIMS Rishikesh", icon: Award },
    { label: "Fellowship in Endoscopy in Gynaecology", detail: "Jaipur Doorbeen Hospital", icon: Stethoscope },
    { label: "Fellowship in Reproductive Medicine", detail: "Nova Wings Hospital Ahmedabad", icon: Activity },
    { label: "Training in Pain & Palliative Care", detail: "Tata Medical Center Kolkata", icon: HeartPulse }
  ];

  return (
    <section className={styles.stripSection} aria-label="Credentials & Qualifications">
      <div className={`container ${styles.stripContainer}`}>
        <div className={styles.stripHeader}>
          <span className={styles.badge}>Academic &amp; Clinical Foundation</span>
          <p className={styles.leadText}>Authoritative medical qualifications verified by apex institutions:</p>
        </div>

        <div className={styles.grid}>
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={20} />
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.cardTitle}>{cred.label}</h3>
                  <span className={styles.cardDetail}>{cred.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

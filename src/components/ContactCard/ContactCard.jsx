import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { DOCTOR } from '../../data/doctor';
import styles from './ContactCard.module.css';

export default function ContactCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.badge}>Professional Contact</span>
        <h3 className={styles.name}>{DOCTOR.name}</h3>
        <p className={styles.qualifications}>{DOCTOR.qualificationsDisplay}</p>
        <p className={styles.specialty}>{DOCTOR.specialty}</p>
      </div>

      <div className={styles.infoList}>
        <a href={`tel:${DOCTOR.contact.phone}`} className={styles.infoItem}>
          <div className={styles.iconCircle}>
            <Phone size={18} />
          </div>
          <div>
            <span className={styles.label}>Direct Telephone</span>
            <span className={styles.value}>{DOCTOR.contact.phoneDisplay}</span>
          </div>
        </a>

        <a href={`mailto:${DOCTOR.contact.email}`} className={styles.infoItem}>
          <div className={styles.iconCircle}>
            <Mail size={18} />
          </div>
          <div>
            <span className={styles.label}>Email Address</span>
            <span className={styles.value}>{DOCTOR.contact.email}</span>
          </div>
        </a>

        <div className={styles.infoItemStatic}>
          <div className={styles.iconCircle}>
            <Clock size={18} />
          </div>
          <div>
            <span className={styles.label}>Consultation Timings</span>
            <span className={styles.value} style={{ fontSize: '0.95rem', display: 'block', marginBottom: '0.2rem' }}>
              Please call to confirm consultation hours and availability.
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
              Appointments are confirmed directly by the clinic.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.privacyNote}>
        <ShieldCheck size={16} className={styles.privacyIcon} />
        <p>Please discuss how to share sensitive medical information directly with the clinic.</p>
      </div>
    </div>
  );
}

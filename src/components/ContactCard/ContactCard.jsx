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
            <MapPin size={18} />
          </div>
          <div>
            <span className={styles.label}>Consultation Location</span>
            <p className={styles.hospitalName}>{DOCTOR.contact.hospital}</p>
            <address className={styles.addressText}>
              {DOCTOR.contact.address.locality}<br />
              {DOCTOR.contact.address.landmark}<br />
              {DOCTOR.contact.address.city}, {DOCTOR.contact.address.state} – {DOCTOR.contact.address.pincode}
            </address>
            <a 
              href={DOCTOR.contact.address.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapLinkBtn}
            >
              Get Google Maps Directions →
            </a>
          </div>
        </div>
      </div>

      <div className={styles.privacyNote}>
        <ShieldCheck size={16} className={styles.privacyIcon} />
        <p>All medical and academic enquiries are handled with strict privacy &amp; medical confidentiality.</p>
      </div>
    </div>
  );
}

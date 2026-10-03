import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / About</span>
          <h1 className={styles.pageTitle}>About Dr. Himani</h1>
          <p className={styles.pageLead}>
            A rigorous clinical foundation, advanced fellowship specializations, and patient-first medical philosophy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* Left Main Article */}
            <div className={styles.mainBio}>
              <SectionHeading
                eyebrow="Curriculum Vitae Narrative"
                title="Academic Rigour, Surgical Expertise &amp; Holistic Care"
              />

              <div className={styles.paragraphs}>
                {DOCTOR.profileBio.map((paragraph, index) => (
                  <p key={index} className={styles.bioText}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Patient Centered Philosophy Section */}
              <div className={styles.philosophyBlock}>
                <div className={styles.philosophyHeader}>
                  <HeartHandshake size={24} className={styles.philosophyIcon} />
                  <h3 className={styles.philosophyTitle}>Care That Begins With Listening</h3>
                </div>
                <p className={styles.philosophyText}>
                  A defining element of Dr. Himani's clinical practice is the emphasis placed on patient autonomy, thorough communication, and empathetic support. Her professional repertoire incorporates specialized communication training to facilitate sensitive discussions, protect patient confidentiality, and ensure that treatment plans are understood and mutually agreed upon.
                </p>

                <ul className={styles.philosophyList}>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Complete privacy and confidentiality in gynecological and reproductive consultations</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Structured family discussions and empathetic counseling for complex conditions</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Evidence-based decision making tailored to individual health priorities</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Comfort-oriented and holistic supportive care during challenging clinical courses</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side Panel */}
            <aside className={styles.sidebar}>
              <div className={styles.profileCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatarCrest}>
                    <ShieldCheck size={32} />
                  </div>
                  <h2 className={styles.sideName}>{DOCTOR.name}</h2>
                  <span className={styles.sideQuals}>{DOCTOR.qualificationsDisplay}</span>
                  <span className={styles.sideSpec}>{DOCTOR.specialty}</span>
                </div>

                <div className={styles.sideDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Location</span>
                    <span className={styles.detailValue}>
                      <MapPin size={14} /> {DOCTOR.contact.address.city}, {DOCTOR.contact.address.state}
                    </span>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Residency Training</span>
                    <span className={styles.detailValue}>AIIMS, Rishikesh</span>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Undergraduate Medical Degree</span>
                    <span className={styles.detailValue}>Pt. BD Sharma, PGIMS Rohtak</span>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Fellowship Accreditations</span>
                    <span className={styles.detailValue}>Endoscopy (FGES), Reproductive Medicine (FRM)</span>
                  </div>

                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Pain &amp; Palliative Training</span>
                    <span className={styles.detailValue}>Tata Medical Center, Kolkata</span>
                  </div>
                </div>

                <div className={styles.sideContact}>
                  <a href={`tel:${DOCTOR.contact.phone}`} className={styles.sideContactBtn}>
                    <Phone size={15} /> {DOCTOR.contact.phoneDisplay}
                  </a>
                  <a href={`mailto:${DOCTOR.contact.email}`} className={styles.sideContactBtnSecondary}>
                    <Mail size={15} /> Send Email
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Stethoscope, 
  Scissors, 
  Sparkles, 
  BookOpen, 
  Award, 
  Calendar,
  CheckCircle,
  FileText
} from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import CredentialsStrip from '../../components/CredentialsStrip/CredentialsStrip';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Credentials Strip */}
      <CredentialsStrip />

      {/* 3. Short About Dr. Himani Snapshot */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <SectionHeading
                eyebrow="Profile Overview"
                title="Specialist Expertise Anchored in Clinical Excellence"
                subtitle="Dedicated to women's gynaecological, reproductive, and obstetric well-being."
              />
              <p className={styles.paragraph}>
                {DOCTOR.profileBio[0]}
              </p>
              <p className={styles.paragraph}>
                {DOCTOR.profileBio[2]}
              </p>
              
              <div className={styles.aboutActions}>
                <Link to="/about" className="btn-primary">
                  Read Full Biography <ArrowRight size={16} />
                </Link>
                <Link to="/education" className="btn-secondary">
                  View Qualifications
                </Link>
              </div>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardEyebrow}>Medical Profile</span>
                <h3 className={styles.cardDoctorName}>{DOCTOR.name}</h3>
                <span className={styles.cardSpecs}>{DOCTOR.qualificationsDisplay}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardItem}>
                  <strong className={styles.itemLabel}>Specialty</strong>
                  <span className={styles.itemValue}>{DOCTOR.specialty}</span>
                </div>
                <div className={styles.cardItem}>
                  <strong className={styles.itemLabel}>Postgraduate Residency</strong>
                  <span className={styles.itemValue}>AIIMS, Rishikesh</span>
                </div>
                <div className={styles.cardItem}>
                  <strong className={styles.itemLabel}>Fellowship Subspecialties</strong>
                  <span className={styles.itemValue}>Endoscopy &amp; Reproductive Medicine</span>
                </div>
                <div className={styles.cardItem}>
                  <strong className={styles.itemLabel}>Location</strong>
                  <span className={styles.itemValue}>{DOCTOR.contact.address.city}, {DOCTOR.contact.address.state}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.patientCareNote}>
                  Commitment to patient privacy, evidence-grounded medicine, and empathetic clinical care.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Areas of Expertise (Snapshot) */}
      <section className={`${styles.expertiseSection} section-padding`}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Specialist Domains"
            title="Comprehensive Women's Healthcare"
            subtitle="Organized clinical disciplines spanning diagnostics, minimally invasive surgery, obstetrics, and fertility care."
          />

          <div className={styles.servicesGrid}>
            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <Scissors size={24} />
              </div>
              <h3 className={styles.serviceTitle}>Gynaecological Endoscopy</h3>
              <p className={styles.serviceDesc}>
                Fellowship-trained in diagnostic &amp; operative hysteroscopy, laparoscopic surgery, and minimally invasive management of uterine fibroids and benign pathologies.
              </p>
              <Link to="/expertise" className={styles.serviceLink}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <Sparkles size={24} />
              </div>
              <h3 className={styles.serviceTitle}>Reproductive Medicine</h3>
              <p className={styles.serviceDesc}>
                Specialized fellowship training in infertility diagnostics, ovulation induction, follicular surveillance, ART protocols, and recurrent pregnancy loss care.
              </p>
              <Link to="/expertise" className={styles.serviceLink}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <Stethoscope size={24} />
              </div>
              <h3 className={styles.serviceTitle}>Obstetrics &amp; Maternal Care</h3>
              <p className={styles.serviceDesc}>
                Residency and senior residency experience in comprehensive antenatal monitoring, high-risk labor management, and postpartum follow-up.
              </p>
              <Link to="/expertise" className={styles.serviceLink}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className={styles.centerAction}>
            <Link to="/expertise" className="btn-secondary">
              Explore All 6 Clinical Domains
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Academic & Research Highlight */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.researchBanner}>
            <div className={styles.researchContent}>
              <div className={styles.thesisBadge}>
                <FileText size={16} />
                <span>AIIMS Rishikesh Academic Thesis</span>
              </div>
              <h3 className={styles.thesisTitle}>
                "{DOCTOR.thesis.title}"
              </h3>
              <p className={styles.thesisMeta}>
                Conducted under the guidance of <strong>{DOCTOR.thesis.guide}</strong>, with co-guides {DOCTOR.thesis.coGuides.join(", ")}.
              </p>
              <div className={styles.researchBtnRow}>
                <Link to="/research" className="btn-primary">
                  View Research Details <ArrowRight size={16} />
                </Link>
                <Link to="/publications" className="btn-secondary">
                  Peer-Reviewed Publications ({DOCTOR.publications.length})
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tasteful CTA */}
      <CTA />
    </div>
  );
}

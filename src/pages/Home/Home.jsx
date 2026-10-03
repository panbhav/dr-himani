import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Scissors, 
  Sparkles, 
  ShieldCheck, 
  Star,
  CheckCircle2,
  Calendar,
  Building,
  HeartHandshake,
  Activity,
  FileCheck
} from 'lucide-react';
import doctorPortrait from '../../assets/doctor-portrait.jpg';
import maternalCareImg from '../../assets/maternal-care.jpg';
import endoscopySurgeryImg from '../../assets/endoscopy-surgery.jpg';
import fertilityLabImg from '../../assets/fertility-lab.jpg';
import patientReviewImg from '../../assets/patient-review.jpg';
import { DOCTOR } from '../../data/doctor';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      
      {/* 1. VISUAL HERO WITH DOCTOR PORTRAIT */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrowTag}>
              <span className={styles.pulseDot} />
              <span>OBSTETRICS &amp; GYNAECOLOGY SPECIALIST</span>
            </div>

            <h1 className={styles.heroTitle}>
              Advanced Surgical Precision, <span className={styles.serifAccent}>Empathetic Women's Care</span>
            </h1>

            <p className={styles.heroSubtext}>
              <strong>{DOCTOR.name}</strong> ({DOCTOR.qualificationsDisplay}) is a specialist obstetrician &amp; gynaecologist trained at <strong>AIIMS Rishikesh</strong>, with post-doctoral fellowships in Endoscopy &amp; Reproductive Medicine, and specialized training in Pain &amp; Palliative Care.
            </p>

            {/* Credential Tags */}
            <div className={styles.credentialsRow}>
              <div className={styles.credBadge}>
                <Award size={15} className={styles.credIcon} />
                <span>MD — AIIMS Rishikesh</span>
              </div>
              <div className={styles.credBadge}>
                <Scissors size={15} className={styles.credIcon} />
                <span>Fellowship in Endoscopy</span>
              </div>
              <div className={styles.credBadge}>
                <Sparkles size={15} className={styles.credIcon} />
                <span>Fellowship in Reproductive Medicine</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <Link to="/contact" className="btn-primary">
                Book Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/specialties" className="btn-secondary">
                Explore Clinical Specialties
              </Link>
            </div>

            {/* Rating & Trust Strip */}
            <div className={styles.trustStrip}>
              <div className={styles.starsRow}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={styles.starIcon} fill="currentColor" />
                ))}
              </div>
              <span className={styles.trustText}>5.0 Star Experience • Patient Satisfaction &amp; Discretion</span>
            </div>
          </div>

          {/* Right Visual Portrait Card */}
          <div className={styles.heroVisualCol}>
            <div className={styles.portraitCard}>
              <div className={styles.portraitImgWrapper}>
                <img 
                  src={doctorPortrait} 
                  alt="Dr. Himani - Obstetrics & Gynaecology Specialist" 
                  className={styles.portraitImg}
                />
              </div>

              <div className={styles.doctorCardBottom}>
                <div>
                  <h3 className={styles.docName}>{DOCTOR.name}</h3>
                  <p className={styles.docDegrees}>{DOCTOR.qualificationsDisplay}</p>
                  <p className={styles.docSub}>{DOCTOR.specialty}</p>
                </div>
                <div className={styles.verifiedStamp}>
                  <ShieldCheck size={20} />
                  <span>AIIMS Alumna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE KEY CLINICAL SPECIALTY PILLARS (WITH IMAGES) */}
      <section className={styles.specialtiesOverview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Core Clinical Disciplines</span>
            <h2 className={styles.sectionTitle}>Expert Care Centered Around You</h2>
            <p className={styles.sectionLead}>
              Every treatment pathway is grounded in modern clinical protocols and personalized attention.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            
            {/* Pillar 1 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarImgWrap}>
                <img src={maternalCareImg} alt="Obstetrics & Maternal Care" className={styles.pillarImg} />
                <span className={styles.pillarBadge}>Obstetrics</span>
              </div>
              <div className={styles.pillarBody}>
                <h3 className={styles.pillarTitle}>Maternal &amp; Fetal Health</h3>
                <p className={styles.pillarDesc}>
                  Comprehensive antenatal surveillance, high-risk pregnancy management, normal/assisted delivery, and dedicated postpartum care.
                </p>
                <Link to="/specialties" className={styles.pillarLink}>
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarImgWrap}>
                <img src={endoscopySurgeryImg} alt="Gynaecological Endoscopy" className={styles.pillarImg} />
                <span className={styles.pillarBadge}>Endoscopy</span>
              </div>
              <div className={styles.pillarBody}>
                <h3 className={styles.pillarTitle}>Minimally Invasive Surgery</h3>
                <p className={styles.pillarDesc}>
                  Fellowship-trained hysteroscopy and laparoscopy for fibroids, ovarian cysts, abnormal bleeding, and pelvic endometriosis.
                </p>
                <Link to="/specialties" className={styles.pillarLink}>
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarImgWrap}>
                <img src={fertilityLabImg} alt="Reproductive Medicine" className={styles.pillarImg} />
                <span className={styles.pillarBadge}>Fertility &amp; ART</span>
              </div>
              <div className={styles.pillarBody}>
                <h3 className={styles.pillarTitle}>Reproductive Medicine</h3>
                <p className={styles.pillarDesc}>
                  Fellowship in Reproductive Medicine (Nova Wings Hospital): Infertility evaluation, ovulation induction, IUI, and ART protocols.
                </p>
                <Link to="/specialties" className={styles.pillarLink}>
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

          <div className={styles.centerAction}>
            <Link to="/specialties" className="btn-secondary">
              Explore All Clinical Services &amp; Palliative Care <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PATIENT CARE HIGHLIGHT WITH SNEAK PEEK TO REVIEWS */}
      <section className={styles.reviewBannerSection}>
        <div className="container">
          <div className={styles.reviewBannerCard}>
            <div className={styles.bannerImageSide}>
              <img src={patientReviewImg} alt="Happy patient recovery" className={styles.bannerImg} />
            </div>
            <div className={styles.bannerContentSide}>
              <div className={styles.starsGroup}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#C2A68D" stroke="#C2A68D" />
                ))}
              </div>
              <blockquote className={styles.quoteText}>
                "Dr. Himani's empathetic listening, surgical expertise, and constant calm demeanor transformed a stressful medical journey into one of comfort and utmost trust."
              </blockquote>
              <div className={styles.quoteAuthor}>
                <strong>Patient Testimonial Profile</strong>
                <span>Maternal &amp; Laparoscopic Care</span>
              </div>
              <Link to="/reviews" className="btn-primary" style={{ marginTop: '1.25rem', alignSelf: 'flex-start' }}>
                Read All Patient Reviews <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAREER & RESEARCH SNEAK PEEK */}
      <section className={styles.careerTeaserSection}>
        <div className="container">
          <div className={styles.careerTeaserGrid}>
            <div>
              <span className={styles.sectionEyebrow}>Academic Excellence</span>
              <h2 className={styles.careerTeaserTitle}>AIIMS Residency &amp; Indexed Research</h2>
              <p className={styles.careerTeaserLead}>
                A distinguished track record combining apex government institutions with advanced clinical fellowships across Ahmedabad and Jaipur.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>3+</span>
                  <span className={styles.statLabel}>Premier Fellowships</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>AIIMS</span>
                  <span className={styles.statLabel}>MD Residency</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>3</span>
                  <span className={styles.statLabel}>Indexed Publications</span>
                </div>
              </div>
            </div>

            <div className={styles.careerTeaserActionBox}>
              <Building size={32} className={styles.actionIcon} />
              <h3>Looking for Detailed Clinical History &amp; Research?</h3>
              <p>Explore Dr. Himani's complete educational milestones, senior residency appointments, and published HPV clearance studies.</p>
              <Link to="/career" className="btn-secondary">
                View Academic Timeline &amp; Research <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

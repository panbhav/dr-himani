import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Scissors, 
  Sparkles, 
  ShieldCheck, 
  Star,
  ChevronLeft,
  ChevronRight,
  Building,
  HeartHandshake
} from 'lucide-react';
import doctorPortrait from '../../assets/doctor-portrait.jpg';
import maternalCareImg from '../../assets/maternal-care.jpg';
import endoscopySurgeryImg from '../../assets/endoscopy-surgery.jpg';
import fertilityLabImg from '../../assets/fertility-lab.jpg';
import patientReviewImg from '../../assets/patient-review.jpg';
import { DOCTOR } from '../../data/doctor';
import styles from './Home.module.css';

export default function Home() {
  const scrollRef = useRef(null);

  const scrollReviews = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const patientReviews = [
    {
      id: 1,
      name: "Pooja & Rohan M.",
      date: "September 2026",
      tag: "Normal Delivery & Antenatal Care",
      headline: "The most reassuring guide through high-risk pregnancy",
      text: "Dr. Himani's calm demeanor and clinical clarity kept us completely relaxed throughout our pregnancy milestones and delivery. She takes the time to listen and explain every single detail.",
      rating: 5
    },
    {
      id: 2,
      name: "Sunita G.",
      date: "August 2026",
      tag: "Laparoscopic Myomectomy",
      headline: "Minimally invasive surgery without fear",
      text: "Diagnosed with multiple large fibroids, I was terrified of surgery. Dr. Himani's laparoscopic precision meant I was home in 48 hours with minimal scarring and zero post-operative pain.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. K. Sharma & Family",
      date: "July 2026",
      tag: "Fertility Evaluation & ART",
      headline: "Genuine medical integrity and clear fertility protocols",
      text: "After 3 years of overwhelming consultations elsewhere, Dr. Himani's scientific and compassionate approach gave us clarity. She avoids unnecessary procedures and focuses on evidence-based protocols.",
      rating: 5
    },
    {
      id: 4,
      name: "Meenakshi V.",
      date: "June 2026",
      tag: "Palliative & Pain Care",
      headline: "Exceptional empathy and symptom relief",
      text: "Her specialized pain and palliative training from Tata Medical Center was so apparent when caring for my mother. She combines clinical excellence with genuine bedside dignity.",
      rating: 5
    },
    {
      id: 5,
      name: "Ananya B.",
      date: "May 2026",
      tag: "Antenatal & High-Risk Pregnancy",
      headline: "A specialist who truly listens to your concerns",
      text: "In times when medical OPDs feel hurried, Dr. Himani gave me her undivided attention. Her warmth and thorough explanations make every visit reassuring.",
      rating: 5
    },
    {
      id: 6,
      name: "Deepika R.",
      date: "April 2026",
      tag: "Diagnostic Hysteroscopy",
      headline: "Flawless procedure and comfortable recovery",
      text: "Had a diagnostic hysteroscopy done. Dr. Himani's surgical skill made the entire procedure seamless, painless, and followed by detailed lifestyle guidance.",
      rating: 5
    }
  ];

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
              <span className={styles.trustText}>5.0 Rated Patient Care • Strict Privacy &amp; Medical Discretion</span>
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

      {/* 2. THREE KEY CLINICAL SPECIALTY PILLARS */}
      <section className={styles.specialtiesOverview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Core Clinical Disciplines</span>
            <h2 className={styles.sectionTitle}>Expert Care Centered Around You</h2>
            <p className={styles.sectionLead}>
              Combining surgical precision, fellowship-trained fertility expertise, and gentle bedside compassion.
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
                  Explore Details <ArrowRight size={14} />
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
                  Explore Details <ArrowRight size={14} />
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
                  Explore Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.centerAction}>
            <Link to="/specialties" className="btn-secondary">
              View All 4 Clinical Disciplines &amp; Palliative Care <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SIDE-SCROLLING PATIENT REVIEWS SECTION AT THE END OF HOME PAGE */}
      <section className={styles.reviewsCarouselSection}>
        <div className="container">
          <div className={styles.reviewsHeaderRow}>
            <div>
              <span className={styles.sectionEyebrow}>Real Patient Experiences</span>
              <h2 className={styles.sectionTitle}>What Patients Say About Dr. Himani</h2>
              <p className={styles.sectionLead} style={{ margin: 0 }}>
                Verified feedback from mothers, surgical patients, and families across various clinical consultations.
              </p>
            </div>

            {/* Scroll Navigation Arrows */}
            <div className={styles.scrollControls}>
              <button 
                onClick={() => scrollReviews('left')} 
                className={styles.scrollBtn} 
                aria-label="Previous review"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={() => scrollReviews('right')} 
                className={styles.scrollBtn} 
                aria-label="Next review"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Track */}
          <div className={styles.reviewsTrack} ref={scrollRef}>
            {patientReviews.map((r) => (
              <div key={r.id} className={styles.reviewSlideCard}>
                <div className={styles.slideTop}>
                  <div className={styles.starsGroup}>
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#C2A68D" stroke="#C2A68D" />
                    ))}
                  </div>
                  <span className={styles.slideDate}>{r.date}</span>
                </div>

                <h3 className={styles.slideHeadline}>"{r.headline}"</h3>
                <p className={styles.slideText}>{r.text}</p>

                <div className={styles.slideFooter}>
                  <div className={styles.slideAuthor}>
                    <strong className={styles.authorName}>{r.name}</strong>
                    <span className={styles.authorTag}>{r.tag}</span>
                  </div>
                  <span className={styles.verifiedTag}>
                    <ShieldCheck size={14} /> Verified Care
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregate Rating Banner */}
          <div className={styles.ratingBar}>
            <div className={styles.ratingBarLeft}>
              <span className={styles.ratingScore}>5.0</span>
              <div className={styles.ratingDetails}>
                <div className={styles.starsGroup}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#C2A68D" stroke="#C2A68D" />
                  ))}
                </div>
                <span className={styles.ratingNotice}>Consistently Rated 5.0 for Compassionate Medical Care</span>
              </div>
            </div>

            <Link to="/contact" className="btn-primary">
              Book Your Consultation <ArrowRight size={15} />
            </Link>
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

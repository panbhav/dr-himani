import React, { useState } from 'react';
import { 
  ArrowRight, 
  Award, 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Building, 
  BookOpen, 
  CheckCircle2, 
  FileText, 
  HeartHandshake,
  Dna,
  Scissors,
  ShieldAlert,
  Send,
  User,
  GraduationCap
} from 'lucide-react';
import doctorPortrait from '../../assets/doctor-portrait.jpg';
import maternalCareImg from '../../assets/maternal-care.jpg';
import endoscopySurgeryImg from '../../assets/endoscopy-surgery.jpg';
import fertilityLabImg from '../../assets/fertility-lab.jpg';
import { DOCTOR } from '../../data/doctor';
import styles from './Home.module.css';

export default function Home() {
  // Tab state for Section 2 (Clinical Disciplines)
  const [activeTab, setActiveTab] = useState(0);

  // Tab state for Section 3 (Academic & Clinical Career)
  const [activeCareerTab, setActiveCareerTab] = useState('education');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Obstetric & Antenatal Care',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // 4 curated clinical feature cards with imagery & structured CV data
  const clinicalFeatures = [
    {
      id: 'maternal-care',
      title: 'Obstetric & High-Risk Maternal Care',
      subtitle: 'From Preconception to Postpartum Wellness',
      image: maternalCareImg,
      badge: 'Obstetrics',
      icon: HeartHandshake,
      description: 'Comprehensive antenatal risk profiling, continuous fetal surveillance, and expert labor ward management developed through demanding residency and senior residency appointments.',
      keyPoints: [
        'Antenatal risk assessment & high-risk pregnancy monitoring',
        'Fetal growth monitoring & detailed diagnostic ultrasound interpretation',
        'Normal & assisted vaginal delivery management, elective & emergency Cesarean sections',
        'Dedicated postpartum recovery, maternal health follow-up & lactation counseling'
      ]
    },
    {
      id: 'endoscopy-surgery',
      title: 'Minimally Invasive Gynaecological Endoscopy',
      subtitle: 'Fellowship-Trained Operative Precision',
      image: endoscopySurgeryImg,
      badge: 'FGES Fellowship',
      icon: Scissors,
      description: 'Specialized operative training from Jaipur Doorbeen Hospital in laparoscopic and hysteroscopic management of complex pelvic and uterine conditions with quicker recovery.',
      keyPoints: [
        'Diagnostic and operative hysteroscopy for abnormal uterine bleeding & polyps',
        'Laparoscopic cystectomy, myomectomy & ovarian surgery',
        'Total laparoscopic & abdominal hysterectomy',
        'Evaluation & surgical clearance of deep pelvic endometriosis'
      ]
    },
    {
      id: 'reproductive-medicine',
      title: 'Reproductive Medicine & Fertility Care',
      subtitle: 'Fellowship-Trained (Nova Wings Hospital)',
      image: fertilityLabImg,
      badge: 'FRM Fellowship',
      icon: Dna,
      description: 'Advanced reproductive endocrinology and assisted reproductive technologies (ART), focusing on evidence-grounded treatment plans tailored to couples and individuals.',
      keyPoints: [
        'Complete infertility investigation & personalized diagnostic workup',
        'Ovulation induction & serial follicular ultrasound monitoring',
        'Intrauterine Insemination (IUI) & Assisted Reproductive Technology (ART) protocols',
        'Management of PCOS-related subfertility & recurrent pregnancy loss (RPL)'
      ]
    },
    {
      id: 'palliative-care',
      title: 'Pain & Palliative Care Medicine',
      subtitle: 'Specialized Training at Tata Medical Center, Kolkata',
      image: doctorPortrait,
      badge: 'Palliative Fellowship',
      icon: ShieldAlert,
      description: 'Comprehensive pain management and compassionate palliative medicine ensuring dignity, symptom relief, and empathetic support in oncology and chronic benign disorders.',
      keyPoints: [
        'Assessment & multi-modal management of acute, chronic, and oncological pain',
        'Opioid titration & adjuvant analgesic protocols',
        'Advance care planning, goals-of-care discussions & holistic comfort measures',
        'Sensitive communication, family counseling & bereavement support'
      ]
    }
  ];

  return (
    <div className={styles.homeContainer}>
      
      {/* =========================================================================
          SECTION 1: HERO & DOCTOR IDENTITY (The First Impression)
          ========================================================================= */}
      <section id="hero" className={styles.heroSection}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrowTag}>
              <span className={styles.pulseDot} />
              <span>OBSTETRICS &amp; GYNAECOLOGY SPECIALIST</span>
            </div>

            <h1 className={styles.heroTitle}>
              Compassionate, Specialist Care for <span className={styles.serifAccent}>Women's Health</span>
            </h1>

            <p className={styles.heroSubtext}>
              <strong>{DOCTOR.name}</strong> ({DOCTOR.qualificationsDisplay}) is an Obstetrician &amp; Gynaecologist trained at <strong>AIIMS Rishikesh</strong>, with post-doctoral fellowships in Gynaecological Endoscopy &amp; Reproductive Medicine, and specialized training in Pain &amp; Palliative Care.
            </p>

            {/* Credential Badges */}
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
              <button onClick={scrollToContact} className="btn-primary">
                Consult With Dr. Himani <ArrowRight size={16} />
              </button>
              <a href="#clinical-domains" className="btn-secondary">
                Explore Clinical Areas
              </a>
            </div>

            {/* Quick Contact snippet */}
            <div className={styles.heroQuickContact}>
              <div className={styles.quickContactItem}>
                <Phone size={15} />
                <a href={`tel:${DOCTOR.contact.phone}`}>{DOCTOR.contact.phoneDisplay}</a>
              </div>
              <span className={styles.dividerDot}>•</span>
              <div className={styles.quickContactItem}>
                <MapPin size={15} />
                <span>{DOCTOR.contact.address.city}, Punjab</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card with High-Res Doctor Portrait */}
          <div className={styles.heroVisualCol}>
            <div className={styles.portraitCard}>
              <div className={styles.portraitImgWrapper}>
                <img 
                  src={doctorPortrait} 
                  alt="Dr. Himani - Obstetrics & Gynaecology Specialist" 
                  className={styles.portraitImg}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Floating Verified Badge */}
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

      {/* =========================================================================
          SECTION 2: CLINICAL DISCIPLINES & VISUAL SHOWCASE (Interactive & Visual)
          ========================================================================= */}
      <section id="clinical-domains" className={styles.clinicalSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Specialist Care Areas</span>
            <h2 className={styles.sectionTitle}>Precision Medicine Across Women's Life Stages</h2>
            <p className={styles.sectionLead}>
              Combining surgical precision, fellowship-accredited fertility expertise, and gentle bedside compassion.
            </p>
          </div>

          {/* Interactive Discipline Selector Tabs */}
          <div className={styles.disciplineTabs}>
            {clinicalFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(index)}
                  className={`${styles.tabBtn} ${activeTab === index ? styles.activeTabBtn : ''}`}
                >
                  <Icon size={18} />
                  <span>{feat.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Feature Showcase */}
          <div className={styles.showcaseCard}>
            <div className={styles.showcaseVisual}>
              <img 
                src={clinicalFeatures[activeTab].image} 
                alt={clinicalFeatures[activeTab].title}
                className={styles.showcaseImg}
              />
              <span className={styles.showcaseBadge}>{clinicalFeatures[activeTab].badge}</span>
            </div>

            <div className={styles.showcaseBody}>
              <span className={styles.showcaseSub}>{clinicalFeatures[activeTab].subtitle}</span>
              <h3 className={styles.showcaseTitle}>{clinicalFeatures[activeTab].title}</h3>
              <p className={styles.showcaseDesc}>{clinicalFeatures[activeTab].description}</p>

              <div className={styles.showcasePoints}>
                {clinicalFeatures[activeTab].keyPoints.map((point, idx) => (
                  <div key={idx} className={styles.pointRow}>
                    <CheckCircle2 size={16} className={styles.pointCheck} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <button onClick={scrollToContact} className={`btn-primary ${styles.showcaseCta}`}>
                Enquire for {clinicalFeatures[activeTab].badge} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ACADEMIC CREDENTIALS, EXPERIENCE & RESEARCH (Unified Career)
          ========================================================================= */}
      <section id="credentials" className={styles.careerSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Academic Authority &amp; Background</span>
            <h2 className={styles.sectionTitle}>Education, Senior Residency &amp; Research</h2>
            <p className={styles.sectionLead}>
              Rigorous institutional training at India's foremost medical institutes with published academic research.
            </p>
          </div>

          {/* Switcher: Education | Experience | Research & Publications */}
          <div className={styles.careerNav}>
            <button
              onClick={() => setActiveCareerTab('education')}
              className={`${styles.careerNavBtn} ${activeCareerTab === 'education' ? styles.careerNavActive : ''}`}
            >
              <GraduationCap size={18} />
              <span>Education &amp; Fellowships</span>
            </button>
            <button
              onClick={() => setActiveCareerTab('experience')}
              className={`${styles.careerNavBtn} ${activeCareerTab === 'experience' ? styles.careerNavActive : ''}`}
            >
              <Building size={18} />
              <span>Residency &amp; Appointments</span>
            </button>
            <button
              onClick={() => setActiveCareerTab('research')}
              className={`${styles.careerNavBtn} ${activeCareerTab === 'research' ? styles.careerNavActive : ''}`}
            >
              <BookOpen size={18} />
              <span>Research &amp; Publications ({DOCTOR.publications.length})</span>
            </button>
          </div>

          {/* Content Pane */}
          <div className={styles.careerContentPane}>
            
            {/* 1. Education Tab */}
            {activeCareerTab === 'education' && (
              <div className={styles.timelineGrid}>
                {DOCTOR.education.map((item, idx) => (
                  <div key={idx} className={styles.careerCard}>
                    <div className={styles.careerCardTop}>
                      <span className={styles.careerBadge}>{item.type.toUpperCase()}</span>
                      <span className={styles.careerPeriod}><Calendar size={13} /> {item.period}</span>
                    </div>
                    <h3 className={styles.careerItemTitle}>{item.degree}</h3>
                    <p className={styles.careerInst}><Building size={14} /> {item.institution}</p>
                    <p className={styles.careerDetails}>{item.details}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 2. Experience Tab */}
            {activeCareerTab === 'experience' && (
              <div className={styles.timelineGrid}>
                {DOCTOR.experience.map((item, idx) => (
                  <div key={idx} className={styles.careerCard}>
                    <div className={styles.careerCardTop}>
                      <span className={`${styles.careerBadge} ${item.isEmployment ? styles.badgeEmp : styles.badgeFellow}`}>
                        {item.category}
                      </span>
                      <span className={styles.careerPeriod}><Calendar size={13} /> {item.period}</span>
                    </div>
                    <h3 className={styles.careerItemTitle}>{item.role}</h3>
                    <p className={styles.careerInst}><Building size={14} /> {item.hospital}</p>
                    <p className={styles.careerDetails}>{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 3. Research & Publications Tab */}
            {activeCareerTab === 'research' && (
              <div className={styles.researchUnified}>
                {/* Thesis Highlight */}
                <div className={styles.thesisHighlightBox}>
                  <div className={styles.thesisBadge}>
                    <FileText size={15} />
                    <span>AIIMS Rishikesh MD Thesis</span>
                  </div>
                  <h3 className={styles.thesisTitle}>"{DOCTOR.thesis.title}"</h3>
                  <p className={styles.thesisMeta}>
                    <strong>Chief Guide:</strong> {DOCTOR.thesis.guide} &nbsp;|&nbsp; 
                    <strong>Co-Guides:</strong> {DOCTOR.thesis.coGuides.join(', ')}
                  </p>
                  <p className={styles.thesisDesc}>
                    Prospective longitudinal study assessing high-risk HPV clearance post-treatment via micro PCR assay by self-sampling in women with and without cervical intraepithelial lesions.
                  </p>
                </div>

                {/* Publications Grid */}
                <h3 className={styles.pubsHeader}>Peer-Reviewed Journal Publications</h3>
                <div className={styles.pubsGrid}>
                  {DOCTOR.publications.map((pub) => (
                    <div key={pub.id} className={styles.pubCard}>
                      <div className={styles.pubTop}>
                        <span className={styles.pubType}>{pub.type}</span>
                        <span className={styles.pubDate}>{pub.date}</span>
                      </div>
                      <h4 className={styles.pubTitle}>{pub.title}</h4>
                      <p className={styles.pubJournal}><em>{pub.journal}</em> • {pub.citation}</p>
                      <p className={styles.pubAuthors}><User size={13} /> {pub.authors}</p>
                      {pub.doi && <span className={styles.pubDoi}>DOI: {pub.doi}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CONTACT & PROFESSIONAL CONSULTATION (Get in Touch)
          ========================================================================= */}
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Left Contact Details & Bedside Ethics */}
            <div className={styles.contactInfoSide}>
              <span className={styles.sectionEyebrow}>Direct Consultation</span>
              <h2 className={styles.contactTitle}>Connect With Dr. Himani</h2>
              <p className={styles.contactLead}>
                Direct communication channels for patient appointments, clinical queries, and professional referrals.
              </p>

              <div className={styles.infoCardsList}>
                <a href={`tel:${DOCTOR.contact.phone}`} className={styles.infoCard}>
                  <div className={styles.infoIconWrap}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Telephone / WhatsApp</span>
                    <span className={styles.infoVal}>{DOCTOR.contact.phoneDisplay}</span>
                  </div>
                </a>

                <a href={`mailto:${DOCTOR.contact.email}`} className={styles.infoCard}>
                  <div className={styles.infoIconWrap}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email Address</span>
                    <span className={styles.infoVal}>{DOCTOR.contact.email}</span>
                  </div>
                </a>

                <div className={styles.infoCardStatic}>
                  <div className={styles.infoIconWrap}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Clinic Location</span>
                    <span className={styles.infoValAddress}>
                      {DOCTOR.contact.address.flat}, {DOCTOR.contact.address.society}<br />
                      {DOCTOR.contact.address.city}, {DOCTOR.contact.address.state} – {DOCTOR.contact.address.pincode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ethics Box */}
              <div className={styles.confidentialityBox}>
                <ShieldCheck size={20} className={styles.confIcon} />
                <p>
                  <strong>Patient Discretion Assured:</strong> Every clinical query is handled with complete medical confidentiality, empathetic communication, and tailored guidance.
                </p>
              </div>
            </div>

            {/* Right Interactive Consultation Form */}
            <div className={styles.contactFormSide}>
              <div className={styles.formCard}>
                <h3 className={styles.formCardTitle}>Send a Direct Enquiry</h3>
                <p className={styles.formCardSub}>
                  Fill in your details and Dr. Himani's desk will attend to your request promptly.
                </p>

                {submitted ? (
                  <div className={styles.formSuccess}>
                    <CheckCircle2 size={48} className={styles.successCheck} />
                    <h4 className={styles.successTitle}>Enquiry Successfully Received</h4>
                    <p className={styles.successMsg}>
                      Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.subject}</strong> has been logged. You may also call directly at {DOCTOR.contact.phoneDisplay}.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: '1rem' }}>
                      Submit Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className={styles.form}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="name" className={styles.fieldLabel}>Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priyanshu Sharma"
                        className={styles.fieldInput}
                      />
                    </div>

                    <div className={styles.fieldRow}>
                      <div className={styles.fieldGroup}>
                        <label htmlFor="email" className={styles.fieldLabel}>Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className={styles.fieldInput}
                        />
                      </div>
                      <div className={styles.fieldGroup}>
                        <label htmlFor="phone" className={styles.fieldLabel}>Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={styles.fieldInput}
                        />
                      </div>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="subject" className={styles.fieldLabel}>Clinical Area of Interest</label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={styles.fieldSelect}
                      >
                        <option value="Obstetric & Antenatal Care">Obstetric &amp; Antenatal Care</option>
                        <option value="Gynaecological Endoscopy">Minimally Invasive Endoscopy / Surgery</option>
                        <option value="Reproductive Medicine">Reproductive Medicine / Fertility Workup</option>
                        <option value="Pain & Palliative Consultation">Pain &amp; Palliative Support</option>
                        <option value="General Gynaecological Enquiry">General Gynaecological Consultation</option>
                      </select>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="message" className={styles.fieldLabel}>Enquiry Notes</label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your enquiry or requirement..."
                        className={styles.fieldTextarea}
                      />
                    </div>

                    <button type="submit" className={`btn-primary ${styles.submitButton}`}>
                      Submit Enquiry <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

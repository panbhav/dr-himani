import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building, 
  BookOpen, 
  FileText, 
  Calendar, 
  User, 
  Award, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { DOCTOR } from '../../data/doctor';
import doctorConferenceImg from '../../assets/dr-himani-conference.webp';
import CTA from '../../components/CTA/CTA';
import styles from './Career.module.css';

export default function Career() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className={styles.careerPage}>
      {/* Page Header */}
      <section className="page-heading">
        <div className="container">
          <span className="eyebrow">EDUCATION, EXPERIENCE &amp; RESEARCH</span>
          <h1>A foundation of learning.<br /><em>A commitment to care.</em></h1>
          <p>
            Explore Dr. Himani’s medical education, fellowship training, hospital appointments and research contributions.
          </p>
        </div>
      </section>

      {/* Main Switcher Nav */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.tabNav}>
            <button
              onClick={() => setActiveTab('education')}
              aria-pressed={activeTab === 'education'}
              className={`${styles.tabBtn} ${activeTab === 'education' ? styles.activeTab : ''}`}
            >
              <GraduationCap size={18} />
              <span>Education &amp; Fellowships</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              aria-pressed={activeTab === 'experience'}
              className={`${styles.tabBtn} ${activeTab === 'experience' ? styles.activeTab : ''}`}
            >
              <Building size={18} />
              <span>Hospital Appointments</span>
            </button>
            <button
              onClick={() => setActiveTab('research')}
              aria-pressed={activeTab === 'research'}
              className={`${styles.tabBtn} ${activeTab === 'research' ? styles.activeTab : ''}`}
            >
              <BookOpen size={18} />
              <span>Thesis &amp; Publications ({DOCTOR.publications.length})</span>
            </button>
          </div>

          {/* Tab 1: Education */}
          {activeTab === 'education' && (
            <div className={styles.cardsGrid}>
              {DOCTOR.education.map((item, index) => (
                <div key={index} className={styles.timelineCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.badge}>{item.type.toUpperCase()}</span>
                    <span className={styles.period}><Calendar size={13} /> {item.period}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.degree}</h3>
                  <p className={styles.institution}><Building size={14} /> {item.institution}</p>
                  <p className={styles.desc}>{item.details}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Hospital Experience */}
          {activeTab === 'experience' && (
            <div className={styles.cardsGrid}>
              {DOCTOR.experience.map((item, index) => (
                <div key={index} className={styles.timelineCard}>
                  <div className={styles.cardTop}>
                    <span className={`${styles.badge} ${item.isEmployment ? styles.badgeEmp : styles.badgeFellow}`}>
                      {item.category}
                    </span>
                    <span className={styles.period}><Calendar size={13} /> {item.period}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.role}</h3>
                  <p className={styles.institution}><Building size={14} /> {item.hospital}</p>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Research & Publications */}
          {activeTab === 'research' && (
            <div className={styles.researchWrapper}>
              {/* Thesis Card with Actual Conference Photo */}
              <div className={styles.thesisCardWithPhoto}>
                <div className={styles.thesisPhotoSide}>
                  <img 
                    src={doctorConferenceImg} 
                    alt="Dr. Himani presenting research at AOGIN 2023 Academic Conference" 
                    className={styles.thesisPhoto}
                  />
                  <span className={styles.photoCaption}>AOGIN Conference Delegate &amp; Presenter</span>
                </div>
                <div className={styles.thesisInfoSide}>
                  <div className={styles.thesisBadge}>
                    <FileText size={16} />
                    <span>AIIMS Rishikesh Academic Thesis</span>
                  </div>
                  <h2 className={styles.thesisTitle}>"{DOCTOR.thesis.title}"</h2>
                  <div className={styles.thesisMeta}>
                    <p><strong>Chief Guide:</strong> {DOCTOR.thesis.guide}</p>
                    <p><strong>Co-Guides:</strong> {DOCTOR.thesis.coGuides.join(', ')}</p>
                  </div>
                  <p className={styles.thesisDesc}>
                    Longitudinal prospective clinical research evaluating the clearance kinetics of high-risk HPV genotypes using self-sampling micro PCR assays in cohorts with and without preinvasive cervical intraepithelial lesions.
                  </p>
                </div>
              </div>

              {/* Peer-Reviewed Publications */}
              <h3 className={styles.sectionSubHeading}>Publications &amp; Conference Abstracts</h3>
              <div className={styles.pubsGrid}>
                {DOCTOR.publications.map((pub) => (
                  <div key={pub.id} className={styles.pubCard}>
                    <div className={styles.pubTop}>
                      <span className={styles.pubBadge}>{pub.type}</span>
                      <span className={styles.pubDate}>{pub.date}</span>
                    </div>
                    <h4 className={styles.pubTitle}>{pub.title}</h4>
                    <p className={styles.pubJournal}><em>{pub.journal}</em> • {pub.citation}</p>
                    <p className={styles.pubAuthors}><User size={13} /> {pub.authors}</p>
                    {pub.doi && <a className={styles.pubDoi} href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">Read reference <ExternalLink size={13} /> <span className={styles.doiText}>{pub.doi}</span></a>}
                    {pub.id === 3 && <p className={styles.desc} style={{marginTop:'1rem',fontSize:'0.75rem'}}>Reference supplied in the profile; publisher record has not been independently confirmed.</p>}
                  </div>
                ))}
              </div>

              {/* Presentations */}
              <h3 className={styles.sectionSubHeading} style={{ marginTop: '3rem' }}>Academic Presentations</h3>
              <div className={styles.presGrid}>
                {DOCTOR.presentations.oral.map((pres, idx) => (
                  <div key={idx} className={styles.presCard}>
                    <span className={styles.presTag}>Oral Paper • {pres.conference}</span>
                    <h4 className={styles.presTitle}>"{pres.title}"</h4>
                    <p className={styles.presName}>{pres.fullConferenceName}</p>
                  </div>
                ))}
                {DOCTOR.presentations.poster.map((pres, idx) => (
                  <div key={idx} className={styles.presCard}>
                    <span className={styles.presTag}>Poster • {pres.conference}</span>
                    <h4 className={styles.presTitle}>"{pres.title}"</h4>
                    <p className={styles.presName}>{pres.fullConferenceName}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CTA />
    </div>
  );
}

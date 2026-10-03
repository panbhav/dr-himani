import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './Research.module.css';

export default function Research() {
  const thesis = DOCTOR.thesis;

  return (
    <div className={styles.researchPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Research &amp; Thesis</span>
          <h1 className={styles.pageTitle}>Research &amp; Academic Work</h1>
          <p className={styles.pageLead}>
            Longitudinal prospective clinical research conducted during post-graduate tenure at the All India Institute of Medical Sciences (AIIMS), Rishikesh.
          </p>
        </div>
      </section>

      {/* Thesis Main Section */}
      <section className="section-padding">
        <div className="container container-narrow">
          <div className={styles.thesisContainer}>
            <div className={styles.badgeRow}>
              <span className={styles.thesisBadge}>Postgraduate MD Thesis</span>
              <span className={styles.instituteBadge}>{thesis.institution}</span>
            </div>

            <h2 className={styles.thesisTitle}>
              "{thesis.title}"
            </h2>

            <div className={styles.studyDesign}>
              <strong>Study Framework:</strong> {thesis.nature}
            </div>

            {/* Academic Mentorship Card */}
            <div className={styles.mentorshipCard}>
              <h3 className={styles.mentorshipTitle}>Academic Mentorship &amp; Guides</h3>
              
              <div className={styles.guideBlock}>
                <span className={styles.guideRole}>Chief Guide:</span>
                <span className={styles.guideName}>{thesis.guide}</span>
              </div>

              <div className={styles.coGuidesBlock}>
                <span className={styles.guideRole}>Co-Guides:</span>
                <ul className={styles.coGuideList}>
                  {thesis.coGuides.map((guide, idx) => (
                    <li key={idx} className={styles.coGuideItem}>
                      <Users size={16} className={styles.guideIcon} />
                      <span>{guide}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Research Significance & Context */}
            <div className={styles.significanceBox}>
              <h3 className={styles.significanceTitle}>Clinical Research Significance</h3>
              <p className={styles.significanceText}>
                The study investigates the longitudinal clearance kinetics of oncogenic high-risk Human Papillomavirus (HPV) genotypes using self-sampling micro-PCR assays following therapeutic intervention. By evaluating cohorts with and without preinvasive cervical intraepithelial lesions, the investigation contributes pivotal data to point-of-care screening modalities and non-invasive surveillance strategies in gynecologic oncology.
              </p>
            </div>

            <div className={styles.relatedLinks}>
              <Link to="/publications" className="btn-primary">
                View Peer-Reviewed Publications <ArrowRight size={16} />
              </Link>
              <Link to="/presentations" className="btn-secondary">
                View Conference Presentations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

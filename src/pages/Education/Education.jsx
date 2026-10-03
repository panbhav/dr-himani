import React from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Timeline from '../../components/Timeline/Timeline';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './Education.module.css';

export default function Education() {
  return (
    <div className={styles.educationPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Education &amp; Training</span>
          <h1 className={styles.pageTitle}>Education &amp; Training</h1>
          <p className={styles.pageLead}>
            A chronological academic journey spanning undergraduate study, apex institute postgraduate residency, and specialized post-doctoral fellowships.
          </p>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="section-padding">
        <div className="container container-narrow">
          <SectionHeading
            eyebrow="Academic Chronology"
            title="Formal Degrees &amp; Post-Doctoral Fellowships"
            subtitle="Verified qualifications directly documented in the curriculum vitae, maintaining accurate dates and premier institutions."
          />

          <Timeline items={DOCTOR.education} type="education" />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

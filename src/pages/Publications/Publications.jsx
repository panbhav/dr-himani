import React from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PublicationCard from '../../components/PublicationCard/PublicationCard';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './Publications.module.css';

export default function Publications() {
  return (
    <div className={styles.publicationsPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Publications</span>
          <h1 className={styles.pageTitle}>Peer-Reviewed Publications</h1>
          <p className={styles.pageLead}>
            Original research, multi-center epidemiological surveillance, and case reports published in indexed medical journals.
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="section-padding">
        <div className="container container-narrow">
          <SectionHeading
            eyebrow="Indexed Literature"
            title="Scientific Contributions"
            subtitle="Citations faithfully drawn from the curriculum vitae with complete author lists and journal identifiers."
          />

          <div className={styles.publicationsList}>
            {DOCTOR.publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

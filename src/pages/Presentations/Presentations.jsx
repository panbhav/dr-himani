import React from 'react';
import { Presentation, Mic, Calendar, Award } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './Presentations.module.css';

export default function Presentations() {
  const { poster, oral } = DOCTOR.presentations;

  return (
    <div className={styles.presentationsPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Presentations</span>
          <h1 className={styles.pageTitle}>Scientific Presentations</h1>
          <p className={styles.pageLead}>
            Oral papers and scientific poster presentations delivered at national and international gynecological academic congresses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container container-narrow">
          {/* Oral Paper Presentations */}
          <div className={styles.sectionBlock}>
            <div className={styles.sectionTag}>
              <Mic size={18} />
              <span>Oral Paper Presentations</span>
            </div>

            <div className={styles.cardsList}>
              {oral.map((pres, index) => (
                <div key={index} className={styles.presentationCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.confBadge}>{pres.conference}</span>
                    <span className={styles.typeLabel}>{pres.type}</span>
                  </div>

                  <h3 className={styles.presTitle}>"{pres.title}"</h3>

                  {pres.fullConferenceName && (
                    <p className={styles.confName}>{pres.fullConferenceName}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Poster Presentations */}
          <div className={styles.sectionBlock}>
            <div className={styles.sectionTag}>
              <Presentation size={18} />
              <span>Poster Presentations</span>
            </div>

            <div className={styles.cardsList}>
              {poster.map((pres, index) => (
                <div key={index} className={styles.presentationCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.confBadge}>{pres.conference}</span>
                    <span className={styles.typeLabel}>{pres.type}</span>
                  </div>

                  <h3 className={styles.presTitle}>"{pres.title}"</h3>

                  {pres.fullConferenceName && (
                    <p className={styles.confName}>{pres.fullConferenceName}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

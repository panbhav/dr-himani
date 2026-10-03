import React from 'react';
import { Briefcase, Award, CheckCircle } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Timeline from '../../components/Timeline/Timeline';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './Experience.module.css';

export default function Experience() {
  const seniorResidencyJobs = DOCTOR.experience.filter(e => e.isEmployment);
  const trainingFellowships = DOCTOR.experience.filter(e => !e.isEmployment);

  return (
    <div className={styles.experiencePage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Experience</span>
          <h1 className={styles.pageTitle}>Clinical Experience</h1>
          <p className={styles.pageLead}>
            A rigorous clinical trajectory distinguishing full-time senior residency roles from specialized post-doctoral fellowship appointments.
          </p>
        </div>
      </section>

      {/* Distinction Strip */}
      <section className={styles.distinctionStrip}>
        <div className="container">
          <div className={styles.distinctionGrid}>
            <div className={styles.distinctionCard}>
              <div className={styles.distinctionIcon}>
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className={styles.distinctionTitle}>Senior Residency Appointments</h3>
                <p className={styles.distinctionDesc}>
                  Hospital-based clinical service encompassing labor ward supervision, high-risk obstetric emergencies, routine antenatal care, and elective/emergency surgeries.
                </p>
              </div>
            </div>

            <div className={styles.distinctionCard}>
              <div className={styles.distinctionIcon}>
                <Award size={22} />
              </div>
              <div>
                <h3 className={styles.distinctionTitle}>Fellowships &amp; Advanced Training</h3>
                <p className={styles.distinctionDesc}>
                  Subspecialty focus in minimally invasive gynaecological endoscopy, assisted reproductive technologies, and oncological pain &amp; palliative care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Experience Timeline */}
      <section className="section-padding">
        <div className="container container-narrow">
          <SectionHeading
            eyebrow="Chronological Service"
            title="Professional Trajectory"
            subtitle="Representing appointments faithfully as documented in the curriculum vitae."
          />

          <Timeline items={DOCTOR.experience} type="experience" />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

import React, { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SkillCategory from '../../components/SkillCategory/SkillCategory';
import CTA from '../../components/CTA/CTA';
import { DOCTOR } from '../../data/doctor';
import styles from './Expertise.module.css';

export default function Expertise() {
  const [filter, setFilter] = useState('all');

  const categories = DOCTOR.expertiseCategories;
  const filteredCategories = filter === 'all' 
    ? categories 
    : categories.filter(c => c.id === filter);

  return (
    <div className={styles.expertisePage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Clinical Expertise</span>
          <h1 className={styles.pageTitle}>Clinical Expertise &amp; Skills</h1>
          <p className={styles.pageLead}>
            A structured breakdown of clinical diagnostic capabilities, surgical and procedural proficiencies, obstetric care, reproductive medicine, and palliative support.
          </p>
        </div>
      </section>

      {/* Filter Chips / Jump Bar */}
      <section className={styles.filterBar}>
        <div className="container">
          <div className={styles.filterScroller}>
            <button
              className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('all')}
            >
              All Clinical Domains ({categories.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                className={`${styles.filterBtn} ${filter === c.id ? styles.activeFilter : ''}`}
                onClick={() => setFilter(c.id)}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.categoriesGrid}>
            {filteredCategories.map((category) => (
              <SkillCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Patient Centered Banner */}
      <section className={styles.patientCareStrip}>
        <div className="container container-narrow">
          <div className={styles.patientCareBox}>
            <h3 className={styles.careTitle}>Compassion, Discretion &amp; Evidence-Based Standards</h3>
            <p className={styles.careText}>
              Every clinical decision is grounded in contemporary medical literature and guidelines, combined with a compassionate environment where patient comfort, privacy, and questions are treated with the highest degree of medical integrity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

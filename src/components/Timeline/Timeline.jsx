import React from 'react';
import { Calendar, Building, Award, Stethoscope, ChevronRight } from 'lucide-react';
import styles from './Timeline.module.css';

export default function Timeline({ items, type = 'experience' }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => {
        const isEmployment = item.isEmployment;
        const isFellowship = item.type === 'fellowship' || item.category === 'Fellowship';
        const isTraining = item.type === 'training' || item.category === 'Specialized Training';

        return (
          <div key={index} className={styles.timelineItem}>
            {/* Left timeline indicator */}
            <div className={styles.timelineMarker}>
              <div className={`${styles.markerDot} ${isEmployment ? styles.dotEmployment : styles.dotTraining}`}>
                {isEmployment ? <Building size={14} /> : isFellowship ? <Award size={14} /> : <Stethoscope size={14} />}
              </div>
              <div className={styles.markerLine} />
            </div>

            {/* Timeline content card */}
            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <div className={styles.categoryBadgeGroup}>
                  {item.category && (
                    <span className={`${styles.badge} ${isEmployment ? styles.badgeEmployment : styles.badgeTraining}`}>
                      {item.category}
                    </span>
                  )}
                  {item.type && (
                    <span className={`${styles.badge} ${item.type === 'fellowship' ? styles.badgeTraining : styles.badgeDefault}`}>
                      {item.type.toUpperCase()}
                    </span>
                  )}
                  <span className={styles.periodText}>
                    <Calendar size={13} />
                    {item.period || item.year}
                  </span>
                </div>
              </div>

              <h3 className={styles.roleTitle}>{item.role || item.degree}</h3>
              
              <div className={styles.institutionRow}>
                <Building size={15} className={styles.iconSubtle} />
                <span className={styles.institutionName}>{item.hospital || item.institution}</span>
              </div>

              {(item.description || item.details) && (
                <p className={styles.description}>
                  {item.description || item.details}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

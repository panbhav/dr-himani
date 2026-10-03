import React from 'react';
import { BookOpen, ExternalLink, Calendar, User } from 'lucide-react';
import styles from './PublicationCard.module.css';

export default function PublicationCard({ publication }) {
  return (
    <article className={styles.card}>
      <div className={styles.topMeta}>
        <span className={styles.typeTag}>{publication.type}</span>
        <span className={styles.dateMeta}>
          <Calendar size={13} />
          {publication.date}
        </span>
      </div>

      <h3 className={styles.title}>{publication.title}</h3>

      <div className={styles.journalRow}>
        <BookOpen size={16} className={styles.journalIcon} />
        <span className={styles.journalName}>{publication.journal}</span>
        {publication.citation && (
          <span className={styles.citation}>• {publication.citation}</span>
        )}
      </div>

      <div className={styles.authorsRow}>
        <User size={15} className={styles.authorIcon} />
        <p className={styles.authorsText}>{publication.authors}</p>
      </div>

      {publication.doi && (
        <div className={styles.doiFooter}>
          <span className={styles.doiLabel}>DOI / Citation Ref:</span>
          <span className={styles.doiValue}>{publication.doi}</span>
        </div>
      )}
    </article>
  );
}

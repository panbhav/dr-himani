import React from 'react';
import { 
  Stethoscope, 
  Scissors, 
  HeartHandshake, 
  Dna, 
  ShieldAlert, 
  UserCheck, 
  CheckCircle2 
} from 'lucide-react';
import styles from './SkillCategory.module.css';

const ICON_MAP = {
  Stethoscope: Stethoscope,
  Scissors: Scissors,
  HeartHandshake: HeartHandshake,
  Dna: Dna,
  ShieldAlert: ShieldAlert,
  UserCheck: UserCheck
};

export default function SkillCategory({ category }) {
  const IconComponent = ICON_MAP[category.icon] || Stethoscope;

  return (
    <div className={styles.categoryCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconCircle}>
          <IconComponent size={22} />
        </div>
        <div>
          <h3 className={styles.cardTitle}>{category.title}</h3>
          <p className={styles.cardSummary}>{category.summary}</p>
        </div>
      </div>

      <ul className={styles.itemList}>
        {category.items.map((item, index) => (
          <li key={index} className={styles.itemRow}>
            <CheckCircle2 size={16} className={styles.checkIcon} />
            <span className={styles.itemText}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

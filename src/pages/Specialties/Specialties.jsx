import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Scissors, 
  Dna, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import maternalCareImg from '../../assets/maternal-care.jpg';
import endoscopySurgeryImg from '../../assets/endoscopy-surgery.jpg';
import fertilityLabImg from '../../assets/fertility-lab.jpg';
import palliativeCareSuite from '../../assets/palliative-care-suite.jpg';
import CTA from '../../components/CTA/CTA';
import styles from './Specialties.module.css';

export default function Specialties() {
  const specialties = [
    {
      id: 'obstetrics',
      title: 'Obstetrics & High-Risk Maternal Care',
      subtitle: 'Nurturing Mother and Child Through Every Trimester',
      image: maternalCareImg,
      icon: HeartHandshake,
      badge: 'Obstetric Excellence',
      lead: 'Comprehensive antenatal monitoring, high-risk pregnancy management, and postpartum support grounded in demanding residency and senior residency experience.',
      features: [
        'Preconception risk assessment and holistic maternal optimization',
        'Fetal growth monitoring & advanced Doppler ultrasound surveillance',
        'High-risk pregnancy management (Gestational Diabetes, Preeclampsia, Rh Iso-immunization)',
        'Labor ward leadership: Normal delivery, vacuum/forceps assisted delivery & Cesarean sections',
        'Postpartum care, lactation support & postpartum maternal well-being'
      ]
    },
    {
      id: 'endoscopy',
      title: 'Minimally Invasive Gynaecological Endoscopy',
      subtitle: 'Fellowship-Trained Operative Precision (FGES)',
      image: endoscopySurgeryImg,
      icon: Scissors,
      badge: 'Surgical Fellowship',
      lead: 'Fellowship training at Jaipur Doorbeen Hospital in keyhole laparoscopic and hysteroscopic surgeries for faster recovery, minimal scarring, and superior outcomes.',
      features: [
        'Diagnostic and operative hysteroscopy for uterine polyps, septa, and intrauterine adhesions',
        'Laparoscopic ovarian cystectomy and benign ovarian tumor excision',
        'Laparoscopic and abdominal myomectomy (uterine fibroid removal)',
        'Total Laparoscopic Hysterectomy (TLH) and non-descent vaginal hysterectomy',
        'Surgical management and ablation of pelvic endometriosis'
      ]
    },
    {
      id: 'reproductive',
      title: 'Reproductive Medicine & Infertility',
      subtitle: 'Fellowship-Trained (FRM) at Nova Wings Hospital',
      image: fertilityLabImg,
      icon: Dna,
      badge: 'Reproductive Fellowship',
      lead: 'Specialized clinical knowledge in reproductive endocrinology, assisted conception protocols, and compassionate counseling for couples facing fertility challenges.',
      features: [
        'Systematic infertility evaluation, diagnostic workup & ovarian reserve testing',
        'Personalized ovulation induction & transvaginal follicular monitoring',
        'Intrauterine Insemination (IUI) timing, preparation, and insemination protocols',
        'Assisted Reproductive Technology (ART), IVF & ICSI principles and cycle management',
        'PCOS-associated subfertility & recurrent pregnancy loss (RPL) management'
      ]
    },
    {
      id: 'palliative',
      title: 'Pain & Palliative Care Medicine',
      subtitle: 'Specialized Training at Tata Medical Center, Kolkata',
      image: palliativeCareSuite,
      icon: ShieldAlert,
      badge: 'Palliative Care',
      lead: 'Dedicated palliative and supportive medicine ensuring pain relief, comfort, and dignified holistic support for oncological and chronic illnesses.',
      features: [
        'Comprehensive assessment of nociceptive, neuropathic, and breakthrough pain',
        'Opioid titration, adjuvant analgesics & complex symptom control',
        'Advance care planning, goals-of-care discussions & comfort care',
        'Prognosis discussions, empathetic family counseling & bereavement support',
        'Preserving patient dignity and comfort across all illness stages'
      ]
    }
  ];

  return (
    <div className={styles.specialtiesPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Clinical Specialties</span>
          <h1 className={styles.pageTitle}>Clinical Specialties &amp; Procedures</h1>
          <p className={styles.pageLead}>
            Four core disciplines combining surgical expertise, reproductive fellowship credentials, and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Specialties Showcase */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.specialtiesList}>
            {specialties.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={item.id} className={`${styles.specialtyCard} ${isEven ? styles.cardReversed : ''}`}>
                  <div className={styles.imageCol}>
                    <img src={item.image} alt={item.title} className={styles.specialtyImg} />
                    <span className={styles.badge}>{item.badge}</span>
                  </div>

                  <div className={styles.contentCol}>
                    <span className={styles.subTitle}>{item.subtitle}</span>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.lead}>{item.lead}</p>

                    <div className={styles.featuresList}>
                      {item.features.map((feat, idx) => (
                        <div key={idx} className={styles.featureRow}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1.5rem' }}>
                      Enquire for this Specialty <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

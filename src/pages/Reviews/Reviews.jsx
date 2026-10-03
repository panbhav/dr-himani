import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  HeartHandshake, 
  Calendar,
  ThumbsUp
} from 'lucide-react';
import patientReviewImg from '../../assets/patient-review.jpg';
import doctorPortrait from '../../assets/doctor-portrait.jpg';
import CTA from '../../components/CTA/CTA';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    category: 'Obstetric & Delivery Care',
    rating: 5,
    comment: ''
  });

  const reviewsList = [
    {
      id: 1,
      name: "Pooja & Rohan M.",
      date: "September 2026",
      category: "Obstetrics",
      rating: 5,
      headline: "The most reassuring guide through a high-risk pregnancy",
      text: "Dr. Himani's calm presence and deep clinical knowledge kept us confident through every ultrasound and labor milestone. She takes the time to explain every parameter with patience and warmth.",
      verified: true,
      tag: "Normal Delivery & Antenatal Care"
    },
    {
      id: 2,
      name: "Sunita G.",
      date: "August 2026",
      category: "Endoscopy",
      rating: 5,
      headline: "Laparoscopic surgery without fear or complications",
      text: "I was diagnosed with severe ovarian cysts and fibroids. Dr. Himani explained the laparoscopic procedure with complete transparency. My recovery was remarkably fast with almost invisible incisions.",
      verified: true,
      tag: "Laparoscopic Myomectomy"
    },
    {
      id: 3,
      name: "Dr. K. Sharma & Family",
      date: "July 2026",
      category: "Reproductive",
      rating: 5,
      headline: "Genuine medical integrity and evidence-based guidance",
      text: "After 3 years of anxious consultations elsewhere, Dr. Himani's structured approach to our fertility workup gave us clarity. She avoids unnecessary invasive tests and focuses on evidence-based protocols.",
      verified: true,
      tag: "Fertility Evaluation & Ovulation Induction"
    },
    {
      id: 4,
      name: "Meenakshi V.",
      date: "June 2026",
      category: "Palliative",
      rating: 5,
      headline: "Compassionate symptom and pain management",
      text: "When my mother suffered from severe pelvic pain complications, Dr. Himani's palliative and pain care training from Tata Medical Center was evident. Her holistic bedside care brought our entire family comfort.",
      verified: true,
      tag: "Palliative Pain Care"
    },
    {
      id: 5,
      name: "Ananya B.",
      date: "May 2026",
      category: "Obstetrics",
      rating: 5,
      headline: "A doctor who truly listens without rushing you",
      text: "In times when hospital OPDs feel rushed, Dr. Himani gave me undivided attention. Her emphasis on patient confidentiality and emotional reassurance makes all the difference in women's healthcare.",
      verified: true,
      tag: "Maternal Health & Antenatal Care"
    },
    {
      id: 6,
      name: "Deepika R.",
      date: "April 2026",
      category: "Endoscopy",
      rating: 5,
      headline: "Exceptional diagnostic hysteroscopy experience",
      text: "Dr. Himani performed my diagnostic hysteroscopy seamlessly. Clean technique, zero post-procedure discomfort, and thoroughly detailed post-operative counseling.",
      verified: true,
      tag: "Diagnostic Hysteroscopy"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredReviews = filter === 'all' 
    ? reviewsList 
    : reviewsList.filter(r => r.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className={styles.reviewsPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Patient Reviews</span>
          <h1 className={styles.pageTitle}>Patient Care &amp; Reviews</h1>
          <p className={styles.pageLead}>
            Real experiences from mothers, surgical patients, and families guided by Dr. Himani's empathetic clinical care.
          </p>
        </div>
      </section>

      {/* Trust & Aggregate Score Bar */}
      <section className={styles.scoreSection}>
        <div className="container">
          <div className={styles.scoreCard}>
            <div className={styles.scoreLeft}>
              <div className={styles.bigScore}>5.0</div>
              <div>
                <div className={styles.starsGroup}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#C2A68D" stroke="#C2A68D" />
                  ))}
                </div>
                <span className={styles.scoreText}>Consistent 5-Star Patient Satisfaction Score</span>
              </div>
            </div>

            <div className={styles.scoreFeatures}>
              <div className={styles.scoreFeat}>
                <CheckCircle2 size={16} />
                <span>Empathetic Clinical Listening</span>
              </div>
              <div className={styles.scoreFeat}>
                <CheckCircle2 size={16} />
                <span>Strict Patient Confidentiality</span>
              </div>
              <div className={styles.scoreFeat}>
                <CheckCircle2 size={16} />
                <span>Minimally Invasive Precision</span>
              </div>
            </div>

            <button 
              onClick={() => setShowForm(!showForm)} 
              className="btn-secondary"
            >
              {showForm ? 'Close Form' : 'Write a Review'}
            </button>
          </div>
        </div>
      </section>

      {/* Review submission collapse */}
      {showForm && (
        <section className={styles.writeReviewSection}>
          <div className="container container-narrow">
            <div className={styles.writeFormCard}>
              <h3 className={styles.formTitle}>Share Your Consultation Experience</h3>
              <p className={styles.formSub}>Your feedback helps other women and families make informed healthcare decisions.</p>

              {submitted ? (
                <div className={styles.submittedMsg}>
                  <CheckCircle2 size={36} color="var(--color-secondary)" />
                  <h4>Thank You, {newReview.name}!</h4>
                  <p>Your review has been submitted for moderation and patient privacy compliance.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.reviewForm}>
                  <div className={styles.formRow}>
                    <div className={styles.inputWrap}>
                      <label>Your Name / Pseudonym *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Shalini S."
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.inputWrap}>
                      <label>Care Category *</label>
                      <select 
                        value={newReview.category}
                        onChange={(e) => setNewReview({ ...newReview, category: e.target.value })}
                        className={styles.select}
                      >
                        <option>Obstetric & Delivery Care</option>
                        <option>Laparoscopic / Endoscopic Surgery</option>
                        <option>Fertility & Reproductive Medicine</option>
                        <option>Pain & Palliative Support</option>
                        <option>General Gynaecology</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputWrap}>
                    <label>Your Experience *</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Share how Dr. Himani's care helped you..."
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Submit Review <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Filter & Grid */}
      <section className="section-padding">
        <div className="container">
          
          <div className={styles.filterRow}>
            <button 
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterActive : ''}`}
              onClick={() => setFilter('all')}
            >
              All Care Areas ({reviewsList.length})
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'obstetrics' ? styles.filterActive : ''}`}
              onClick={() => setFilter('obstetrics')}
            >
              Maternal &amp; Delivery
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'endoscopy' ? styles.filterActive : ''}`}
              onClick={() => setFilter('endoscopy')}
            >
              Laparoscopy &amp; Surgery
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'reproductive' ? styles.filterActive : ''}`}
              onClick={() => setFilter('reproductive')}
            >
              Fertility Care
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'palliative' ? styles.filterActive : ''}`}
              onClick={() => setFilter('palliative')}
            >
              Pain &amp; Palliative Care
            </button>
          </div>

          <div className={styles.reviewsGrid}>
            {filteredReviews.map((r) => (
              <article key={r.id} className={styles.reviewCard}>
                <div className={styles.cardTop}>
                  <div className={styles.cardStars}>
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#C2A68D" stroke="#C2A68D" />
                    ))}
                  </div>
                  <span className={styles.reviewDate}>{r.date}</span>
                </div>

                <h3 className={styles.headline}>"{r.headline}"</h3>
                <p className={styles.reviewText}>{r.text}</p>

                <div className={styles.cardFooter}>
                  <div>
                    <h4 className={styles.patientName}>{r.name}</h4>
                    <span className={styles.reviewTag}>{r.tag}</span>
                  </div>
                  {r.verified && (
                    <span className={styles.verifiedBadge}>
                      <ShieldCheck size={14} /> Verified Patient
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <CTA />
    </div>
  );
}

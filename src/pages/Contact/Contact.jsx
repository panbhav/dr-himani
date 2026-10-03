import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ContactCard from '../../components/ContactCard/ContactCard';
import { DOCTOR } from '../../data/doctor';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Clinical Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate inquiry transmission
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.contactPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.breadcrumb}>Home / Contact</span>
          <h1 className={styles.pageTitle}>Professional Enquiries</h1>
          <p className={styles.pageLead}>
            Direct communication channels for patient consultations, academic correspondence, and professional collaboration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Contact Info Card */}
            <div>
              <ContactCard />
            </div>

            {/* Right: Enquiry Form */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send an Enquiry</h2>
                <p className={styles.formSubtitle}>
                  Please fill out the form below. For urgent matters, please use the direct telephone contact provided.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <CheckCircle size={48} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Enquiry Recorded</h3>
                  <p className={styles.successText}>
                    Thank you, <strong>{formData.name}</strong>. Your enquiry has been received. You may also initiate immediate contact via telephone at {DOCTOR.contact.phoneDisplay}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ marginTop: '1rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Mrs. Sharma"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.twoCol}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="phone" className={styles.label}>Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-XXXXXXXXXX"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="subject" className={styles.label}>Area of Enquiry</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="Obstetric Care">Obstetric &amp; Antenatal Care</option>
                      <option value="Gynecological Consultation">Gynecological Consultation</option>
                      <option value="Gynaecological Endoscopy">Gynaecological Endoscopy / Surgery</option>
                      <option value="Reproductive Medicine">Reproductive Medicine / Fertility Evaluation</option>
                      <option value="Palliative Support">Pain &amp; Palliative Consultation</option>
                      <option value="Academic Collaboration">Academic / Research Correspondence</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>Message / Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details of your enquiry..."
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                    Send Enquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

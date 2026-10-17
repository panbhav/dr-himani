import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Send, LoaderCircle, CircleCheck } from 'lucide-react';
import hospital from '../../assets/geetanjali-hospital.webp';
import { DOCTOR } from '../../data/doctor';
import { ENQUIRY_TOPICS, submitEnquiry } from '../../services/enquiries';
import ConsultationSteps from '../../components/ConsultationSteps/ConsultationSteps';

const emptyDraft = { name: '', email: '', phone: '', subject: 'General enquiry', message: '', website: '' };
const errors = {
  validation: 'Please check your name, email and message before sending.',
  network: 'We could not connect to the enquiry service. Check your connection and try again.',
  'rate-limit': 'The enquiry service is receiving too many requests. Please wait before trying again.',
  activation: 'Online enquiry delivery is awaiting activation. Please call or email the clinic directly for now.',
  service: 'The enquiry service could not confirm submission. Please try again or contact the clinic directly.',
  timeout: 'The service took too long to respond. Your message may have reached it. Please contact the clinic before sending again.',
};

export default function Contact() {
  const [draft, setDraft] = useState(emptyDraft);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const request = useRef(null);
  const mounted = useRef(true);
  const statusMessage = useRef(null);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; request.current?.abort(); };
  }, []);
  useEffect(() => {
    if (status === 'success' || status === 'error') statusMessage.current?.focus();
  }, [status]);

  const change = (event) => {
    event.target.setCustomValidity('');
    setDraft(previous => ({ ...previous, [event.target.name]: event.target.value }));
    if (status === 'error') { setStatus('idle'); setError(''); }
  };

  const submit = async (event) => {
    event.preventDefault();
    if (request.current) return;
    const form = event.currentTarget;
    form.elements.message.setCustomValidity(draft.message.trim() ? '' : 'Please enter a brief enquiry.');
    if (!form.reportValidity()) return;
    const controller = new AbortController();
    request.current = controller;
    const timeout = setTimeout(() => controller.abort(), 20000);
    setError('');
    setStatus('sending');
    try {
      await submitEnquiry(draft, { signal: controller.signal });
      if (mounted.current) { setStatus('success'); setDraft(emptyDraft); }
    } catch (failure) {
      if (mounted.current) {
        setError(errors[failure.name === 'AbortError' ? 'timeout' : failure.code] || errors.service);
        setStatus('error');
      }
    } finally {
      clearTimeout(timeout);
      request.current = null;
    }
  };

  return <>
    <section className="page-heading">
      <div className="container"><span className="eyebrow">CONTACT & CONSULTATIONS</span><h1>Let’s start with<br /><em>a conversation.</em></h1><p>Ask a question or plan your visit. The clinic confirms consultation availability and appointment times directly.</p></div>
    </section>
    <section className="section-padding">
      <div className="container contact-layout">
        <div className="contact-information">
          <h2>Plan your visit.</h2>
          <a className="contact-method" href={`tel:${DOCTOR.contact.phone}`}><Phone size={21} /><div><small>Call for appointments</small><strong>{DOCTOR.contact.phoneDisplay}</strong></div></a>
          <a className="contact-method" href={`mailto:${DOCTOR.contact.email}`}><Mail size={21} /><div><small>Email</small><strong>{DOCTOR.contact.email}</strong></div></a>
          <a className="contact-method" href={DOCTOR.contact.address.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={22} /><div><small>Practice location</small><strong>{DOCTOR.contact.hospital}</strong><p>{DOCTOR.contact.address.formatted}</p><span className="text-link">Get directions <ArrowUpRight size={15} /></span></div></a>
          <div className="visit-note"><strong>Before you travel</strong><p>Please call to confirm consultation hours, appointment availability and services at this location.</p></div>
          <img className="hospital-image" src={hospital} alt="Exterior of Geetanjali Hospital in Alwar" width="727" height="1024" loading="lazy" />
        </div>
        <div className="enquiry-card">
          <h2>Write an enquiry.</h2>
          <p>Send your enquiry directly from this page. The clinic will respond using the contact details you provide. An enquiry does not reserve an appointment.</p>
          {status === 'success' ? (
            <div className="enquiry-success" role="status" tabIndex={-1} ref={statusMessage}>
              <CircleCheck size={38} strokeWidth={1.4} aria-hidden="true" />
              <h3>Enquiry submitted.</h3>
              <p>The enquiry service has accepted your message for the clinic. Please wait for the clinic to confirm your appointment; no time has been reserved.</p>
              <button className="btn-secondary" onClick={() => setStatus('idle')}>Send another enquiry</button>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={submit} aria-busy={status === 'sending'}>
              <fieldset disabled={status === 'sending'}>
                <legend className="sr-only">Your enquiry details</legend>
                <label htmlFor="name">Your name *<input id="name" name="name" autoComplete="name" value={draft.name} onChange={change} required maxLength={100} pattern=".*\S.*" placeholder="Full name" /></label>
                <label htmlFor="email">Email address *<input id="email" type="email" name="email" autoComplete="email" value={draft.email} onChange={change} required maxLength={150} placeholder="you@example.com" /></label>
                <label htmlFor="phone">Phone number (optional)<input id="phone" type="tel" name="phone" autoComplete="tel" value={draft.phone} onChange={change} maxLength={25} placeholder="Your contact number" /></label>
                <label htmlFor="subject">What would you like to discuss?<select id="subject" name="subject" value={draft.subject} onChange={change}>{ENQUIRY_TOPICS.map(topic => <option key={topic}>{topic}</option>)}</select></label>
                <label htmlFor="message">Your message *<textarea id="message" name="message" value={draft.message} onChange={change} required maxLength={1200} rows={5} placeholder="Please share a brief appointment or general enquiry. Avoid medical records or sensitive health information." /></label>
                <div className="form-honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty<input id="website" name="website" value={draft.website} onChange={change} autoComplete="off" tabIndex={-1} /></label></div>
                <p className="form-note">Sending shares your entries with the clinic through <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noreferrer">FormSubmit</a>. Please share medical records directly with the clinic through an agreed channel.</p>
                <button className="btn-primary" type="submit">{status === 'sending' ? <>Sending enquiry… <LoaderCircle className="sending-spinner" size={17} aria-hidden="true" /></> : <>Send enquiry <Send size={16} aria-hidden="true" /></>}</button>
              </fieldset>
              {status === 'error' && <div className="form-status" role="alert" tabIndex={-1} ref={statusMessage}><p>{error}</p><p>Your entries are still here. You can also <a className="text-link" href={`tel:${DOCTOR.contact.phone}`}>call the clinic</a> or <a className="text-link" href={`mailto:${DOCTOR.contact.email}`}>email directly</a>.</p></div>}
            </form>
          )}
        </div>
      </div>
    </section>
    <ConsultationSteps />
  </>;
}

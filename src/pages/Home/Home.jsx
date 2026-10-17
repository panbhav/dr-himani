import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Heart, Flower2, ScanLine, HandHeart, MapPin, GraduationCap, Plus } from 'lucide-react';
import portrait from '../../assets/dr-himani-hero-original.jpeg';
import CareStats from '../../components/CareStats/CareStats';
import ProfessionalCredentials from '../../components/ProfessionalCredentials/ProfessionalCredentials';
import ConsultationSteps from '../../components/ConsultationSteps/ConsultationSteps';
import useScrollReveal from '../../hooks/useScrollReveal';
import conference from '../../assets/dr-himani-conference.webp';
import { DOCTOR } from '../../data/doctor';

const care = [
  { id: 'obstetrics', icon: Heart, title: 'Maternal & Fetal Health', text: 'Comprehensive Antenatal Surveillance, High-Risk Pregnancy Management, Normal/Assisted Delivery and dedicated Postpartum Care.', tag: 'WITH YOU, FROM THE BEGINNING' },
  { id: 'endoscopy', icon: ScanLine, title: 'Gynaecological Endoscopy', text: 'Fellowship-trained Hysteroscopy and Laparoscopy for fibroids, ovarian cysts, abnormal bleeding and pelvic endometriosis.', tag: 'CLARITY AT EVERY STEP' },
  { id: 'reproductive', icon: Flower2, title: 'Fertility & reproductive care', text: 'A considered approach to fertility evaluation, counselling and your next steps.', tag: 'YOUR JOURNEY, YOUR PACE' },
  { id: 'palliative', icon: HandHeart, title: 'Pain & Palliative Care', text: 'Clinical Training in Pain & Palliative Care Medicine, with attention to comfort, dignity and patient and family communication.', tag: 'CARE BEYOND TREATMENT' },
];
export default function Home() {
  const revealRoot = useScrollReveal();
  return <div className="home-page" ref={revealRoot}>
    <section className="home-hero"><div className="container hero-grid">
      <div className="hero-copy"><span className="eyebrow"><span className="status-dot" /> WOMEN’S HEALTH, WITH A HUMAN TOUCH</span>
        <h1>Expert care.<br />A listening ear.<br /><em>Every stage of you.</em></h1>
        <p><strong>Dr. Himani ({DOCTOR.qualificationsDisplay})</strong> is an Obstetrician &amp; Gynaecologist trained at <strong>AIIMS Rishikesh</strong>, with Post-Doctoral Fellowships in Gynaecological Endoscopy and Reproductive Medicine. She also completed Clinical Training in Pain &amp; Palliative Care Medicine.</p>
        <div className="button-row"><Link className="btn-primary" to="/contact">Plan your consultation <ArrowUpRight size={18} /></Link><Link className="text-link" to="/specialties">Explore care <ArrowRight size={17} /></Link></div>
        <div className="hero-qualification"><GraduationCap size={25} /><div><strong>MD · AIIMS Rishikesh</strong><span>MBBS, MD, FGES, FRM</span></div></div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-photo-frame">
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="hero-photo-crop"><img src={portrait} alt="Dr. Himani seated at her consultation desk" width="720" height="1280" fetchPriority="high" /></div>
          <span className="portrait-flower" aria-hidden="true"><Flower2 size={62} strokeWidth={1} /></span>
        </div>
        <figcaption className="portrait-caption">
          <div className="portrait-caption-row">
            <div><span className="portrait-kicker">A PERSONAL APPROACH TO CARE</span><strong>Dr. Himani</strong><span>Obstetrician &amp; Gynaecologist</span></div>
            <Link to="/contact" className="portrait-contact" aria-label="Contact Dr. Himani"><ArrowUpRight size={22} aria-hidden="true" /></Link>
          </div>
          <span className="portrait-location"><MapPin size={14} aria-hidden="true" /> ALWAR, RAJASTHAN</span>
        </figcaption>
      </figure>
    </div></section>
    <CareStats />
    <ProfessionalCredentials />
    <section className="section-padding" id="care"><div className="container"><div className="section-intro" data-reveal><div><span className="eyebrow">HOW I CAN HELP</span><h2>Care that meets you<br /><em>where you are.</em></h2></div><p>Every woman’s health journey is different. Explore care that considers your needs, your comfort and your choices.</p></div><div className="care-grid">{care.map(({ id, icon: Icon, title, text, tag }, i) => <Link key={id} to={`/specialties#${id}`} className="care-card" data-reveal><div className="care-card-top"><Icon size={30} strokeWidth={1.4} /><span>0{i + 1}</span></div><span className="care-tag">{tag}</span><h3>{title}</h3><p>{text}</p><span className="care-card-link">Discover care <ArrowUpRight size={19} /></span></Link>)}</div></div></section>
    <section className="meet-section"><div className="container meet-grid"><div className="meet-photo" data-reveal><img src={conference} alt="Dr. Himani at an academic conference" width="768" height="1024" loading="lazy" /><span>Always learning. Always listening.</span></div><div className="meet-copy" data-reveal><span className="eyebrow">THE PERSON BEHIND THE CARE</span><h2>Hello, I’m Dr. Himani.<br /><em>Let’s talk about you.</em></h2><p>I’m an Obstetrician &amp; Gynaecologist with an MBBS from PGIMS, Rohtak, and an MD in Obstetrics &amp; Gynaecology from AIIMS Rishikesh. My Post-Doctoral Fellowships are in Gynaecological Endoscopy and Reproductive Medicine.</p><p>My approach starts with listening. I believe you should have the time to ask questions, understand your options and feel involved in decisions about your health.</p><Link to="/career" className="text-link">My education & clinical journey <ArrowRight size={18} /></Link><div className="signature">Dr. Himani<span>MBBS · MD · FGES · FRM</span></div></div></div></section>
    <ConsultationSteps />
    <section className="section-padding"><div className="container approach-grid"><div><span className="eyebrow">A LITTLE REASSURANCE</span><h2>Your questions.<br /><em>Space to ask them.</em></h2><p className="muted">A few things to know before your first visit.</p><Link className="text-link" to="/contact">Get in touch <ArrowRight size={17} /></Link></div><div className="faq-list">{[
      ['How do I arrange a consultation?', 'Send an enquiry from the Contact page or call to discuss appointment availability at Geetanjali Hospital, Alwar. Your appointment is confirmed directly by the clinic.'],
      ['What should I bring to my first visit?', 'Bring any previous prescriptions, relevant test reports and a list of medicines you currently take. You can also write down the questions you would like to discuss.'],
      ['Can I discuss fertility concerns?', 'Yes. You can arrange a consultation to discuss fertility evaluation and possible next steps. The clinic can confirm which investigations and treatments are available locally.'],
      ['Where does Dr. Himani consult?', 'The practice address listed is Geetanjali Trauma and Advance Surgical Centre on Delhi Road, Alwar. Please call to confirm the location and timings before travelling.'],
    ].map(([q, a]) => <details key={q}><summary>{q}<Plus size={18} /></summary><p>{a}</p></details>)}</div></div></section>
    <section className="container"><div className="consult-banner" data-reveal><div><span className="eyebrow">LET’S TAKE THE NEXT STEP, TOGETHER</span><h2>Your health deserves<br /><em>a conversation.</em></h2></div><div><Link className="btn-primary" to="/contact">Arrange a consultation <ArrowUpRight size={18} /></Link><a className="banner-phone" href={`tel:${DOCTOR.contact.phone}`}>{DOCTOR.contact.phoneDisplay}</a></div><Flower2 className="banner-flower" size={200} strokeWidth={0.6} aria-hidden="true" /></div></section>
  </div>;
}

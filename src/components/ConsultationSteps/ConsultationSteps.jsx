import { Link } from 'react-router-dom';
import { MessageCircle, CalendarCheck, ClipboardList, ArrowUpRight } from 'lucide-react';

const steps = [
  { title: 'Contact the clinic', icon: MessageCircle, text: 'Send an enquiry or call to discuss what you need and ask about appointment availability.' },
  { title: 'Confirm your appointment', icon: CalendarCheck, text: 'The clinic confirms your consultation time and location directly. Sending a form does not reserve an appointment.' },
  { title: 'Prepare for your visit', icon: ClipboardList, text: 'Bring previous prescriptions, relevant reports, your current medicine list and the questions you would like to ask.' },
];

export default function ConsultationSteps({ compact = false }) {
  return (
    <section className={`consultation-steps ${compact ? 'steps-compact' : 'section-padding'}`} aria-label="Planning your consultation">
      <div className={compact ? undefined : 'container'}>
        <div className="section-intro" data-reveal>
          <div><span className="eyebrow">YOUR FIRST VISIT, MADE SIMPLER</span><h2>Three steps.<br /><em>A little more clarity.</em></h2></div>
          {!compact && <Link className="text-link" to="/contact">Plan your consultation <ArrowUpRight size={17} /></Link>}
        </div>
        <ol className="consultation-steps-list">
          {steps.map(({ title, icon: Icon, text }, index) => (
            <li key={title} data-reveal>
              <div className="consultation-step-top"><Icon size={28} strokeWidth={1.4} aria-hidden="true" /><span aria-hidden="true">0{index + 1}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

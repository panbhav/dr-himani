import { Building2, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTOR } from '../../data/doctor';

export default function ProfessionalCredentials() {
  const residencies = DOCTOR.experience.filter(item => item.category === 'Senior Residency');

  return (
    <section className="profile-credentials section-padding" aria-labelledby="credentials-heading">
      <div className="container">
        <div className="section-intro" data-reveal>
          <div>
            <span className="eyebrow">QUALIFICATIONS & CLINICAL EXPERIENCE</span>
            <h2 id="credentials-heading">A strong foundation.<br /><em>Thoughtful care.</em></h2>
          </div>
          <p>Medical education, Post-Doctoral Fellowships and Clinical Training that inform Dr. Himani’s approach to care.</p>
        </div>

        <div className="credentials-detail-grid">
          <div className="qualification-list" data-reveal>
            {DOCTOR.credentialsSummary.map((credential, index) => (
              <div className="qualification-row" key={credential.title}>
                <span className="qualification-number" aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{credential.title}</h3>
                  <p>{credential.institution}</p>
                </div>
                <GraduationCap size={22} strokeWidth={1.3} aria-hidden="true" />
              </div>
            ))}
          </div>

          <aside className="residency-panel" aria-labelledby="residency-heading" data-reveal>
            <Building2 size={30} strokeWidth={1.3} aria-hidden="true" />
            <span className="eyebrow">HOSPITAL EXPERIENCE</span>
            <h3 id="residency-heading">Senior Residency</h3>
            <p className="residency-lead">Clinical experience across Rohtak and Jaipur.</p>
            <ul>
              {[...residencies].reverse().map(item => <li key={item.hospital}>{item.hospital}</li>)}
            </ul>
            <Link to="/career" className="text-link">Explore the full journey <ArrowUpRight size={17} /></Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

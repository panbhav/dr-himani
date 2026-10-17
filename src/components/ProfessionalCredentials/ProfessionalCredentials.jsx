import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import CareerTimeline from '../CareerTimeline/CareerTimeline';

export default function ProfessionalCredentials() {
  return (
    <section className="profile-credentials section-padding" aria-labelledby="credentials-heading">
      <div className="container">
        <div className="section-intro" data-reveal>
          <div><span className="eyebrow">QUALIFICATIONS & CLINICAL EXPERIENCE</span><h2 id="credentials-heading">A journey of learning.<br /><em>A commitment to care.</em></h2></div>
          <p>Explore the milestones in Dr. Himani’s medical education, hospital experience and advanced training.</p>
        </div>
        <CareerTimeline />
        <Link className="text-link journey-link" to="/career">Explore education & research <ArrowUpRight size={17} /></Link>
      </div>
    </section>
  );
}

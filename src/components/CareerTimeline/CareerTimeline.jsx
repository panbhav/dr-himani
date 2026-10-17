import { GraduationCap, Stethoscope, Building2, Award } from 'lucide-react';
import { DOCTOR } from '../../data/doctor';

const milestones = [
  { title: 'Medical foundation', icon: GraduationCap, entries: [DOCTOR.credentialsSummary[0]] },
  { title: 'Specialist education', icon: Stethoscope, entries: [DOCTOR.credentialsSummary[1]] },
  {
    title: 'Senior Residency', icon: Building2,
    entries: [...DOCTOR.experience].reverse().filter(item => item.category === 'Senior Residency')
      .map(item => ({ title: item.hospital })),
  },
  { title: 'Fellowships & clinical training', icon: Award, entries: DOCTOR.credentialsSummary.slice(2) },
];

export default function CareerTimeline() {
  return (
    <ol className="career-milestones" aria-label="Career milestones">
      {milestones.map(({ title, icon: Icon, entries }, index) => (
        <li className="career-milestone" key={title} data-reveal>
          <div className="milestone-marker" aria-hidden="true"><Icon size={24} strokeWidth={1.4} /><span>0{index + 1}</span></div>
          <h3>{title}</h3>
          <ul>
            {entries.map(entry => <li key={entry.title}><strong>{entry.title}</strong>{entry.institution && <span>{entry.institution}</span>}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}

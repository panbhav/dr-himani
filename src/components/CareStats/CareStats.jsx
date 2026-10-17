import { useEffect, useRef, useState } from 'react';
import { Users, HeartHandshake, GraduationCap, Flower2 } from 'lucide-react';

// Patient and experience totals supplied by the client on 17 October 2026.
const statistics = [
  { value: 1500, suffix: '+', label: 'Patients treated', detail: 'Care built around people', icon: Users },
  { value: 6, suffix: '+', label: 'Years of experience', detail: 'A commitment to women’s health', icon: HeartHandshake },
  { value: 2, suffix: '', label: 'Clinical fellowships', detail: 'Endoscopy & reproductive medicine', icon: GraduationCap },
  { value: 4, suffix: '', label: 'Areas of care', detail: 'Support through different life stages', icon: Flower2 },
];

const formatter = new Intl.NumberFormat('en-IN');

function AnimatedStatistic({ value, suffix, label, detail, icon: Icon }) {
  const element = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;

    let frame;
    let started = false;
    const finish = () => {
      if (!preference.matches) return;
      cancelAnimationFrame(frame);
      setDisplay(value);
      observer.disconnect();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / 1600, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      setDisplay(0);
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.4 });

    observer.observe(element.current);
    preference.addEventListener('change', finish);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener('change', finish);
    };
  }, [value]);

  return (
    <div className="care-stat" ref={element}>
      <Icon className="care-stat-icon" size={26} strokeWidth={1.4} aria-hidden="true" />
      <span className="sr-only">{formatter.format(value)}{suffix} {label}</span>
      <div className="care-stat-number" aria-hidden="true">{formatter.format(display)}<span>{suffix}</span></div>
      <h3 aria-hidden="true">{label}</h3>
      <p>{detail}</p>
    </div>
  );
}

export default function CareStats() {
  return (
    <section className="stats-section" aria-label="Care in numbers">
      <div className="container">
        <div className="stats-panel" data-reveal>
          <div className="stats-intro">
            <span className="eyebrow">EXPERIENCE WITH PURPOSE</span>
            <h2>More than numbers.<br /><em>A commitment to care.</em></h2>
          </div>
          <div className="stats-grid">
            {statistics.map(stat => <AnimatedStatistic key={stat.label} {...stat} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

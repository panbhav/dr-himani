import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const root = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const elements = root.current.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.revealState = 'visible';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    elements.forEach(element => {
      // Keep the first screen immediately readable; animate subsequent sections.
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.dataset.revealState = 'waiting';
        observer.observe(element);
      }
    });
    const showAll = () => {
      if (!preference.matches) return;
      observer.disconnect();
      elements.forEach(element => { delete element.dataset.revealState; });
    };
    preference.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', showAll);
      elements.forEach(element => { delete element.dataset.revealState; });
    };
  }, []);

  return root;
}

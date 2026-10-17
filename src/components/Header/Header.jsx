import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Flower2 } from 'lucide-react';
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { const close = (event) => { if (event.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  return <header className="site-header"><a className="skip-link" href="#main-content">Skip to content</a><div className="container header-inner"><Link to="/" className="brand" aria-label="Dr. Himani home"><Flower2 size={39} strokeWidth={1.3} /><span>Dr. Himani<small>OBSTETRICS & GYNAECOLOGY</small></span></Link><nav id="primary-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">{[['/', 'Home'], ['/specialties', 'Specialties'], ['/career', 'My journey'], ['/contact', 'Contact']].map(([to, text]) => <NavLink end={to === '/'} to={to} key={to} onClick={() => setOpen(false)}>{text}</NavLink>)}</nav><Link to="/contact" className="header-cta">Let’s connect <ArrowUpRight size={17} /></Link><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}

import { useState, useEffect } from 'react';
import bgnLogo from '../assets/bgn-logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Products',    href: '#products' },
  { label: 'About',       href: '#about' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">

        {/* ── Logo ── */}
        <a href="#home" className="navbar-logo" onClick={() => handleNavClick('#home')} aria-label="Baiju Group Home">
          <img src={bgnLogo} alt="Baiju Group BGN Logo" className="logo-img" width="72" height="46" />
        </a>

        {/* ── Desktop nav ── */}
        <nav className="navbar-nav" aria-label="Main navigation">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeLink === link.href ? 'active' : ''}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Actions ── */}
        <div className="navbar-actions">
          <button className="icon-btn" aria-label="Search" id="search-btn">
            <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className="icon-btn cart-btn" aria-label="Shopping cart" id="cart-btn">
            <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="cart-badge">3</span>
          </button>
          <a href="#contact" className="btn-gold nav-cta" id="nav-cta-btn">
            Get Quote
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          id="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeLink === link.href ? 'active' : ''}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn-gold mobile-cta" onClick={() => setMenuOpen(false)} id="mobile-cta-btn">
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}

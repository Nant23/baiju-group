import bgnLogo from '../assets/bgn-logo.png';
import './Footer.css';

const footerLinks = {
  'Products': ['Curtains', 'Carpets & Rugs', 'Mattresses', 'Bedsheets', 'Cushions & Pillows', 'Mats & Runners'],
  'Company': ['About Us', 'Our Story', 'Careers', 'Press', 'Blog'],
  'Support': ['FAQs', 'Shipping Policy', 'Returns & Refunds', 'Size Guide', 'Care Instructions'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer" aria-label="Site footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={bgnLogo} alt="Baiju Group BGN Logo" className="footer-logo-img" height="52" />
            </div>
            <p className="footer-brand-desc">
              Nepal's premier destination for luxury home textiles and décor accessories. 
              Transforming spaces since 2009, one home at a time.
            </p>

            {/* Social */}
            <div className="footer-social" aria-label="Social media links">
              {[
                { id: 'facebook', label: 'Facebook', href: '#', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { id: 'instagram', label: 'Instagram', href: '#', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' },
                { id: 'youtube', label: 'YouTube', href: '#', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z' },
              ].map(s => (
                <a
                  key={s.id}
                  href={s.href}
                  className="social-link"
                  aria-label={s.label}
                  id={`social-${s.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={s.path}/>
                    {s.id === 'instagram' && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M17.5 6.5h.01"/>
                      </>
                    )}
                    {s.id === 'youtube' && (
                      <polygon points="10 15 15 12 10 9 10 15"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className="footer-col" key={heading}>
              <h4 className="footer-col-heading">{heading}</h4>
              <ul>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer-link" id={`footer-${link.replace(/\s+/g, '-').toLowerCase()}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year} Baiju Group. All rights reserved. Made with ❤️ in Kathmandu.
          </p>
          <div className="footer-legal">
            <a href="#" id="footer-privacy">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" id="footer-terms">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="#" id="footer-sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

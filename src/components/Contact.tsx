import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(''); }
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact and newsletter">
      {/* Newsletter banner */}
      <div className="newsletter-banner">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2 className="newsletter-title">
              Get <span>Exclusive Deals</span> & Design Inspiration
            </h2>
            <p>Join 10,000+ subscribers. No spam — only curated home decor ideas and special offers.</p>
          </div>
          {subscribed ? (
            <div className="subscribed-msg" role="alert">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Thank you for subscribing!
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe} aria-label="Newsletter signup">
              <input
                type="email"
                id="newsletter-email"
                className="newsletter-input"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn-primary newsletter-submit" id="newsletter-submit">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact section */}
      <div className="container contact-grid">
        {/* Info */}
        <div className="contact-info">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's Design Your <span>Perfect Space</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a single item or a full home makeover, 
            our team is here to guide you every step of the way.
          </p>

          <div className="contact-details">
            {[
              {
                id: 'location',
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Visit Our Showroom',
                value: 'Putalisadak, Kathmandu, Nepal',
              },
              {
                id: 'phone',
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ),
                label: 'Call Us',
                value: '+977 01-4512345 / +977 9801234567',
              },
              {
                id: 'email-contact',
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email Us',
                value: 'info@baijugroup.com.np',
              },
              {
                id: 'hours',
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                label: 'Opening Hours',
                value: 'Sun–Fri: 9 AM – 7 PM',
              },
            ].map(d => (
              <div className="detail-item" key={d.id} id={`contact-${d.id}`}>
                <div className="detail-icon" aria-hidden="true">{d.icon}</div>
                <div>
                  <div className="detail-label">{d.label}</div>
                  <div className="detail-value">{d.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success" role="alert">
              <div className="success-icon" aria-hidden="true">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
              <button className="btn-outline" onClick={() => setSent(false)} id="send-another-btn">
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleContact} aria-label="Contact form" noValidate>
              <h3 className="form-title">Send Us a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    placeholder="+977 98XXXXXXXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-interest">Interested In</label>
                <select id="contact-interest" defaultValue="">
                  <option value="" disabled>Select a product category</option>
                  <option>Curtains</option>
                  <option>Carpets & Rugs</option>
                  <option>Mattresses</option>
                  <option>Bedsheets</option>
                  <option>Cushions & Pillows</option>
                  <option>Mats & Runners</option>
                  <option>Custom Order</option>
                  <option>Bulk / Commercial Order</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit" id="contact-submit">
                Send Message
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

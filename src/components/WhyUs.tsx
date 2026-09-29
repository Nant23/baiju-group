import './WhyUs.css';

const features = [
  {
    id: 'quality',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
    title: 'Premium Quality',
    desc: 'Every product is rigorously tested and handpicked from the finest mills and craftspeople across South Asia.',
  },
  {
    id: 'variety',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: '200+ Designs',
    desc: 'From classic Persian motifs to contemporary minimalist styles — we carry designs for every taste and décor theme.',
  },
  {
    id: 'delivery',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'Same-day delivery within Kathmandu Valley. Pan-Nepal shipping available for all orders above NPR 2,000.',
  },
  {
    id: 'custom',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Custom Orders',
    desc: 'Need specific dimensions, colors, or fabrics? Our design team creates bespoke pieces tailored exactly to your vision.',
  },
  {
    id: 'price',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Best Price Guarantee',
    desc: 'We match any competitor\'s price on identical products. Quality home décor doesn\'t have to break your budget.',
  },
  {
    id: 'support',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Our dedicated customer service team is always ready to help — from product selection to post-purchase care.',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus-section" id="about" aria-label="Why choose Baiju Group">
      <div className="container">
        <div className="whyus-layout">
          {/* Left: text */}
          <div className="whyus-left">
            <div className="section-tag">Why Baiju Group</div>
            <h2 className="section-title">
              15 Years of <span>Excellence</span> in Home Decor
            </h2>
            <p className="section-subtitle">
              Founded in Kathmandu, Baiju Group has been transforming Nepali homes since 2009. 
              We bring together the finest craftsmanship, global design sensibilities, and unbeatable value.
            </p>

            <div className="whyus-metrics">
              {[
                { value: '5,000+', label: 'Happy Families' },
                { value: '15+', label: 'Years in Business' },
                { value: '98%', label: 'Satisfaction Rate' },
              ].map((m) => (
                <div className="metric" key={m.label}>
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" id="whyus-quote-btn">
              Request a Free Consultation
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right: feature grid */}
          <div className="whyus-right">
            <div className="features-grid" role="list">
              {features.map((f) => (
                <div className="feature-card" key={f.id} role="listitem" id={`feature-${f.id}`}>
                  <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

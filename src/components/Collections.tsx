import './Collections.css';

const categories = [
  {
    id: 'curtains',
    icon: '🪟',
    name: 'Curtains',
    desc: 'Velvet, linen & blackout',
    count: '40+ styles',
    color: '#2a3fad',
  },
  {
    id: 'carpets',
    icon: '🧶',
    name: 'Carpets & Rugs',
    desc: 'Persian, geometric & modern',
    count: '60+ designs',
    color: '#c9a84c',
  },
  {
    id: 'mattresses',
    icon: '🛏️',
    name: 'Mattresses',
    desc: 'Memory foam & spring hybrid',
    count: '20+ options',
    color: '#4a7fc1',
  },
  {
    id: 'bedsheets',
    icon: '🛌',
    name: 'Bedsheets',
    desc: 'Egyptian cotton & microfiber',
    count: '80+ sets',
    color: '#162169',
  },
  {
    id: 'cushions',
    icon: '🪑',
    name: 'Cushions & Pillows',
    desc: 'Embroidered & velvet',
    count: '50+ varieties',
    color: '#e8c96a',
  },
  {
    id: 'mats',
    icon: '🪣',
    name: 'Mats & Runners',
    desc: 'Door, bath & kitchen mats',
    count: '30+ types',
    color: '#3d5ad4',
  },
];

export default function Collections() {
  return (
    <section className="collections-section" id="collections" aria-label="Product collections">
      <div className="container">
        <div className="collections-header">
          <div className="section-tag">Our Collections</div>
          <h2 className="section-title">
            Everything for Your <span>Dream Home</span>
          </h2>
          <p className="section-subtitle">
            Browse our wide range of premium home textiles and decor accessories, 
            carefully sourced for unmatched quality and style.
          </p>
        </div>

        <div className="collections-grid" role="list">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href={`#products`}
              className="collection-card"
              role="listitem"
              id={`collection-${cat.id}`}
              style={{ '--card-color': cat.color, '--delay': `${i * 0.08}s` } as React.CSSProperties}
              aria-label={`Browse ${cat.name} collection`}
            >
              <div className="card-glow" aria-hidden="true" />
              <div className="card-icon" aria-hidden="true">
                <span>{cat.icon}</span>
              </div>
              <div className="card-body">
                <h3 className="card-name">{cat.name}</h3>
                <p className="card-desc">{cat.desc}</p>
              </div>
              <div className="card-footer">
                <span className="card-count">{cat.count}</span>
                <span className="card-arrow" aria-hidden="true">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

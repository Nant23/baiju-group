import heroBanner from '../assets/hero_banner.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-label="Hero banner">
      {/* Background image */}
      <div className="hero-bg">
        <img src={heroBanner} alt="Luxury home decor living room" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      {/* Grid pattern */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Content */}
      <div className="container hero-content">
        <div className="hero-text">
          <div className="section-tag hero-tag">
            ✦ Nepal's Finest Home Decor
          </div>

          <h1 className="hero-title">
            Transform Your
            <br />
            <span className="hero-title-accent">Living Spaces</span>
            <br />
            Into Art
          </h1>

          <p className="hero-desc">
            Discover our curated collection of premium curtains, carpets, mattresses, 
            bedsheets, cushions, and home accessories — crafted for those who appreciate 
            elegance and quality.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn-primary" id="hero-shop-btn">
              Shop Collection
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className="btn-outline" id="hero-about-btn">
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Premium Products</span>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="hero-badge" aria-label="Premium quality badge">
          <div className="badge-ring">
            <svg viewBox="0 0 100 100" className="badge-svg">
              <path id="circle-text" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
              <text>
                <textPath href="#circle-text" startOffset="0%">
                  PREMIUM QUALITY • HOME DECOR • BAIJU GROUP •
                </textPath>
              </text>
            </svg>
          </div>
          <div className="badge-center">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.2"/>
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

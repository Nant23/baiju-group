import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Shrestha',
    role: 'Interior Designer, Kathmandu',
    initials: 'PS',
    color: '#2a3fad',
    rating: 5,
    text: 'Baiju Group has been my go-to supplier for all interior projects. The quality of their velvet curtains is absolutely unmatched — clients always ask where I source them. Highly recommended to every designer!',
  },
  {
    id: 2,
    name: 'Rajesh Adhikari',
    role: 'Homeowner, Lalitpur',
    initials: 'RA',
    color: '#c9a84c',
    rating: 5,
    text: 'Ordered a custom carpet for our living room and the result was breathtaking. The team was incredibly helpful in choosing the right pattern and size. Delivery was prompt and the packaging was immaculate.',
  },
  {
    id: 3,
    name: 'Sunita Rai',
    role: 'Hotel Manager, Pokhara',
    initials: 'SR',
    color: '#162169',
    rating: 5,
    text: 'We furnished all 40 rooms of our hotel with Baiju Group\'s bedsheets and mattresses. The bulk pricing was fair, quality is consistent, and guests constantly compliment the comfort. A true business partner.',
  },
  {
    id: 4,
    name: 'Bikash Thapa',
    role: 'Real Estate Developer',
    initials: 'BT',
    color: '#4a7fc1',
    rating: 5,
    text: 'For our luxury apartment project, we needed premium curtains across 20 units. Baiju Group handled the custom measurements, installation guidance, and delivered perfectly on time. Exceptional service!',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section className="testimonials-section" id="testimonials" aria-label="Customer testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">
            Loved by <span>Thousands</span> of Customers
          </h2>
          <p className="section-subtitle">
            Real reviews from real customers who've transformed their spaces with Baiju Group.
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonials-carousel" aria-live="polite">
          <div className="testimonials-track">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial-card ${i === active ? 'active' : i === (active + 1) % testimonials.length ? 'next' : i === (active - 1 + testimonials.length) % testimonials.length ? 'prev' : 'hidden'}`}
                aria-hidden={i !== active}
                id={`testimonial-${t.id}`}
              >
                {/* Quote icon */}
                <div className="quote-icon" aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M10.5 21C10.5 17.134 13.634 14 17.5 14V14C17.5 14 14.5 14 14.5 18C14.5 19.933 16.067 21.5 18 21.5C18 21.5 17.5 25 13.5 25C11.843 25 10.5 23.657 10.5 22V21ZM22.5 21C22.5 17.134 25.634 14 29.5 14V14C29.5 14 26.5 14 26.5 18C26.5 19.933 28.067 21.5 30 21.5C30 21.5 29.5 25 25.5 25C23.843 25 22.5 23.657 22.5 22V21Z" fill="currentColor" opacity="0.15"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="t-stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#d4af37">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>

                <p className="t-text">"{t.text}"</p>

                {/* Author */}
                <div className="t-author">
                  <div className="t-avatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }} aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Previous testimonial" id="testimonial-prev">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="carousel-dots" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to testimonial ${i + 1}`}
                  id={`dot-${i}`}
                />
              ))}
            </div>

            <button className="carousel-btn" onClick={next} aria-label="Next testimonial" id="testimonial-next">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="trust-row" aria-label="Trust indicators">
          {[
            { icon: '🏆', text: 'Award Winning Service' },
            { icon: '🔒', text: 'Secure Payments' },
            { icon: '↩️', text: '30-Day Returns' },
            { icon: '🌟', text: 'ISO Certified Quality' },
          ].map(b => (
            <div className="trust-badge" key={b.text}>
              <span className="trust-icon" aria-hidden="true">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

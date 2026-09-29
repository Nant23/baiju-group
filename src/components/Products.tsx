import { useState } from 'react';
import curtainsImg from '../assets/product_curtains.jpg';
import carpetImg from '../assets/product_carpet.jpg';
import mattressImg from '../assets/product_mattress.jpg';
import bedsheetImg from '../assets/product_bedsheet.jpg';
import cushionImg from '../assets/product_cushion.jpg';
import './Products.css';

const categories = ['All', 'Curtains', 'Carpets', 'Mattresses', 'Bedsheets', 'Cushions'];

const products = [
  {
    id: 1,
    name: 'Royal Velvet Curtains',
    category: 'Curtains',
    price: 'NPR 4,500',
    originalPrice: 'NPR 6,000',
    badge: 'Bestseller',
    badgeType: 'hot',
    image: curtainsImg,
    rating: 4.9,
    reviews: 124,
    desc: 'Floor-to-ceiling velvet curtains with gold tie-backs. Available in 8 colors.',
  },
  {
    id: 2,
    name: 'Persian Heritage Rug',
    category: 'Carpets',
    price: 'NPR 12,000',
    originalPrice: 'NPR 15,000',
    badge: '20% OFF',
    badgeType: 'sale',
    image: carpetImg,
    rating: 4.8,
    reviews: 89,
    desc: 'Hand-knotted Persian-inspired rug with intricate geometric patterns. 5×7 ft.',
  },
  {
    id: 3,
    name: 'CloudComfort Pro Mattress',
    category: 'Mattresses',
    price: 'NPR 28,000',
    originalPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: mattressImg,
    rating: 4.9,
    reviews: 56,
    desc: '13" hybrid memory foam mattress with cooling gel layers. 10-year warranty.',
  },
  {
    id: 4,
    name: 'Lavender Dreams Bedsheet Set',
    category: 'Bedsheets',
    price: 'NPR 3,200',
    originalPrice: 'NPR 4,500',
    badge: 'Bestseller',
    badgeType: 'hot',
    image: bedsheetImg,
    rating: 4.7,
    reviews: 201,
    desc: '400 thread-count Egyptian cotton. Set includes flat sheet, fitted sheet & 2 pillowcases.',
  },
  {
    id: 5,
    name: 'Embroidered Cushion Collection',
    category: 'Cushions',
    price: 'NPR 1,800',
    originalPrice: null,
    badge: null,
    badgeType: null,
    image: cushionImg,
    rating: 4.8,
    reviews: 78,
    desc: 'Set of 5 handcrafted velvet cushions with gold embroidery. Inner filling included.',
  },
  {
    id: 6,
    name: 'Ivory Linen Drapes',
    category: 'Curtains',
    price: 'NPR 3,800',
    originalPrice: 'NPR 5,200',
    badge: '27% OFF',
    badgeType: 'sale',
    image: curtainsImg,
    rating: 4.6,
    reviews: 45,
    desc: 'Light filtering linen drapes with a natural, airy feel. Machine washable.',
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const toggleWishlist = (id: number) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="products-section" id="products" aria-label="Featured products">
      <div className="container">
        <div className="products-header">
          <div className="section-tag">Featured Products</div>
          <h2 className="section-title">
            Crafted for <span>Luxury Living</span>
          </h2>
          <p className="section-subtitle">
            Each product is hand-selected for quality, durability, and aesthetic excellence.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Product categories">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              id={`filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="products-grid" role="list">
          {filtered.map(product => (
            <article
              key={product.id}
              className="product-card"
              role="listitem"
              id={`product-${product.id}`}
            >
              {/* Image */}
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />

                {/* Badge */}
                {product.badge && (
                  <span className={`product-badge badge-${product.badgeType}`}>
                    {product.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                  aria-label={wishlist.includes(product.id) ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                  onClick={() => toggleWishlist(product.id)}
                  id={`wishlist-${product.id}`}
                >
                  <svg width="18" height="18" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>

                {/* Quick view overlay */}
                <div className="product-overlay">
                  <button className="btn-primary overlay-btn" id={`quickview-${product.id}`}>
                    Quick View
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>

                {/* Rating */}
                <div className="product-rating" aria-label={`Rating: ${product.rating} out of 5, ${product.reviews} reviews`}>
                  <div className="stars" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={i < Math.round(product.rating) ? '#d4af37' : 'none'}
                        stroke="#d4af37"
                        strokeWidth="2"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="rating-number">{product.rating}</span>
                  <span className="rating-count">({product.reviews})</span>
                </div>

                {/* Price & CTA */}
                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-current">{product.price}</span>
                    {product.originalPrice && (
                      <span className="price-original">{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="add-to-cart" aria-label={`Add ${product.name} to cart`} id={`addcart-${product.id}`}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="products-cta">
          <a href="#collections" className="btn-outline" id="view-all-btn">
            View All Products
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

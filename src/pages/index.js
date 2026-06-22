import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        {/* Left text column */}
        <div className={styles.heroContent}>
          <div className="badge badge--success margin-bottom--md" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 16px', borderRadius: '20px', fontWeight: 600 }}>
            ✨ Next-Gen Grocery E-Commerce
          </div>
          <h1 className={styles.heroTitle}>
            Freshness Delivered <br />
            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              To Your Doorstep
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Hana Go is a state-of-the-art grocery e-commerce platform bringing fresh farm-to-table vegetables, premium organic fruits, and daily essentials straight to your kitchen.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg gradient-btn"
              to="/docs/intro">
              Get Started with Hana Go ⏱️
            </Link>
          </div>
        </div>

        {/* Right mockup column with physical smartphone shell */}
        <div className={styles.heroImageContainer}>
          <div className={styles.glowCircle}></div>
          <div className={clsx(styles.phoneWrapper, 'floating-elem')}>
            {/* Physical Side Buttons */}
            <div className={styles.volumeUp}></div>
            <div className={styles.volumeDown}></div>
            <div className={styles.powerButton}></div>

            {/* Smart Phone Frame */}
            <div className={styles.phoneMockup}>
              {/* Speaker Grill */}
              <div className={styles.speakerGrill}></div>

              {/* Status bar */}
              <div className={styles.notchContainer}>
                <span>9:41</span>
                {/* Dynamic Island Notch with Camera Lens */}
                <div className={styles.notch}>
                  <div className={styles.cameraLens}></div>
                </div>
                <div className={styles.statusBarRight}>
                  📶 🛜 🔋
                </div>
              </div>

              {/* Header / Location Selection */}
              <div className={styles.phoneHeader}>
                <span className={styles.deliverLabel}>Deliver to</span>
                <div className={styles.locationRow}>
                  <div className={styles.locationBadge}>
                    🟢 5 mins <span style={{ opacity: 0.6 }}>|</span> Fukakusa Ya... ❯
                  </div>
                  <div className={styles.shopSelector}>
                    🏪 Shop ▾
                  </div>
                </div>
                <div className={styles.phoneSearchBox}>
                  <span>🔍 Search food...</span>
                  <span>🎛️</span>
                </div>
              </div>

              {/* Phone Screen Body Content */}
              <div className={styles.phoneBody}>
                {/* Horizontal pills */}
                <div className={styles.horizontalPills}>
                  <div className={clsx(styles.pillCard, styles.pillCard1)}>
                    <span className={styles.pillTitle}>Grocery</span>
                    <span className={styles.pillDesc}>Everyday essentials</span>
                    <div style={{ textAlign: 'right', fontSize: '1rem', marginTop: '2px' }}>🛒</div>
                  </div>
                  <div className={clsx(styles.pillCard, styles.pillCard2)}>
                    <span className={styles.pillTitle}>Top Deals</span>
                    <span className={styles.pillDesc}>Save more today</span>
                    <div style={{ textAlign: 'right', fontSize: '1rem', marginTop: '2px' }}>🥖</div>
                  </div>
                  <div className={clsx(styles.pillCard, styles.pillCard3)}>
                    <span className={styles.pillTitle}>Fresh Picks</span>
                    <span className={styles.pillDesc}>Freshly Picked</span>
                    <div style={{ textAlign: 'right', fontSize: '1rem', marginTop: '2px' }}>🥬</div>
                  </div>
                </div>

                {/* Main Promo Banner */}
                <div className={styles.mainBanner}>
                  <span className={styles.bannerTag}>Autumn Fresh Deals</span>
                  <div className={styles.bannerHeading}>
                    Up to 40% Off<br />
                    Fresh Groceries
                  </div>
                  <button className={styles.bannerBtn}>Shop Now</button>
                  <div className={styles.bannerIllustration}>🙋‍♀️</div>
                </div>

                {/* Categories Header */}
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>Categories</span>
                  <span className={styles.seeAll}>See all</span>
                </div>

                {/* Categories Grid */}
                <div className={styles.categoryGrid}>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#e8f5e9' }}>🥦</div>
                    <span className={styles.categoryLabel}>Vegetables</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#ffebee' }}>🍎</div>
                    <span className={styles.categoryLabel}>Fruits</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#e3f2fd' }}>🥛</div>
                    <span className={styles.categoryLabel}>Dairy</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#efebe9' }}>🥫</div>
                    <span className={styles.categoryLabel}>Pantry</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#fff3e0' }}>🍪</div>
                    <span className={styles.categoryLabel}>Snacks</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#f3e5f5' }}>🍹</div>
                    <span className={styles.categoryLabel}>Beverages</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#efebe9' }}>🥩</div>
                    <span className={styles.categoryLabel}>Frozen</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <div className={styles.categoryIconBox} style={{ background: '#eceff1' }}>🧹</div>
                    <span className={styles.categoryLabel}>Household</span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav bar */}
              <div className={styles.bottomNav}>
                <div className={clsx(styles.navItem, styles.navItemActive)}>
                  <span className={styles.navIcon}>🏠</span>
                  <span className={styles.navLabel}>Home</span>
                </div>
                <div className={styles.navItem}>
                  <span className={styles.navIcon}>🎛️</span>
                  <span className={styles.navLabel}>Category</span>
                </div>
                <div className={styles.navItem}>
                  <span className={styles.navIcon} style={{ fontSize: '1.25rem' }}>✨</span>
                  <span className={styles.navLabel} style={{ fontWeight: 700 }}>Hana AI</span>
                </div>
                <div className={styles.navItem}>
                  <span className={styles.navIcon}>🍳</span>
                  <span className={styles.navLabel}>Recipes</span>
                </div>
                <div className={styles.navItem}>
                  <span className={styles.navIcon}>👤</span>
                  <span className={styles.navLabel}>Profile</span>
                </div>
              </div>

              {/* Home Indicator Bar */}
              <div className={styles.homeIndicator}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Fresh & Organic Produce',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    description: 'Direct partnerships with local farms ensure that the highest quality fruits, vegetables, and pantry essentials reach your home fresh every day.',
  },
  {
    title: 'Express Local Delivery',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    description: 'Get your daily groceries and essentials delivered right to your doorstep within hours using our smart geolocated delivery system.',
  },
  {
    title: 'Smart Shopping Experience',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    description: 'Browse curated recipe recommendations, filter by fresh categories, and checkout in seconds with our optimized and user-friendly interface.',
  },
];

function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.featuresTitle}>Why Choose Hana Go?</h2>
        <div className="row" style={{ gap: '2rem', justifyContent: 'center', margin: '0' }}>
          {FeatureList.map((props, idx) => (
            <div key={idx} className={clsx('col col--4', 'premium-card')} style={{ flex: '1', minWidth: '280px', padding: '2rem', margin: '0 8px' }}>
              <div style={{ background: 'rgba(11, 90, 67, 0.05)', width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {props.icon}
              </div>
              <Heading as="h3" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--ifm-color-primary)' }}>
                {props.title}
              </Heading>
              <p style={{ fontSize: '0.95rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6' }}>
                {props.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hana Go - Premium Grocery E-Commerce`}
      description="Modern Grocery App & Interactive Shopping Assistant">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

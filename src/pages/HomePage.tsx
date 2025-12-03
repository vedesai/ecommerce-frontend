// AI Generated Code by Deloitte + Cursor (BEGIN)
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import FeaturedCategories from '../components/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import TrustSection from '../components/TrustSection/TrustSection';
import Footer from '../components/Footer/Footer';
import { getHomePageData } from '../services/api';
import type { HomePageData } from '../types/homePage';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [homePageData, setHomePageData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getHomePageData();
        setHomePageData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load home page data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="home-page-loading" role="status" aria-live="polite">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page-error" role="alert">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        {homePageData?.components?.heroBanners && (
          <Hero banners={homePageData.components.heroBanners} />
        )}
        {homePageData?.components?.featuredCategories && (
          <FeaturedCategories categories={homePageData.components.featuredCategories} />
        )}
        {homePageData?.components?.productSections && (
          <FeaturedProducts products={homePageData.components.productSections} />
        )}
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
// AI Generated Code by Deloitte + Cursor (END)
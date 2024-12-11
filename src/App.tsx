import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { RelocationSection } from './components/RelocationSection';

// Homepage Components
import HeroBanner1 from './components/HeroBanner1';
import ExploreNova from './components/ExploreNova';
import BentoGrid from './components/BentoGrid';
import HandpickedHomes from './components/HandpickedHomes';
import Testimonials from './components/Testimonials';
import AppSection from './components/AppSection';

// Communities Page Components
import HeroBanner2 from './components/HeroBanner2';
import { ScrollProgress } from './components/ScrollProgress';
import { FeaturedCommunities } from './components/FeaturedCommunities';
import { NeighborhoodMap } from './components/NeighborhoodMap';
import { MarketInsights } from './components/MarketInsights';
import { SectionDivider } from './components/SectionDivider';

// Additional Pages
import AboutUs from './components/aboutus';
import SellerPage from './components/SellerPage.js';
import Listings from './components/Listing.js';
import ToolsPage from './components/ui/tools.tsx';

// Placeholder Pages
const About = () => (
  <div className="pt-24">
    <AboutUs />
  </div>
);
const Buyers = () => (
  <div className="pt-24">
    <Listings />
  </div>
);
const Sellers = () => (
  <div className="pt-24">
    <SellerPage />
  </div>
);
const Tools = () => (
  <div className="pt-24">
    <ToolsPage />
  </div>
);
const Contact = () => <div className="pt-24">Contact Page</div>;
const Login = () => <div className="pt-24">Login Page</div>;

// Homepage Component
const Home = () => {
  return (
    <main>
      <HeroBanner1 />
      <ExploreNova />
      <BentoGrid />
      <HandpickedHomes />
      <Testimonials />
      <RelocationSection />
      <AppSection />
    </main>
  );
};

// Communities Page Component
const Communities = () => {
  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <HeroBanner2 />
      <div className="relative -mt-16">
        <SectionDivider variant="wave" fromColor="#d4a94d" toColor="#b68319" />
        <FeaturedCommunities />
      </div>
      <div className="relative">
        <SectionDivider variant="peaks" fromColor="#b68319" toColor="#ffffff" />
        <MarketInsights />
      </div>
      <div className="relative">
        <SectionDivider variant="curve" fromColor="#ffffff" toColor="#111827" />
        <NeighborhoodMap />
      </div>
      <div className="relative">
        <SectionDivider
          variant="triangle"
          fromColor="#111827"
          toColor="#111827"
        />
        <RelocationSection />
      </div>
    </main>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Shared Components
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

// Homepage Components
import HeroBanner1 from './components/HeroBanner1';
import ExploreNova from './components/ExploreNova';
import StateExplorer from './components/stateexplorer';
import BentoGrid from './components/BentoGrid';
import HandpickedHomes from './components/HandpickedHomes';
import Testimonials from './components/Testimonials';
import RelocationSection1 from './components/RelocationSection1';
import AppSection from './components/AppSection';

// Communities Page Components
import HeroBanner2 from './components/HeroBanner2';
import { FeaturedCommunities } from './components/FeaturedCommunities';
import { NeighborhoodMap } from './components/NeighborhoodMap';
import { MarketInsights } from './components/MarketInsights';
import { SectionDivider } from './components/SectionDivider';
import RelocationSection2 from './components/RelocationSection2';

// Additional Pages
import AboutUs from './components/aboutus';
import SellerPage from './components/SellerPage';
import Listings from './components/Listing';
import ToolsPage from './components/ui/tools';

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
      <div className="relative py-16 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Explore Properties Across the States
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our exclusive listings and expert agents in different states
            </p>
          </div>
          <StateExplorer />
        </div>
      </div>
      <BentoGrid />
      <HandpickedHomes />
      <Testimonials />
      <RelocationSection1 />
      <AppSection />
    </main>
  );
};

// Communities Page Component
const Communities = () => {
  return (
    <main className="min-h-screen relative">
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
        <RelocationSection2 />
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
        <ScrollProgress />
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
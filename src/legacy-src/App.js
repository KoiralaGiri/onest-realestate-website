import React from 'react';
import HeroSection from './pages/Homepage/TopHeroSection/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import AboutUs from './components/aboutus.js';
import SellerPage from './components/SellerPage.js';
import Listings from './components/Listing.js';
import ToolsPage from './components/ui/tools.tsx'
// Placeholder pages - replace with your actual page components
const Home = () => <div className="pt-24"><HeroSection /></div>;
const About = () => <div className="pt-24"><AboutUs /></div>;
const Buyers = () => <div className="pt-24"><Listings /></div>;
const Sellers = () => <div className="pt-24"><SellerPage /></div>;
const Communities = () => <div className="pt-24">Communities Page</div>;
const Tools = () => <div className="pt-24"><ToolsPage /></div>;
const Contact = () => <div className="pt-24">Contact Page</div>;
const Login = () => <div className="pt-24">Login Page</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
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

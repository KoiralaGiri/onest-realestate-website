import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css';
import { VelocityScroll } from './ui/velo-scroll.tsx';


const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="hero-section">
            <div className="hero-container">
                <div className="hero-title-section">
                    <VelocityScroll default_velocity='2' className='hero-title-section-text' text='Redefining How Peoples Find Their Dream Home.'/>
                    
                    
                </div>

                <div className="content-wrapper">
                    <div className="cards-section">
                        <div className="cards-row">
                            <div className="card">
                                <svg className="card-icon" viewBox="0 0 24 24">
                                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                </svg>
                                <span>Audacity</span>
                            </div>
                            <div className="card">
                                <svg className="card-icon" viewBox="0 0 24 24">
                                    <path d="M13 5.08c3.06.44 5.48 2.86 5.92 5.92h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13c-.44 3.06-2.86 5.48-5.92 5.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"/>
                                </svg>
                                <span>Resilience</span>
                            </div>
                        </div>
                        <div className="card wide-card">
                            <svg className="card-icon" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                            </svg>
                            <span>Together</span>
                        </div>
                    </div>

                    <div className="values-section">
                        <h2>Our values</h2>
                        <ul>
                            <li><span>Community:</span> Building meaningful connections and giving back.</li>
                            <li><span>Integrity:</span> Acting with honesty and transparency in all that we do.</li>
                            <li><span>Innovation:</span> Leveraging technology to simplify real estate.</li>
                            <li><span>Excellence:</span> Delivering exceptional service every step of the way.</li>
                            <li><span>Client First:</span> Tailoring our approach to meet your unique needs.</li>
                        </ul>
                        <p className="description">
                            Discover the oNest difference—where exceptional service, community values, and innovative solutions come together to create an experience tailored just for you.
                        </p>
                        <button>Read our oNest playbook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
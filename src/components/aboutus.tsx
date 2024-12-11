import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/AboutUs.css';
import BgImg from '../images/pngtree-the-keys-in-front-of-modern-house-with-sunset-light-style-image_16176177.jpg'
import ValuesSection from './ValueSection.tsx';
import TeamImg from '../images/image0.jpg'

const AboutUs = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const opacity = useTransform(scrollY, [0, 300], [0.5, 0.9]);

  const teamMembers = [
    {
      name: 'Anjana Budhathoki',
      role: 'Principal Broker',
      image: 'https://dtzulyujzhqiu.cloudfront.net//profiles/1702696652.jpg'
    },
    {
      name: 'Suresh Sapkota',
      role: 'Associate Broker',
      image: 'https://dtzulyujzhqiu.cloudfront.net//profiles/1641091382.png'
    },
    {
      name: 'Suman Mahara',
      role: 'Supervising Broker',
      image: 'https://dtzulyujzhqiu.cloudfront.net//profiles/1642454219.jpg'
    },
    {
      name: 'Prayash Bhusal',
      role: 'REALTOR®',
      image: 'https://dtzulyujzhqiu.cloudfront.net/onestrealestatellc4450/profiles/1727220454_1754865.jpg'
    },
    {
      name: 'Tek Narayan Yadav',
      role: 'REALTOR®',
      image: 'https://dtzulyujzhqiu.cloudfront.net//profiles/1661948263.jpg'
    },
    {
      name: 'Deepak Sharma',
      role: 'REALTOR®',
      image: 'https://dtzulyujzhqiu.cloudfront.net//profiles/1640888124.jpg'
    },
    {
      name: 'Purna Shahi',
      role: 'REALTOR®',
      image: 'https://dtzulyujzhqiu.cloudfront.net/onestrealestatellc4450/profiles/1726088020_1118640.jpg'
    },
    {
      name: 'Sarah Nazeer',
      role: 'REALTOR®',
      image: 'https://dtzulyujzhqiu.cloudfront.net/onestrealestatellc4450/profiles/1729961165_1825979.jpg'
    },
    {
      name: 'Sumit Sanjel',
      role: 'REALTOR®',
      image: 'https://dtzulyujzhqiu.cloudfront.net//profiles/1681753042.jpg'
    },
    {
      name: 'Abhaya Karki',
      role: 'REALTOR®',
      image: 'https://dtzulyujzhqiu.cloudfront.net/onestrealestatellc4450/profiles/1718293487.jpg'
    },
  ];

  const timelineData = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Established in Fairfax, VA, with two agents.'
    },
    {
      year: '2022',
      title: 'Initial Expansion',
      description: 'Expanded into Washington, D.C., and Maryland, adding four more agents.'
    },
    {
      year: '2023',
      title: 'Regional Growth',
      description: 'Extended presence into New England, starting in Massachusetts.'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Entered Connecticut and Pennsylvania markets with 30 agents.'
    }
  ];

  const TimelineItem = ({ year, title, description, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.2
    });

    return (
      <motion.div
        ref={ref}
        className="timeline-item"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="timeline-content">
          <h3 className="year">{year}</h3>
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </div>
      </motion.div>
    );
  };

  const Section = ({ title, content, imageUrl, reverse = false }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.2
    });

    return (
      <motion.div
        ref={ref}
        className={`section ${reverse ? 'reverse' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-content">
          <motion.h2
            initial={{ x: reverse ? 50 : -50 }}
            animate={{ x: inView ? 0 : reverse ? 50 : -50 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ x: reverse ? 50 : -50 }}
            animate={{ x: inView ? 0 : reverse ? 50 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content}
          </motion.p>
        </div>
        <motion.div
          className="section-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={imageUrl} alt={title} />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="about-us">
      {/* Dynamic Background */}
      <motion.div className="dynamic-background">
        <motion.div 
          className="gradient-bg"
          style={{ opacity }}
        />
        <motion.div 
          className="parallax-bg"
          style={{
            y: backgroundY,
            backgroundImage: `url(${BgImg})`,          }}
        />
        <div className="overlay" />
      </motion.div>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transforming Lives
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="gradient-text"
            >
              Through Real Estate
            </motion.span>
          </h1>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="primary">Learn More</button>
            <button className="secondary">Contact Us</button>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <Section
        title="Our Mission & Vision"
        content="Our mission is to redefine real estate by providing a seamless and personalized experience that puts your needs first. Whether you're buying, selling, or investing, our team of passionate experts is here to guide you through every step of the journey. With innovative tools, local expertise, and an unwavering commitment to our clients, we make the complex world of real estate simple and accessible.Founded with a vision to enhance the real estate process through innovation and personalized service, oNest ensures your real estate journey is as rewarding as it is exciting. We pride ourselves on transparency, dedication, and deep community connections."
                imageUrl={TeamImg}
      />

      {/* Timeline Section */}
      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </section>
      <ValuesSection />

      {/* Team Section */}
      <section className="team-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Team oNest
        </motion.h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
        <button className="secondary see-all">See All Agents</button>

      </section>

      {/* Join Section */}
      <section className="join">
        <motion.div
          className="join-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Join Our Team</h2>
          <p>Be part of a dynamic team that's reshaping the real estate industry through innovation and excellence.</p>
          <motion.button
            className="join-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Careers
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
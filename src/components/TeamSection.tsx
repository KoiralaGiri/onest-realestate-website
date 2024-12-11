import React from 'react';
import { motion } from 'framer-motion';
import '../styles/TeamSection.css';

const TeamSection = () => {
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

  return (
    <div className="team-container">
      <div className="title-wrapper">
        <h2 className="team-title">Team oNest</h2>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-member-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="member-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
      <div className="see-more-button">
        <motion.button 
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See more
        </motion.button>
      </div>
    </div>
  );
};

export default TeamSection;
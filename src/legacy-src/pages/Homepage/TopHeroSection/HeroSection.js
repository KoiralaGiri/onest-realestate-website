import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100); // Trigger animations after delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`hero-section ${animate ? "animate" : ""}`}>
      <div className="gradient-overlay" />
      <div className="content">
        <h1 className="heading">
          HONESTY IS OUR <span className="highlight">COMMITMENT</span>
          <div className="underline"></div>
        </h1>
        <h2 className="subheading">
          REAL ESTATE IS OUR <span className="highlight">PASSION</span>
        </h2>
      </div>
      <div className="vector-image"></div>
      <style jsx>{`
        :root {
          --highlight-color: #f2c94c;
          --text-color: white;
          --background-color: #808080; /* Placeholder for the image */
        }

        body {
          margin: 0;
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: var(--background-color);
          border-radius: 25px;
          overflow: hidden;
          animation: unblur 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          filter: blur(20px); /* Start blurred */
        }

        .hero-section.animate {
          filter: blur(0); /* End unblur */
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
          z-index: 1;
        }

        .content {
          text-align: center;
          z-index: 2;
          color: var(--text-color);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1.5s ease-out 2.5s forwards; /* Sync with vector */
        }

        .heading {
          font-size: 3rem;
          font-weight: bold;
        }

        .subheading {
          font-size: 1.5rem;
          margin-top: 10px;
        }

        .highlight {
          color: var(--highlight-color);
        }

        .underline {
          width: 50%;
          height: 3px;
          background: var(--highlight-color);
          margin: 10px auto 0;
          animation: scaleIn 1s ease-in-out 2.7s forwards;
          transform: scaleX(0);
        }

        .vector-image {
          position: absolute;
          bottom: 0;
          right: -100px;
          width: 200px;
          height: 200px;
          background: var(--highlight-color);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
          animation: slideIn 1.5s cubic-bezier(0.25, 1, 0.5, 1) 1.5s forwards;
          transform: translateX(200px);
          z-index: 0;
        }

        /* Animations */

        @keyframes unblur {
          to {
            filter: blur(0);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

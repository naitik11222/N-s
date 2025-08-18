import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import '../styles/Hero.css';

const Hero = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleGetStarted = (e) => {
    e.preventDefault();
    setShowPaymentModal(true);
  };

  const handlePaymentClose = () => {
    setShowPaymentModal(false);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">N's</span>
          </h1>
          <p className="hero-subtitle">
            We create innovative digital solutions that transform businesses and enhance user experiences.
          </p>
          <div className="hero-buttons">
            <button onClick={handleGetStarted} className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <div className="card-icon">🚀</div>
              <h3>Innovation</h3>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">💡</div>
              <h3>Creative</h3>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">⚡</div>
              <h3>Fast</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
             <PaymentModal
         isOpen={showPaymentModal}
         onClose={handlePaymentClose}
         amount={2} // Default amount for quick start
         projectDetails={{
           projectType: 'Quick Start Project',
           services: ['Web Development', 'UI/UX Design']
         }}
       />
    </section>
  );
};

export default Hero; 
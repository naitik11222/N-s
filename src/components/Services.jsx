import React, { useState } from 'react';
import PaymentModal from './PaymentModal';
import '../styles/Services.css';

const Services = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    {
      title: 'Web Development',
      icon: '🌐',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance', 'Security'],
      price: '₹499'
    },
    {
      title: 'Mobile Apps',
      icon: '📱',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-platform', 'App Store', 'Maintenance'],
      price: '₹999'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design System'],
      price: '₹299'
    },
    {
      title: 'Digital Marketing',
      icon: '📈',
      description: 'Comprehensive digital marketing strategies to grow your business.',
      features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      price: '₹499'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-price">
                <span className="price">{service.price}</span>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSelectedService(service);
                    setShowPaymentModal(true);
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Need a Custom Solution?</h3>
          <p>Let's discuss your project requirements and create something amazing together.</p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={5}
        projectDetails={selectedService ? {
          projectType: selectedService.title,
          services: selectedService.features
        } : { projectType: 'Service', services: [] }}
      />
    </section>
  );
};

export default Services; 
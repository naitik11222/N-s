import React, { useState } from 'react';
import PaymentModal from '../components/PaymentModal';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const detailedServices = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and Python. We create scalable, secure, and high-performance websites that drive business growth.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Security Implementation',
        'Content Management System',
        'E-commerce Integration'
      ],
      pricing: {
        basic: '₹2,500',
        standard: '₹5,000',
        premium: '₹10,000+'
      },
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build user-friendly apps that provide exceptional user experience and drive engagement.',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      pricing: {
        basic: '₹8,000',
        standard: '₹15,000',
        premium: '₹25,000+'
      },
      icon: '📱'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging user experiences. We focus on usability, accessibility, and visual appeal.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'User Testing',
        'Design Systems',
        'Accessibility Compliance'
      ],
      pricing: {
        basic: '₹3,000',
        standard: '₹6,000',
        premium: '₹12,000+'
      },
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase brand visibility, drive traffic, and generate leads. We use data-driven approaches for maximum ROI.',
      features: [
        'SEO & SEM',
        'Social Media Marketing',
        'Content Marketing',
        'Email Campaigns',
        'Analytics & Reporting',
        'Conversion Optimization'
      ],
      pricing: {
        basic: '₹1,500/month',
        standard: '₹3,000/month',
        premium: '₹5,000+/month'
      },
      icon: '📈'
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services. We help businesses migrate to the cloud and optimize their operations for better performance and cost efficiency.',
      features: [
        'Cloud Migration',
        'DevOps Implementation',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security & Compliance',
        'Cost Optimization'
      ],
      pricing: {
        basic: '₹4,000',
        standard: '₹8,000',
        premium: '₹15,000+'
      },
      icon: '☁️'
    },
    {
      id: 6,
      title: 'Consulting & Strategy',
      description: 'Strategic technology consulting to help businesses make informed decisions about their digital transformation journey and technology investments.',
      features: [
        'Technology Assessment',
        'Digital Transformation',
        'Process Optimization',
        'Team Training',
        'Project Management',
        'Vendor Selection'
      ],
      pricing: {
        basic: '₹150/hour',
        standard: '₹250/hour',
        premium: '₹$400+/hour'
      },
      icon: '💼'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'The team delivered an exceptional website that exceeded our expectations. Their attention to detail and commitment to quality is outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Solutions',
      text: 'Working with this team was a game-changer for our business. Their mobile app development skills are top-notch.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      text: 'The UI/UX design work they did for us transformed our user experience completely. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions to transform your business</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="container">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>From web development to digital marketing, we provide end-to-end solutions that drive results.</p>
          </div>
          
          <div className="services-cards">
            {detailedServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-pricing">
                  <h4>Pricing:</h4>
                  <div className="pricing-tiers">
                    <div className="pricing-tier">
                      <span className="tier-name">Basic</span>
                      <span className="tier-price">{service.pricing.basic}</span>
                    </div>
                    <div className="pricing-tier">
                      <span className="tier-name">Standard</span>
                      <span className="tier-price">{service.pricing.standard}</span>
                    </div>
                    <div className="pricing-tier">
                      <span className="tier-name">Premium</span>
                      <span className="tier-price">{service.pricing.premium}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="cta-button"
                  onClick={() => {
                    setSelectedService(service);
                    setShowPaymentModal(true);
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We understand your business goals, target audience, and project requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We create a detailed project plan with timelines, milestones, and deliverables.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design</h3>
              <p>Our designers create wireframes, mockups, and prototypes for your approval.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Development</h3>
              <p>Our developers build your project using the latest technologies and best practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Testing</h3>
              <p>We thoroughly test your project to ensure quality, performance, and security.</p>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Launch</h3>
              <p>We deploy your project and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and find the perfect solution for your business needs.</p>
          <div className="cta-buttons">
            <button className="primary-button">Schedule a Consultation</button>
            <button className="secondary-button">View Our Portfolio</button>
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={5}
        projectDetails={selectedService ? {
          projectType: selectedService.title,
          services: selectedService.features
        } : { projectType: 'Service', services: [] }}
      />
    </div>
  );
};

export default ServicesPage; 
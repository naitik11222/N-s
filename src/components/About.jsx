import React from 'react';
import '../styles/About.css';

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Strategic Planning',
      description: 'We develop comprehensive strategies that align with your business goals.'
    },
    {
      icon: '🛠️',
      title: 'Custom Development',
      description: 'Tailored solutions built with cutting-edge technologies.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Beautiful interfaces that work perfectly on all devices.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              Founded in 2020, N's has been at the forefront of digital innovation. 
              We believe in the power of technology to transform businesses and improve lives.
            </p>
            <p>
              Our mission is to deliver cutting-edge solutions that not only meet our clients' 
              immediate needs but also position them for future success in an ever-evolving digital landscape.
            </p>
            
            <div className="stats">
              <div className="stat">
                <h4>100+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
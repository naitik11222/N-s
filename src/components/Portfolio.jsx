import React, { useState } from 'react';
import PaymentModal from './PaymentModal';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentProject, setPaymentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '🛒',
      description: 'Modern e-commerce platform with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      details: {
        overview: 'A scalable, secure, and high-performance e-commerce platform designed for SMEs and startups. Includes full product lifecycle management, seamless checkout, and robust admin tools.',
        features: [
          'Product catalog with variants (size, color, etc.)',
          'Advanced search and filtering',
          'Shopping cart and checkout flow',
          'UPI/Card/NetBanking payments (Stripe/Razorpay/Paytm)',
          'Order tracking and email notifications',
          'Inventory and stock management',
          'Discounts, coupons, and promotions',
          'Role-based admin dashboard and analytics'
        ]
      }
    },
    {
      id: 2,
      title: 'Fitness App',
      category: 'mobile',
      image: '💪',
      description: 'Cross-platform fitness tracking app with workout plans and progress monitoring.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo']
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'web',
      image: '🍽️',
      description: 'Responsive restaurant website with online ordering and reservation system.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'mobile',
      image: '📋',
      description: 'Productivity app for team collaboration and project management.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Provider']
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'design',
      image: '🎨',
      description: 'Creative portfolio website with stunning animations and modern design.',
      technologies: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Dashboard Analytics',
      category: 'web',
      image: '📊',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL']
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our latest projects and see how we bring ideas to life.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="portfolio-actions">
                  <button className="btn btn-outline" onClick={() => setSelectedProject(project)}>View Details</button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setPaymentProject(project);
                      setShowPaymentModal(true);
                    }}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-icon">{selectedProject.image}</div>
                <h3>{selectedProject.title}</h3>
                <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>×</button>
              </div>
              <div className="modal-content">
                {selectedProject.details?.overview ? (
                  <p className="modal-overview">{selectedProject.details.overview}</p>
                ) : (
                  <p className="modal-overview">{selectedProject.description}</p>
                )}

                {selectedProject.details?.features && (
                  <div className="modal-section">
                    <h4>Key Features</h4>
                    <ul className="modal-list">
                      {selectedProject.details.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="modal-section">
                  <h4>Technologies</h4>
                  <div className="modal-chips">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="modal-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="btn btn-primary" onClick={() => setSelectedProject(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          amount={2}
          projectDetails={paymentProject ? {
            projectType: paymentProject.title,
            services: paymentProject.technologies || []
          } : { projectType: 'Live Demo', services: [] }}
        />

        <div className="portfolio-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's create something amazing together. Get in touch with us today.</p>
          <button className="btn btn-primary">Start Project</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 
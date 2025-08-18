import React, { useState } from 'react';
import PaymentModal from '../components/PaymentModal';
import '../styles/GetStartedPage.css';

const GetStartedPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    description: ''
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const services = [
    { id: 'web-dev', name: 'Web Development', icon: '🌐', price: 5000 },
    { id: 'mobile-app', name: 'Mobile App', icon: '📱', price: 8000 },
    { id: 'ui-ux', name: 'UI/UX Design', icon: '🎨', price: 3000 },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: '📈', price: 2000 },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒', price: 6000 },
    { id: 'seo', name: 'SEO Optimization', icon: '🔍', price: 1500 }
  ];

  const projectTypes = [
    { id: 'startup', name: 'Startup', icon: '🚀', description: 'New business launching online' },
    { id: 'business', name: 'Business', icon: '💼', description: 'Existing business expansion' },
    { id: 'personal', name: 'Personal', icon: '👤', description: 'Personal portfolio or blog' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢', description: 'Large scale corporate project' }
  ];

  const budgetRanges = [
    { id: '5k', name: 'Under ₹5,000', range: '0-5000' },
    { id: '10k', name: '₹5,000 - ₹10,000', range: '5000-10000' },
    { id: '25k', name: '₹10,000 - ₹25,000', range: '10000-25000' },
    { id: '50k', name: '₹25,000 - ₹50,000', range: '25000-50000' },
    { id: '50k+', name: '₹50,000+', range: '50000+' }
  ];

  const timelineOptions = [
    { id: 'urgent', name: 'Urgent (1-2 weeks)', duration: '1-2 weeks' },
    { id: 'normal', name: 'Normal (1-2 months)', duration: '1-2 months' },
    { id: 'flexible', name: 'Flexible (3-6 months)', duration: '3-6 months' },
    { id: 'long-term', name: 'Long-term (6+ months)', duration: '6+ months' }
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show payment modal instead of alert
    setShowPaymentModal(true);
  };

  const handlePaymentClose = () => {
    setShowPaymentModal(false);
  };

  const renderStep1 = () => (
    <div className="step-content">
      <h2>Choose Your Project Type</h2>
      <p>Tell us about your project to help us understand your needs better.</p>
      
      <div className="project-types-grid">
        {projectTypes.map(type => (
          <div 
            key={type.id}
            className={`project-type-card ₹{projectType === type.id ? 'selected' : ''}`}
            onClick={() => setProjectType(type.id)}
          >
            <div className="project-type-icon">{type.icon}</div>
            <h3>{type.name}</h3>
            <p>{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="step-content">
      <h2>Select Your Services</h2>
      <p>Choose the services you need for your project.</p>
      
      <div className="services-grid">
        {services.map(service => (
          <div 
            key={service.id}
            className={`service-card ₹{selectedServices.includes(service.id) ? 'selected' : ''}`}
            onClick={() => handleServiceToggle(service.id)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p className="service-price">Starting from ₹{service.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
      
      {selectedServices.length > 0 && (
        <div className="selected-services">
          <h3>Selected Services:</h3>
          <div className="selected-services-list">
            {selectedServices.map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              return (
                <span key={serviceId} className="selected-service-tag">
                  {service.icon} {service.name}
                </span>
              );
            })}
          </div>
          <div className="total-price">
            <strong>Estimated Total: ₹{calculateTotalPrice().toLocaleString()}</strong>
          </div>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="step-content">
      <h2>Project Timeline & Budget</h2>
      <p>Help us understand your timeline and budget constraints.</p>
      
      <div className="timeline-budget-section">
        <div className="budget-section">
          <h3>What's your budget range?</h3>
          <div className="budget-options">
            {budgetRanges.map(range => (
              <label key={range.id} className="budget-option">
                <input
                  type="radio"
                  name="budget"
                  value={range.id}
                  checked={budget === range.id}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <span>{range.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="timeline-section">
          <h3>What's your timeline?</h3>
          <div className="timeline-options">
            {timelineOptions.map(option => (
              <label key={option.id} className="timeline-option">
                <input
                  type="radio"
                  name="timeline"
                  value={option.id}
                  checked={timeline === option.id}
                  onChange={(e) => setTimeline(e.target.value)}
                />
                <span>{option.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="step-content">
      <h2>Project Details</h2>
      <p>Tell us more about your project vision and requirements.</p>
      
      <div className="project-details-form">
        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your project, goals, and any specific requirements..."
            rows="6"
          />
        </div>
        
        <div className="project-features">
          <h3>Key Features You Need</h3>
          <div className="features-checklist">
            {[
              'Responsive Design', 'User Authentication', 'Payment Integration',
              'Admin Dashboard', 'API Integration', 'Database Design',
              'Content Management', 'Analytics & Reporting', 'Multi-language Support',
              'Mobile App', 'SEO Optimization', 'Social Media Integration'
            ].map(feature => (
              <label key={feature} className="feature-checkbox">
                <input type="checkbox" />
                <span>{feature}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="step-content">
      <h2>Contact Information</h2>
      <p>Let's get in touch to discuss your project.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div className="project-summary">
          <h3>Project Summary</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-label">Project Type:</span>
              <span className="summary-value">
                {projectTypes.find(t => t.id === projectType)?.name || 'Not selected'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Services:</span>
              <span className="summary-value">
                {selectedServices.length} selected
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Budget:</span>
              <span className="summary-value">
                {budgetRanges.find(b => b.id === budget)?.name || 'Not selected'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Timeline:</span>
              <span className="summary-value">
                {timelineOptions.find(t => t.id === timeline)?.name || 'Not selected'}
              </span>
            </div>
            <div className="summary-item total">
              <span className="summary-label">Estimated Total:</span>
              <span className="summary-value">₹{calculateTotalPrice().toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <button type="submit" className="submit-btn">
          Submit Project Request
        </button>
      </form>
    </div>
  );

  const steps = [
    { number: 1, title: 'Project Type', icon: '🎯' },
    { number: 2, title: 'Services', icon: '🛠️' },
    { number: 3, title: 'Timeline & Budget', icon: '📅' },
    { number: 4, title: 'Details', icon: '📝' },
    { number: 5, title: 'Contact', icon: '📞' }
  ];

  return (
    <div className="get-started-page">
      <div className="get-started-hero">
        <div className="hero-content">
          <h1>Let's Build Something Amazing Together</h1>
          <p>Follow our simple 5-step process to get your project started</p>
        </div>
      </div>

      <div className="get-started-container">
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div key={step.number} className="step-indicator">
              <div className={`step-number ₹{currentStep >= step.number ? 'active' : ''}`}>
                {currentStep > step.number ? '✓' : step.icon}
              </div>
              <span className={`step-title ₹{currentStep >= step.number ? 'active' : ''}`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`step-connector ₹{currentStep > step.number ? 'active' : ''}`} />
              )}
            </div>
          ))}
        </div>

        <div className="step-container">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
        </div>

        <div className="step-navigation">
          {currentStep > 1 && (
            <button onClick={prevStep} className="nav-btn prev-btn">
              ← Previous
            </button>
          )}
          {currentStep < 5 && (
            <button 
              onClick={nextStep} 
              className="nav-btn next-btn"
              disabled={
                (currentStep === 1 && !projectType) ||
                (currentStep === 2 && selectedServices.length === 0) ||
                (currentStep === 3 && (!budget || !timeline))
              }
            >
              Next →
            </button>
          )}
        </div>
      </div>

      <div className="why-choose-us">
        <div className="container">
          <h2>Why Choose N's?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising quality</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>Industry best practices and cutting-edge technologies</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>24/7 support and regular project updates</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Best Value</h3>
              <p>Competitive pricing with transparent cost structure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={handlePaymentClose}
        amount={calculateTotalPrice()}
        projectDetails={{
          projectType: projectTypes.find(t => t.id === projectType)?.name,
          services: selectedServices.map(serviceId => {
            const service = services.find(s => s.id === serviceId);
            return service?.name;
          })
        }}
      />
    </div>
  );
};

export default GetStartedPage; 
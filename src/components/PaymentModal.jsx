import React, { useState, useEffect } from 'react';
import '../styles/PaymentModal.css';
// Import your profile photo
import profilePhoto from '../assets/naitik5.jpg';

const PaymentModal = ({ isOpen, onClose, amount, projectDetails }) => {
  const [paymentMethod, setPaymentMethod] = useState('qr');
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [countdown, setCountdown] = useState(300); // 5 minutes countdown
  const [qrScanned, setQrScanned] = useState(false);
  const [paymentAttempts, setPaymentAttempts] = useState(0);

  const paymentMethods = [
    { id: 'qr', name: 'QR Code Payment', icon: '📱', description: 'Scan QR code with any UPI app' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', description: 'Secure card payment' },
    { id: 'upi', name: 'UPI Transfer', icon: '🏦', description: 'Direct UPI transfer' },
    { id: 'bank', name: 'Bank Transfer', icon: '🏛️', description: 'NEFT/RTGS transfer' }
  ];

  // QR Code data for UPI payment
  const qrCodeData = `upi://pay?pa=ns@paytm&pn=N's%20Digital%20Solutions&am=${amount}&tn=Project%20Payment&cu=INR`;

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            setPaymentStatus('expired');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen, countdown]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
    setTimeout(() => {
      onClose();
      // Redirect to success page or show confirmation
      window.location.href = '/payment-success';
    }, 2000);
  };

  const handlePaymentFailure = () => {
    setPaymentStatus('failed');
    setPaymentAttempts(prev => prev + 1);
    setTimeout(() => {
      setPaymentStatus('pending');
      if (paymentMethod !== 'qr') {
        setCountdown(300);
      }
    }, 3000);
  };

  const simulatePaymentCheck = () => {
    // Always show error when checking payment status
    handlePaymentFailure();
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setPaymentStatus('pending');
    setQrScanned(false);
    setPaymentAttempts(0);
    if (method === 'qr') {
      setCountdown(300);
    }
  };

  const handleCardPayment = (e) => {
    e.preventDefault();
    // Card payments are not allowed - show error
    handlePaymentFailure();
  };

  const handleUpiPayment = () => {
    // UPI payments are not allowed - show error
    handlePaymentFailure();
  };

  const handleBankPayment = () => {
    // Bank payments are not allowed - show error
    handlePaymentFailure();
  };

  if (!isOpen) return null;

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <div className="payment-modal-header">
          <h2>Complete Your Payment</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="payment-modal-content">
          {/* Project Summary */}
          <div className="project-summary-section">
            <h3>Project Summary</h3>
            <div className="summary-details">
              <div className="summary-item">
                <span>Project Type:</span>
                <span>{projectDetails?.projectType || 'N\'s'}</span>
              </div>
              <div className="summary-item">
                <span>Services:</span>
                <span>{projectDetails?.services?.length || 0} selected</span>
              </div>
              <div className="summary-item total">
                <span>Total Amount:</span>
                <span>₹{amount?.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="payment-method-section">
            <h3>Choose Payment Method</h3>
            <div className="payment-methods-grid">
              {paymentMethods.map(method => (
                <div
                  key={method.id}
                  className={`payment-method-card ${paymentMethod === method.id ? 'selected' : ''}`}
                  onClick={() => handlePaymentMethodChange(method.id)}
                >
                  <div className="method-icon">{method.icon}</div>
                  <h4>{method.name}</h4>
                  <p>{method.description}</p>
                  {method.id === 'qr' && (
                    <div className="qr-badge">✅ Recommended</div>
                  )}
                  {method.id !== 'qr' && (
                    <div className="qr-badge unavailable">❌ Not Available</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Interface */}
          <div className="payment-interface">
            {paymentMethod === 'qr' && (
              <div className="qr-payment-section">
                <div className="qr-container">
                  <div className="qr-code">
                    <div className="qr-placeholder">
                      <img 
                        src={profilePhoto}
                        alt="N's" 
                        className="qr-full-image"
                      />
                    </div>
                  </div>
                  <div className="qr-details">
                    <h4>Scan QR Code</h4>
                    <p>Use any UPI app to scan and pay</p>
                    <div className="transaction-info">
                      <p><strong>Amount:</strong> ₹{amount?.toLocaleString()}</p>
                      <p><strong>UPI ID:</strong> ns@paytm</p>
                    </div>
                  </div>
                </div>

                <div className="payment-timer">
                  <div className="timer-display">
                    <span className="timer-label">Time Remaining:</span>
                    <span className={`timer ${countdown < 60 ? 'warning' : ''}`}>
                      {formatTime(countdown)}
                    </span>
                  </div>
                  <div className="timer-progress">
                    <div 
                      className="timer-bar" 
                      style={{ width: `${(countdown / 300) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="payment-actions">
                  <button 
                    className="check-payment-btn"
                    onClick={simulatePaymentCheck}
                    disabled={paymentStatus === 'success' || paymentStatus === 'failed'}
                  >
                    {paymentStatus === 'pending' && 'Check Payment Status'}
                    {paymentStatus === 'success' && 'Payment Successful! ✓'}
                    {paymentStatus === 'failed' && 'Payment Failed - Try Again'}
                    {paymentStatus === 'expired' && 'Session Expired - Refresh'}
                  </button>
                </div>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="card-payment-section">
                <div className="payment-notice">
                  <div className="notice-icon">⚠️</div>
                  <h4>Card Payment Not Available</h4>
                  <p>Please use QR Code payment method for this transaction.</p>
                  <button 
                    className="switch-to-qr-btn"
                    onClick={() => handlePaymentMethodChange('qr')}
                  >
                    Switch to QR Code Payment
                  </button>
                </div>
                <form className="card-form" onSubmit={handleCardPayment}>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" disabled />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" maxLength="5" disabled />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" maxLength="3" disabled />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" disabled />
                  </div>
                  <button type="submit" className="pay-btn disabled" disabled>
                    Pay ₹{amount?.toLocaleString()}
                  </button>
                </form>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="upi-payment-section">
                <div className="payment-notice">
                  <div className="notice-icon">⚠️</div>
                  <h4>UPI Transfer Not Available</h4>
                  <p>Please use QR Code payment method for this transaction.</p>
                  <button 
                    className="switch-to-qr-btn"
                    onClick={() => handlePaymentMethodChange('qr')}
                  >
                    Switch to QR Code Payment
                  </button>
                </div>
                <div className="upi-details">
                  <h4>UPI Payment Details</h4>
                  <div className="upi-info">
                    <div className="upi-item">
                      <span>UPI ID:</span>
                      <span className="upi-value">ns@paytm</span>
                      <button className="copy-btn" disabled>Copy</button>
                    </div>
                    <div className="upi-item">
                      <span>Amount:</span>
                      <span className="upi-value">₹{amount?.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="upi-instructions">
                    Send the exact amount to the UPI ID above and click "Verify Payment" once done.
                  </p>
                  <button className="verify-payment-btn disabled" onClick={handleUpiPayment} disabled>
                    Verify Payment
                  </button>
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="bank-payment-section">
                <div className="payment-notice">
                  <div className="notice-icon">⚠️</div>
                  <h4>Bank Transfer Not Available</h4>
                  <p>Please use QR Code payment method for this transaction.</p>
                  <button 
                    className="switch-to-qr-btn"
                    onClick={() => handlePaymentMethodChange('qr')}
                  >
                    Switch to QR Code Payment
                  </button>
                </div>
                <div className="bank-details">
                  <h4>Bank Transfer Details</h4>
                  <div className="bank-info">
                    <div className="bank-item">
                      <span>Account Name:</span>
                      <span className="bank-value">N's Digital Solutions</span>
                    </div>
                    <div className="bank-item">
                      <span>Account Number:</span>
                      <span className="bank-value">1234567890</span>
                      <button className="copy-btn" disabled>Copy</button>
                    </div>
                    <div className="bank-item">
                      <span>IFSC Code:</span>
                      <span className="bank-value">SBIN0001234</span>
                      <button className="copy-btn" disabled>Copy</button>
                    </div>
                    <div className="bank-item">
                      <span>Bank Name:</span>
                      <span className="bank-value">State Bank of India</span>
                    </div>
                    <div className="bank-item">
                      <span>Amount:</span>
                      <span className="bank-value">₹{amount?.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="bank-instructions">
                    Transfer the amount to the above account and upload the receipt.
                  </p>
                  <div className="receipt-upload">
                    <input type="file" id="receipt" accept="image/*,.pdf" disabled />
                    <label htmlFor="receipt" className="upload-btn disabled">
                      📎 Upload Receipt
                    </label>
                  </div>
                  <button className="verify-payment-btn disabled" onClick={handleBankPayment} disabled>
                    Verify Payment
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Payment Status */}
          {paymentStatus === 'success' && (
            <div className="payment-success">
              <div className="success-icon">✓</div>
              <h3>Payment Successful!</h3>
              <p>Your QR code payment has been processed successfully. We'll contact you within 24 hours.</p>
              <div className="success-details">
                <p><strong>Amount Paid:</strong> ₹{amount?.toLocaleString()}</p>
                <p><strong>Payment Method:</strong> QR Code</p>
              </div>
            </div>
          )}

          {paymentStatus === 'failed' && (
            <div className="payment-failed">
              <div className="failed-icon">✗</div>
              <h3>Payment Failed</h3>
              {paymentMethod === 'qr' ? (
                <p>QR code payment verification failed. Please try again or ensure you've completed the payment.</p>
              ) : (
                <p>This payment method is not available. Please use QR Code payment method.</p>
              )}
              {paymentAttempts > 0 && (
                <p className="attempts-info">Failed attempts: {paymentAttempts}</p>
              )}
            </div>
          )}

          {paymentStatus === 'expired' && (
            <div className="payment-expired">
              <div className="expired-icon">⏰</div>
              <h3>Session Expired</h3>
              <p>Please refresh the page and try again.</p>
            </div>
          )}
        </div>

        <div className="payment-modal-footer">
          <p className="security-note">
            🔒 Your payment is secured with bank-level encryption
          </p>
          <p className="support-note">
            Need help? Contact us at support@ns.com
          </p>
          <p className="qr-only-notice">
            💡 Only QR Code payments are accepted for this transaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 
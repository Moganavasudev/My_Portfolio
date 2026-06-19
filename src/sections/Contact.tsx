import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, User, HelpCircle, Phone, MapPin, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const Github: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 20, style }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 20, style }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);



export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    
    if (!message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your message.');
      return;
    }

    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_jk8g58p';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_cpn59f9';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    if (!publicKey) {
      console.warn("EmailJS Public Key is not set in .env. Falling back to local success state for preview.");
      setTimeout(() => {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF8C00', '#ffffff', '#ffb366', '#333333']
        });
      }, 1000);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Moganavasudev',
      },
      publicKey
    )
    .then(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF8C00', '#ffffff', '#ffb366', '#333333']
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(error?.text || 'Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="section">
      {/* Background Glow */}
      <div 
        className="ambient-glow" 
        style={{
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
          <span className="section-tag">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle" style={{ marginBottom: '8px' }}>
            Let's discuss opportunities, internships, hackathons, or project collaborations.
          </p>
        </div>

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          alignItems: 'start'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              textAlign: 'left'
            }}
          >

            {/* Direct Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 140, 0, 0.05)',
                  border: '1px solid rgba(255, 140, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</span>
                  <a href="mailto:moganavasudevp@gmail.com" style={{ color: '#fff', fontSize: '15px', textDecoration: 'none', fontWeight: 500 }}>
                    moganavasudevp@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 140, 0, 0.05)',
                  border: '1px solid rgba(255, 140, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</span>
                  <span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>
                    +91 76959 24091
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 140, 0, 0.05)',
                  border: '1px solid rgba(255, 140, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</span>
                  <span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Downloader CTA */}
            <div>
              <a 
                href="/resume.pdf" 
                download="Moganavasudev_Resume.pdf"
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start', padding: '10px 20px', gap: '10px', fontSize: '14px' }}
              >
                <FileText size={16} style={{ color: 'var(--accent)' }} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Profile list */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
              <a 
                href="https://github.com/Moganavasudev" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fff';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <Github size={18} />
              </a>

              <a 
                href="https://www.linkedin.com/in/moganavasudev-p-105a78333/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0077B5';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 119, 181, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                }}
              >
                <Linkedin size={18} />
              </a>

              <a 
                href="mailto:moganavasudevp@gmail.com" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                }}
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="glass-card contact-form-card"
            style={{
              padding: '32px',
            }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    textAlign: 'center',
                    padding: '20px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 140, 0, 0.1)',
                    border: '2px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    marginBottom: '12px'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, maxWidth: '350px' }}>
                    Thank you for reaching out. Moganavasudev P will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="btn btn-secondary"
                    style={{ marginTop: '16px', padding: '10px 20px', fontSize: '14px' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="form-name" style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <User size={14} style={{ color: 'var(--accent)' }} />
                      <span>Full Name</span>
                    </label>
                    <input 
                      id="form-name"
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '15px',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                        transition: 'var(--transition-fast)'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="form-email" style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Mail size={14} style={{ color: 'var(--accent)' }} />
                      <span>Email Address</span>
                    </label>
                    <input 
                      id="form-email"
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '15px',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                        transition: 'var(--transition-fast)'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="form-message" style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <MessageSquare size={14} style={{ color: 'var(--accent)' }} />
                      <span>Your Message</span>
                    </label>
                    <textarea 
                      id="form-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Moganavasudev, I'd like to talk about..."
                      rows={5}
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '15px',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'var(--transition-fast)'
                      }}
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        color: '#ff6b6b',
                        fontSize: '14px',
                        backgroundColor: 'rgba(255, 107, 107, 0.06)',
                        border: '1px solid rgba(255, 107, 107, 0.15)',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <HelpCircle size={16} />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      fontSize: '15px'
                    }}
                  >
                    <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                    <Send size={16} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

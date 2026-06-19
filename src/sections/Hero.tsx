import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';

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




const ProfilePhoto: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
    }}>
      <img
        src={profileImg}
        alt="Moganavasudev P — Software Developer"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 5%',
          display: 'block',
          /* Fade left, right, top & bottom edges into the dark page */
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 4%, black 82%, transparent 100%)',
          WebkitMaskComposite: 'destination-in',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 4%, black 82%, transparent 100%)',
          maskComposite: 'intersect',
        } as React.CSSProperties}
      />
    </div>
  );
};







export const Hero: React.FC = () => {
  const stats = [
    { value: '6+', label: 'Projects Built' },
    { value: '900+', label: 'Problems Solved' },
    { value: '4+', label: 'Hackathons' }
  ];

  const handleScrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '90px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div 
        className="ambient-glow" 
        style={{
          top: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          alignItems: 'center'
        }}>
          {/* Left Column Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                backgroundColor: 'rgba(255, 140, 0, 0.08)',
                border: '1px solid rgba(255, 140, 0, 0.2)',
                borderRadius: '100px',
                color: 'var(--accent)',
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '16px',
              }}
            >
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 10px var(--accent)',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              <span>Seeking Developer Placements & Internships</span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(42px, 6vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#fff',
                lineHeight: 1.05,
                marginBottom: '8px',
              }}
            >
              Moganavasudev P
            </motion.h1>

            {/* Static Title (Replaced animated typewriter) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 'clamp(24px, 4.5vw, 32px)',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '20px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              Software Developer
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="gradient-text"
              style={{
                fontSize: 'clamp(20px, 3.5vw, 30px)',
                lineHeight: 1.25,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              Building Scalable Software, Cloud-Native Solutions, and AI-Powered Applications.
            </motion.h2>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                color: 'var(--text-secondary)',
                maxWidth: '650px',
                lineHeight: 1.6,
                marginBottom: '32px'
              }}
            >
              B.Tech Information Technology Student at Sri Eshwar College of Engineering with experience in Full Stack Development, AI Applications, Cloud Technologies, and DevOps. Passionate about building impactful software and solving real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <button 
                onClick={() => handleScrollToSection('#projects')} 
                className="btn btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FileText size={16} style={{ color: 'var(--accent)' }} />
                <span>View Resume</span>
              </a>

              <button 
                onClick={() => handleScrollToSection('#contact')} 
                className="btn btn-secondary"
              >
                <Mail size={16} style={{ color: 'var(--accent)' }} />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Stats & Socials Combined Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                maxWidth: '600px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '20px',
                paddingBottom: '20px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '100px' }}>
                    <span style={{ fontSize: '28px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{stat.value}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Social profiles links */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a 
                  href="https://github.com/Moganavasudev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/moganavasudev-p-105a78333/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:moganavasudevp@gmail.com" 
                  aria-label="Email Address"
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{
              width: '100%',
              alignSelf: 'stretch',
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

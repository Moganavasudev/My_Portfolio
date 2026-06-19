import React from 'react';
import Navbar from './components/Navbar';
import GlowEffect from './components/GlowEffect';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import CodingProfiles from './sections/CodingProfiles';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import { Mail, ArrowUp } from 'lucide-react';


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


export const App: React.FC = () => {
  return (
    <>
      {/* Background and Ambient Effects */}
      <div className="grid-background" />
      <div className="radial-mask" />
      <GlowEffect />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Featured Projects Section */}
        <Projects />

        {/* Coding Profiles Section */}
        <CodingProfiles />

        {/* Certifications Section */}
        <Certifications />

        {/* Achievements Section */}
        <Achievements />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer style={{
        backgroundColor: '#030303',
        position: 'relative',
        padding: '36px 0 20px 0',
        color: 'var(--text-secondary)',
        fontSize: '14px',
        overflow: 'hidden'
      }}>
        {/* Soft top gradient border */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.2), transparent)'
        }} />

        {/* Subtle bottom ambient glow */}
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.04) 0%, transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* Main Footer Content */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '32px'
          }}>
            {/* Brand Section */}
            <div style={{ maxWidth: '320px' }}>
              <a href="#home" style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: '16px'
              }}>
                <span>Moganavasudev P</span>
              </a>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Software Developer
              </p>
              
              {/* Social Links */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://github.com/moganavasudev-p" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/moganavasudev-p-105a78333/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#0077b5'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Linkedin size={20} />
                </a>
                <a href="mailto:moganavasudevp@gmail.com"
                  style={{ color: 'var(--text-muted)', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Quick Links</h4>
              <ul style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px 24px',
                listStyle: 'none',
                padding: 0
              }}>
                {['About', 'Education', 'Projects', 'Profiles', 'Certifications', 'Achievements', 'Tech', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '')}`} 
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        fontSize: '14px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {item === 'Tech' ? 'Tech Stack' : item === 'Profiles' ? 'Coding Profiles' : item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Back to top */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
               <a 
                 href="#home"
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   width: '44px',
                   height: '44px',
                   backgroundColor: 'rgba(255, 140, 0, 0.08)',
                   border: '1px solid rgba(255, 140, 0, 0.2)',
                   borderRadius: '50%',
                   color: 'var(--accent)',
                   transition: 'all 0.3s',
                   textDecoration: 'none'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.15)';
                   e.currentTarget.style.transform = 'translateY(-4px)';
                   e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 140, 0, 0.1)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.08)';
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = 'none';
                 }}
               >
                 <ArrowUp size={20} />
               </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '16px',
            color: 'var(--text-muted)',
            fontSize: '13px'
          }}>
            <p>© {new Date().getFullYear()} Moganavasudev P. All rights reserved.</p>

          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

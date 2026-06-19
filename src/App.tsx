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
        backgroundColor: '#070707',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '48px 0 32px 0',
        color: 'var(--text-secondary)',
        fontSize: '14px'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {/* Top Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>
                Moganavasudev P
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Building Scalable Software, Cloud Infrastructure & AI Applications.
              </p>
            </div>

            {/* Quick Links */}
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
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
                      transition: 'color 0.2s'
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

          {/* Bottom Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.03)',
            paddingTop: '24px',
            color: 'var(--text-muted)',
            fontSize: '12px'
          }}>
            <p>© {new Date().getFullYear()} Moganavasudev P. All rights reserved.</p>
            <p>Designed and engineered with passion.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

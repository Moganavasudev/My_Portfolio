import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for glassmorphism styling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const scrollPos = window.scrollY + 120;
      const sectionElements = links.map(link => document.querySelector(link.href));
      
      let currentSection = 'home';
      for (let i = 0; i < sectionElements.length; i++) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPos >= top && scrollPos < top + el.clientHeight) {
            currentSection = links[i].href.substring(1);
            break;
          }
        }
      }
      
      if (window.scrollY < 200) {
        currentSection = 'home';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '12px 0' : '24px 0',
          transition: 'padding 0.3s ease',
          background: scrolled ? 'rgba(5, 5, 5, 0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#home" onClick={() => handleLinkClick('#home')} style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>
            <span>Moganavasudev P</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul style={{
              display: 'flex',
              gap: '2px',
              listStyle: 'none',
              padding: 0,
            }}>
              {links.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.label} style={{ position: 'relative' }}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: isActive ? '#fff' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Call to Action */}
          <div className="desktop-nav">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary" 
              style={{
                padding: '8px 16px',
                fontSize: '13px',
                borderRadius: '20px',
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              zIndex: 49,
              padding: '24px',
            }}
          >
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              listStyle: 'none',
            }}>
              {links.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      style={{
                        display: 'block',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        padding: '8px 0',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.02)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li style={{ marginTop: '8px' }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => setIsOpen(false)}
                >
                  View Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

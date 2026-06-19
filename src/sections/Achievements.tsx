import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code2, Brain } from 'lucide-react';

// Import achievement certificates from src/assets
import codeSprintImg from '../assets/CodeSprint.png';
import originImg from '../assets/ORIGIN.jpeg';
import genAiImg from '../assets/Gen AI.png';

interface Achievement {
  stat?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  desc: string;
  year: string;
  certUrl?: string;
}

export const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null);
  const [selectedCertName, setSelectedCertName] = React.useState<string>('');

  const achievements: Achievement[] = [
    {
      stat: 'Top 15',
      icon: <Award size={24} style={{ color: 'var(--accent)' }} />,
      title: 'CodeSprint 2026 Finalist',
      sub: 'National Level Hackathon',
      desc: 'Emerged as a Top 15 Finalist in the national level hackathon, designing and pitching a full-stack product inside 36 hours.',
      year: '2026',
      certUrl: codeSprintImg
    },
    {
      stat: 'Origin',
      icon: <Award size={24} style={{ color: 'var(--accent)' }} />,
      title: 'ORIGIN 2026 – Saveetha Engineering College',
      sub: 'Hackathon / Innovation Challenge',
      desc: 'Participated in ORIGIN 2026 at Saveetha Engineering College, showcasing innovation, technical problem-solving, and collaborative project development skills.',
      year: '2026',
      certUrl: originImg
    },
    {
      stat: 'GenAI',
      icon: <Brain size={24} style={{ color: 'var(--accent)' }} />,
      title: 'GenAI Hackathon Participant',
      sub: 'Inter-College Competition',
      desc: 'Participated in the inter-college generative AI product build hackathon, building LLM application pipelines and neural interfaces.',
      year: '2025',
      certUrl: genAiImg
    },
    {
      stat: '75+',
      icon: <Award size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Organized Bounty Hunter',
      sub: 'Technical Event Leadership',
      desc: 'Led and coordinated the Bounty Hunter technical competitive coding event at Sri Eshwar College of Engineering, managing 75+ active participants.',
      year: '2025'
    },
    {
      stat: 'Web',
      icon: <Code2 size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Createathon Web Hackathon',
      sub: 'Frontend & UI Build',
      desc: 'Competed in the web interface build hackathon, developing responsive design layouts, client logic, and fluid transition modules.',
      year: '2024'
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-tag">Milestones</span>
          <h2 className="section-title">Key Achievements</h2>
          <p className="section-subtitle">
            A snapshot of my logical proficiency, competitive programming metrics, and open-source contributions.
          </p>
        </div>

        {/* Flex Wrap Center layout to center the last 2 cards */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '12px'
        }}>
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(255, 140, 0, 0.35)', 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 140, 0, 0.03)' 
              }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px',
                position: 'relative',
                border: '1px solid rgba(255, 140, 0, 0.12)',
                background: 'rgba(10, 10, 10, 0.7)',
                cursor: 'default',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                width: '100%',
                maxWidth: '360px',
                minHeight: '340px',
                flex: '1 1 320px'
              }}
            >
              {/* Giant ambient background watermark text */}
              {item.stat && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  fontSize: '72px',
                  fontWeight: 900,
                  color: 'rgba(255, 140, 0, 0.08)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {item.stat}
                </div>
              )}

              <div>
                {/* Header Row: Icon (Left) & Year Tag (Right) */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '28px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 140, 0, 0.05)',
                    border: '1px solid rgba(255, 140, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  
                  {/* Year Tag at Top Right */}
                  <span style={{
                    fontSize: '11px',
                    color: 'var(--accent)',
                    backgroundColor: 'rgba(255, 140, 0, 0.08)',
                    border: '1px solid rgba(255, 140, 0, 0.25)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontWeight: 600,
                  }}>
                    {item.year}
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.sub}
                  </p>
                </div>

                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>

              {/* Footer Row: View Certificate Button at Bottom Right */}
              {item.certUrl && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '12px',
                  marginTop: '12px'
                }}>
                  <button 
                    onClick={() => {
                      setSelectedCert(item.certUrl || null);
                      setSelectedCertName(item.title);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#000',
                      backgroundColor: 'var(--accent)',
                      border: '1px solid var(--accent)',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffa233';
                      e.currentTarget.style.borderColor = '#ffa233';
                      e.currentTarget.style.boxShadow = '0 0 12px rgba(255, 140, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span>View</span>
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              backgroundColor: 'rgba(5, 5, 5, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedCert(null)}
          >
            {/* View Original Image Button (External Link) */}
            <a
              href={selectedCert}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: '24px',
                right: '130px',
                backgroundColor: 'rgba(255, 140, 0, 0.15)',
                border: '1px solid rgba(255, 140, 0, 0.4)',
                color: 'var(--accent)',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                zIndex: 1010,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.25)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.4)';
              }}
            >
              <span>View Image</span>
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>

            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13px',
                transition: 'all 0.2s ease',
                zIndex: 1010,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Close
            </button>

            {/* 3D Flipping Certificate Container holding image */}
            <motion.div
              initial={{ scale: 0.8, rotateY: -90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '95%',
                maxWidth: '960px',
                height: 'auto',
                maxHeight: '80vh',
                position: 'relative',
                borderRadius: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert}
                alt={selectedCertName}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;

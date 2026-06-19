import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code2, Brain, Palette } from 'lucide-react';

// Import PNG image certificates from src/assets
import dsaImg from '../assets/DSA Certificate.png';
import genAiImg from '../assets/Gen AI Certificate.png';
import pythonImg from '../assets/Python Certificate.png';
import canvaImg from '../assets/Canva Certificate.png';
import cppImg from '../assets/Cpp Certificate.png';
import cImg from '../assets/C Certificate.png';

interface Certification {
  name: string;
  issuer: string;
  idLabel: string;
  idValue: string;
  date: string;
  skills: string[];
  link: string;
  color: string;
  icon: React.ReactNode;
  instructor?: string;
  length?: string;
  score?: string;
  credits?: string;
  imageUrl: string;
  importantDetail: string;
}

const CertificationCard: React.FC<{ cert: Certification; cardVariants: any; onFlip: () => void }> = ({ cert, cardVariants, onFlip }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255, 140, 0, 0.15)',
        background: 'rgba(10, 10, 10, 0.7)',
        boxShadow: 'var(--glass-shadow)',
        height: '400px',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.4)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 140, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.15)';
        e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
      }}
    >
      {/* Highlight Top border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, transparent, rgba(255, 140, 0, 0.3), transparent)',
      }} />

      <div>
        {/* Header: Icon (Left) & Year Badge (Right) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 140, 0, 0.05)',
            border: '1px solid rgba(255, 140, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {cert.icon}
          </div>
          
          {/* Year Badge at Top Right */}
          <span style={{
            fontSize: '13px',
            color: 'var(--accent)',
            backgroundColor: 'rgba(255, 140, 0, 0.08)',
            border: '1px solid rgba(255, 140, 0, 0.25)',
            padding: '4px 10px',
            borderRadius: '20px',
            fontWeight: 600,
          }}>
            {cert.date}
          </span>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.35, color: '#fff' }}>{cert.name}</h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {cert.issuer}
          </p>
        </div>

        {/* Details Points */}
        <ul style={{
          listStyleType: 'none',
          paddingLeft: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {cert.skills.map((skill, sIdx) => (
            <li key={sIdx} style={{
              fontSize: '13.5px',
              color: 'var(--text-secondary)',
              lineHeight: 1.35,
              position: 'relative',
              paddingLeft: '12px'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '7px',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                opacity: 0.8
              }} />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Important Detail (Left) & View Button (Right) */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '14px',
        marginTop: '14px'
      }}>
        <span style={{ fontSize: '13.5px', color: 'var(--text-muted)', fontWeight: 500 }}>
          {cert.importantDetail}
        </span>

        {/* View Button at Bottom Right */}
        <button 
          onClick={onFlip}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
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
    </motion.div>
  );
};

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = React.useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      name: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udemy',
      idLabel: 'Certificate No',
      idValue: 'UC-dade0e7c-16ec-4e29-9fa0-3910728891cb',
      date: '2025',
      skills: ['Complexity analysis (Big O, time/space)', 'Recursion & backtracking algorithms', 'Linear structures (lists, stacks, queues)', 'Non-linear structures (trees, heaps, graphs)'],
      link: 'https://ude.my/UC-dade0e7c-16ec-4e29-9fa0-3910728891cb',
      color: '#FF8C00',
      icon: <Code2 size={24} style={{ color: '#FF8C00' }} />,
      instructor: 'Abdul Bari',
      length: '76 total hours',
      imageUrl: dsaImg,
      importantDetail: 'Course by Abdul Bari'
    },
    {
      name: 'Introduction to Generative AI',
      issuer: 'IBM SkillsBuild',
      idLabel: 'Course ID',
      idValue: 'ALM-COURSE_4058859',
      date: '2025',
      skills: ['Generative AI foundations & large language models', 'Prompt engineering & AI application workflows', 'Adobe Learning Manager tracking standards', 'Generative neural layers & model safety indices'],
      link: 'https://www.ibm.com/training',
      color: '#FF8C00',
      icon: <Brain size={24} style={{ color: '#FF8C00' }} />,
      length: '1 hr 30 mins',
      imageUrl: genAiImg,
      importantDetail: 'Course by IBM'
    },
    {
      name: 'Python Programming Masterclass',
      issuer: 'Udemy',
      idLabel: 'Certificate No',
      idValue: 'UC-cb5266df-309a-4981-8395-f1d1ebbb430f',
      date: '2025',
      skills: ['Python core programming syntax & algorithms', 'Object-Oriented Programming (OOP) in Python', 'Built-in functions, decorators, and generators', 'File operations, exception handling, & modules'],
      link: 'https://ude.my/UC-cb5266df-309a-4981-8395-f1d1ebbb430f',
      color: '#FF8C00',
      icon: <Code2 size={24} style={{ color: '#FF8C00' }} />,
      instructor: 'Makeintern Course',
      length: '2.5 total hours',
      imageUrl: pythonImg,
      importantDetail: 'Course by Makeintern'
    },
    {
      name: 'Essential Canva for Graphics Design to Boost Productivity',
      issuer: 'Udemy',
      idLabel: 'Certificate No',
      idValue: 'UC-a57ef262-cfb2-47bd-bbe6-a8678f983a65',
      date: '2025',
      skills: ['Visual brand layout & graphics design concepts', 'Digital assets creation & presentation elements', 'Typography rules, alignment, & color matching', 'Productivity templates & content workflows'],
      link: 'https://ude.my/UC-a57ef262-cfb2-47bd-bbe6-a8678f983a65',
      color: '#FF8C00',
      icon: <Palette size={24} style={{ color: '#FF8C00' }} />,
      instructor: 'Learnify IT',
      length: '4 total hours',
      imageUrl: canvaImg,
      importantDetail: 'Course by Learnify IT'
    },
    {
      name: 'Certificate for the Completion of Cpp Training',
      issuer: 'IIT Bombay',
      idLabel: 'Verification ID',
      idValue: '4049375TJ7',
      date: '2024',
      skills: ['C++ basic syntax, operations, & compilations', 'Object-Oriented Programming (Classes & Objects)', 'Dynamic memory management & pointers', 'Function overloading & inheritance logic'],
      link: 'https://spoken-tutorial.org',
      color: '#FF8C00',
      icon: <Award size={24} style={{ color: '#FF8C00' }} />,
      score: '77.50%',
      credits: '2',
      imageUrl: cppImg,
      importantDetail: 'Score: 77.50% (2 Credits)'
    },
    {
      name: 'Certificate for the Completion of C Training',
      issuer: 'IIT Bombay',
      idLabel: 'Verification ID',
      idValue: '4049375TZR',
      date: '2024',
      skills: ['Procedural programming foundations & structures', 'Arrays, pointers, & file handling in C', 'Header configuration & system operations', 'Pre-processors, macros, and compilation keys'],
      link: 'https://spoken-tutorial.org',
      color: '#FF8C00',
      icon: <Award size={24} style={{ color: '#FF8C00' }} />,
      score: '85.00%',
      credits: '2',
      imageUrl: cImg,
      importantDetail: 'Score: 85.00% (2 Credits)'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="certifications" className="section">
      {/* Background Glow */}
      <div 
        className="ambient-glow" 
        style={{
          top: '30%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.03) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified credentials, academic programming training, and technical competencies certifying my engineering skills.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid-3-cols"
          style={{
            marginTop: '12px'
          }}
        >
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index} 
              cert={cert} 
              cardVariants={cardVariants} 
              onFlip={() => setSelectedCert(cert)}
            />
          ))}
        </motion.div>

      </div>

      {/* Fullscreen Certificate Flip Modal */}
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
              href={selectedCert.imageUrl}
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
                src={selectedCert.imageUrl}
                alt={selectedCert.name}
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

export default Certifications;

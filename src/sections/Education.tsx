import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

interface EducationItem {
  icon: React.ReactNode;
  institution: string;
  degree: string;
  scoreLabel: string;
  scoreValue: string;
  period: string;
  details: string[];
}

export const Education: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      icon: <GraduationCap size={20} style={{ color: 'var(--accent)' }} />,
      institution: 'Sri Eshwar College of Engineering',
      degree: 'B.Tech Information Technology',
      scoreLabel: 'CGPA',
      scoreValue: '8.15 (III Sem)',
      period: '2024 - 2028',
      details: [
        'Pursuing specialized course majors in Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, and DBMS.',
        'Actively engaged in technical event management, organizing competitive coding events with over 75+ active participants.',
        'Deepening expertise in modern full-stack web applications, cloud architectures, and machine learning pipelines.'
      ]
    },
    {
      icon: <Award size={20} style={{ color: 'var(--accent)' }} />,
      institution: 'Sathya Saai Matriculation Higher Secondary School',
      degree: 'Higher Secondary Certificate (HSC)',
      scoreLabel: 'Percentage',
      scoreValue: '87.8%',
      period: '2022 - 2024',
      details: [
        'Completed higher secondary studies with a focus on Mathematics, Physics, Chemistry, and Biology.',
        'Cultivated strong logical reasoning, experimental analysis, and academic foundations.'
      ]
    },
    {
      icon: <BookOpen size={20} style={{ color: 'var(--accent)' }} />,
      institution: 'Fatima Matriculation Higher Secondary School',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      scoreLabel: 'Percentage',
      scoreValue: '89.8%',
      period: '2021 - 2022',
      details: [
        'Completed general secondary curriculum, achieving distinction grades in Science and Mathematics disciplines.',
        'Cultivated early interests in engineering principles and logical problem-solving structures.'
      ]
    }
  ];

  return (
    <section id="education" className="section" style={{ overflow: 'hidden' }}>
      {/* Ambient Background Glow */}
      <div 
        className="ambient-glow" 
        style={{
          top: '30%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-tag">Academics</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            A chronological timeline of my academic foundations, scoring indexes, and technical college qualifications.
          </p>
        </div>

        <div style={{ 
          position: 'relative', 
          maxWidth: '850px', 
          margin: '12px auto 0 auto',
          paddingLeft: '32px'
        }}>
          {/* Vertical Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '8px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(255, 140, 0, 0.1) 100%)',
          }} />

          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                position: 'relative',
                marginBottom: '48px',
              }}
            >
              {/* Timeline Bullet */}
              <div style={{
                position: 'absolute',
                left: '-32px',
                top: '4px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#050505',
                border: '3px solid var(--accent)',
                boxShadow: '0 0 10px var(--accent)',
                zIndex: 2,
              }} />

              {/* Card Container */}
              <div className="glass-card" style={{ padding: '24px 32px' }}>
                {/* Card Top Border Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(to right, transparent, rgba(255, 140, 0, 0.2), transparent)',
                }} />

                {/* Header */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 300px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 140, 0, 0.05)',
                      border: '1px solid rgba(255, 140, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {edu.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.2 }}>{edu.degree}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '2px' }}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights and Period Grid */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    flexWrap: 'wrap'
                  }}>
                    {/* Period Badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.04)'
                    }}>
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>

                    {/* Highly Highlighted Score Badge */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      backgroundColor: 'rgba(255, 140, 0, 0.08)',
                      border: '1px solid rgba(255, 140, 0, 0.25)',
                      padding: '6px 16px',
                      borderRadius: '12px',
                      boxShadow: '0 0 15px rgba(255, 140, 0, 0.08)',
                      minWidth: '110px'
                    }}>
                      <span style={{ 
                        fontSize: '9px', 
                        color: 'var(--accent)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.08em', 
                        fontWeight: 700 
                      }}>
                        {edu.scoreLabel}
                      </span>
                      <span style={{ 
                        fontSize: '20px', 
                        fontWeight: 800, 
                        color: '#fff', 
                        lineHeight: 1.1, 
                        marginTop: '2px' 
                      }}>
                        {edu.scoreValue}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <ul style={{
                  listStyleType: 'none',
                  paddingLeft: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '10px',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        opacity: 0.7
                      }} />
                      {detail}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

interface ExperienceItem {
  icon: React.ReactNode;
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      icon: <Briefcase size={20} style={{ color: 'var(--accent)' }} />,
      role: 'MERN Stack Developer Intern',
      company: 'Software Internships',
      period: 'Jan 2026 - Present',
      description: [
        'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
        'Built RESTful APIs and optimized system communication.',
        'Implemented secure user authentication and role-based authorization systems.',
        'Optimized database operations and queries for improved latency.',
        'Designed modern, responsive, and mobile-first user interfaces.',
        'Worked on designing and structuring scalable backend architectures.'
      ],
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT']
    },
    {
      icon: <Award size={20} style={{ color: 'var(--accent)' }} />,
      role: 'FOSSEE Summer Fellow',
      company: 'IIT Bombay',
      period: 'June 2025 - August 2025',
      description: [
        'Selected for the prestigious national-level fellowship in open-source systems and packaging structures.',
        'Contributed to compiling, packaging, and hosting academic and technical software packages on cloud infrastructures.',
        'Authored optimized shell scripts and automated deployment setups to improve packaging efficiency across Unix distributions.'
      ],
      tags: ['Linux', 'Shell Scripting', 'Open Source', 'Git', 'Cloud Hosting']
    },
    {
      icon: <GraduationCap size={20} style={{ color: 'var(--accent)' }} />,
      role: 'B.Tech Information Technology Student',
      company: 'Sri Eshwar College of Engineering',
      period: '2023 - Present',
      description: [
        'Pursuing specialized course majors in Data Structures & Algorithms, Operating Systems, Database Management Systems, and Cloud Architectures.',
        'Fostered coding skills by solving algorithm problems, organizing technical event buildouts, and contributing to open-source software.'
      ],
      tags: ['Java', 'Python', 'C++', 'Docker', 'Kubernetes', 'AWS']
    }
  ];


  return (
    <section id="experience" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-tag">History</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            A review of my academic path, fellowships, and competitive development experiences.
          </p>
        </div>

        <div style={{ 
          position: 'relative', 
          maxWidth: '850px', 
          margin: '40px auto 0 auto',
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

          {experiences.map((exp, index) => (
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} />

              {/* Card Container */}
              <div className="glass-card" style={{ padding: '24px 32px' }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 140, 0, 0.05)',
                      border: '1px solid rgba(255, 140, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{exp.role}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500 }}>{exp.company}</p>
                    </div>
                  </div>

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
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Body Details */}
                <ul style={{
                  listStyleType: 'none',
                  paddingLeft: 0,
                  marginBottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  {exp.description.map((desc, dIdx) => (
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
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{
                      fontSize: '12px',
                      color: 'var(--text-primary)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      fontWeight: 500
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, LineChart, HeartPulse, GraduationCap, Brain, LayoutTemplate, Sparkles } from 'lucide-react';

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

interface Project {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  github: string;
  live?: string; // Optional for non-featured projects
  isFeatured?: boolean;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      isFeatured: true,
      icon: <Brain size={28} style={{ color: 'var(--accent)' }} />,
      title: 'ARIVON',
      desc: 'Arivon is an advanced AI-powered platform focused on solving real-world challenges using intelligent automation, modern web technologies, and scalable architecture.',
      features: [
        'AI-powered automation',
        'Smart workflow management',
        'Intelligent decision support',
        'Modern user experience',
        'Scalable architecture'
      ],
      tech: ['React.js', 'FastAPI', 'IBM Granite LLM', 'Docker', 'AWS', 'PostgreSQL'],
      github: 'https://github.com/Mohamed-sabeek/arivon',
      live: 'https://arivon.vercel.app/'
    },
    {
      icon: <LineChart size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Gamified Virtual Trading League',
      desc: 'A full-stack virtual stock trading platform that enables students to learn investing through simulated trading using near real-time market data and AI-powered guidance.',
      features: [
        'Virtual stock trading engine',
        'Real-time portfolio tracking',
        'Dynamic leaderboards',
        'AI-powered trading assistant',
        'Risk profiling system',
        'TradingView market visualization'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TradingView Widgets', 'Gemini API', 'REST APIs'],
      github: 'https://github.com/Moganavasudev/GamiTrade'
    },
    {
      icon: <HeartPulse size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Fellow Medi',
      desc: 'An AI-powered healthcare assistant that improves medication safety through intelligent prescription analysis and drug interaction detection.',
      features: [
        'Drug interaction detection',
        'Prescription data extraction',
        'Age-specific dosage recommendations',
        'Alternative medicine suggestions',
        'NLP-powered healthcare insights'
      ],
      tech: ['FastAPI', 'Streamlit', 'IBM Granite 3.1 LLM', 'PyTorch'],
      github: 'https://github.com/MahaAswin/MedicalChatbot-Team-Fellows'
    },
    {
      icon: <GraduationCap size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Student Grade Panel',
      desc: 'A full-stack academic management platform designed to monitor, analyze, and manage student performance using secure role-based access.',
      features: [
        'Role-based authentication',
        'Grade analytics dashboard',
        'Academic performance monitoring',
        'Automated grade calculations',
        'Secure REST API architecture'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
      github: 'https://github.com/Moganavasudev/StudentGradePanel'
    },
    {
      icon: <LayoutTemplate size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Portfolio Builder',
      desc: 'A portfolio generation platform that allows users to create and customize professional portfolios through an intuitive web interface.',
      features: [
        'Dynamic portfolio generation',
        'Customizable layouts',
        'Responsive design system',
        'User-friendly editing experience',
        'Professional portfolio management'
      ],
      tech: ['Django', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Moganavasudev'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="projects" className="section">
      {/* Ambient Glow */}
      <div 
        className="ambient-glow" 
        style={{
          bottom: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
          <span className="section-tag">Featured Works</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A showcase of systems architecture, full-stack applications, and machine learning utilities I have engineered.
          </p>
        </div>

        {/* Vertical Stack of All Project Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {projects.map((project, index) => {
            const isFeatured = project.isFeatured;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={cardVariants}
                className="glass-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  // ARIVON gets highlighted border and box shadow, others get standard borders
                  border: isFeatured 
                    ? '1px solid rgba(255, 140, 0, 0.25)' 
                    : '1px solid rgba(255, 255, 255, 0.06)',
                  boxShadow: isFeatured
                    ? '0 10px 40px rgba(255, 140, 0, 0.06), inset 0 0 20px rgba(255, 140, 0, 0.01)'
                    : 'var(--glass-shadow)',
                  padding: isFeatured ? '40px' : '32px',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  // Add subtle orange border glow on hover for all cards
                  e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.25)';
                  e.currentTarget.style.boxShadow = isFeatured
                    ? '0 15px 40px rgba(255, 140, 0, 0.08), 0 0 20px rgba(255, 140, 0, 0.02)'
                    : '0 15px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.03)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isFeatured 
                    ? 'rgba(255, 140, 0, 0.25)' 
                    : 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.boxShadow = isFeatured
                    ? '0 10px 40px rgba(255, 140, 0, 0.06), inset 0 0 20px rgba(255, 140, 0, 0.01)'
                    : 'var(--glass-shadow)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                {/* Spotlight gradient only on ARIVON */}
                {isFeatured && (
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255, 140, 0, 0.06) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    pointerEvents: 'none'
                  }} />
                )}

                <div className="spotlight-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '32px'
                }}>
                  {/* Left Column: Icon, Title, Description, Actions, Tech tags */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                    {isFeatured && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <Sparkles size={16} style={{ color: 'var(--accent)' }} />
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          Hero Featured Project
                        </span>
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <div style={{
                        width: isFeatured ? '56px' : '48px',
                        height: isFeatured ? '56px' : '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 140, 0, 0.05)',
                        border: '1px solid rgba(255, 140, 0, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {project.icon}
                      </div>
                      <h3 style={{ 
                        fontSize: isFeatured ? '30px' : '24px', 
                        fontWeight: 800, 
                        color: '#fff' 
                      }}>{project.title}</h3>
                    </div>

                    <p style={{ 
                      fontSize: isFeatured ? '17px' : '15.5px', 
                      color: 'var(--text-secondary)', 
                      lineHeight: 1.6, 
                      marginBottom: '24px' 
                    }}>
                      {project.desc}
                    </p>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ padding: '8px 16px', fontSize: '14px' }}
                      >
                        <Github size={16} />
                        <span>GitHub Repository</span>
                      </a>
                      
                      {/* Live Platform button is ONLY for ARIVON */}
                      {isFeatured && project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{ padding: '8px 16px', fontSize: '14px' }}
                        >
                          <ExternalLink size={16} />
                          <span>Live Platform</span>
                        </a>
                      )}
                    </div>

                    {/* Tech Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.tech.map((tag, i) => (
                        <span key={i} style={{
                          fontSize: '12px',
                          color: '#fff',
                          backgroundColor: 'rgba(255, 140, 0, 0.06)',
                          border: '1px solid rgba(255, 140, 0, 0.15)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontWeight: 600
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Capabilities */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: isFeatured ? '32px' : '24px',
                    textAlign: 'left'
                  }}>
                    <h4 style={{ 
                      fontSize: '15px', 
                      fontWeight: 600, 
                      color: '#fff', 
                      marginBottom: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Key Capabilities
                    </h4>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {project.features.map((feat, i) => (
                        <li key={i} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          fontSize: '14.5px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5
                        }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent)',
                            marginTop: '8px',
                            flexShrink: 0
                          }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;

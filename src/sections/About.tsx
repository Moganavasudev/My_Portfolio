import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Cloud, Code } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: <Code size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Software Development',
      desc: 'Writing clean, optimized, and maintainable code in Java, Python, and JavaScript.'
    },
    {
      icon: <Cloud size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Cloud Native',
      desc: 'Familiar with container orchestration via Docker and Kubernetes, and AWS cloud management.'
    },
    {
      icon: <Cpu size={24} style={{ color: 'var(--accent)' }} />,
      title: 'AI Architectures',
      desc: 'Integrating language models and generative AI into web structures for smart features.'
    },
    {
      icon: <Shield size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Problem Solving',
      desc: 'Consistently testing logical skills through data structures and algos across coding platforms.'
    }
  ];

  return (
    <section id="about" className="section" style={{ padding: '36px 0' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
          <span className="section-tag">About Me</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Who I Am & What I Do</h2>
        </div>

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginTop: 0
        }}>
          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px'
            }}
          >
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-primary)' }}>
              Hello! I'm Moganavasudev P, a passionate Software Developer currently pursuing B.Tech Information Technology at Sri Eshwar College of Engineering.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
              I enjoy building scalable full-stack web applications, AI-powered solutions, and cloud-native systems. My technical interests span Full Stack Development, DevOps, Cloud Computing, Kubernetes, Docker, Artificial Intelligence, and Data Structures & Algorithms.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
              I actively participate in hackathons, competitive coding tournaments, and technical event organizations to continuously refine my systems engineering, teamwork skills, and logical problem-solving abilities.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            {cards.map((card, i) => (
              <div 
                key={i} 
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '24px'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 140, 0, 0.05)',
                  border: '1px solid rgba(255, 140, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{card.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;

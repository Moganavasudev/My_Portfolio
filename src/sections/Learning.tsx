import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Box, Cpu, CloudLightning, Database, Sliders, Sparkles } from 'lucide-react';

interface LearningItem {
  icon: React.ReactNode;
  title: string;
  focus: string;
  description: string;
}

export const Learning: React.FC = () => {
  const learningTopics: LearningItem[] = [
    {
      icon: <Box size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Docker',
      focus: 'Containerization & Builds',
      description: 'Mastering multi-stage builds, containerization standards, resource allocation, and composing multi-container local environments.'
    },
    {
      icon: <Cpu size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Kubernetes',
      focus: 'Container Orchestration',
      description: 'Studying pod management, configuration maps, cluster networking, service routing, and deployment replication scaling.'
    },
    {
      icon: <BookOpen size={24} style={{ color: 'var(--accent)' }} />,
      title: 'AWS',
      focus: 'Cloud Infrastructure',
      description: 'Understanding identity management (IAM), storage configurations (S3), compute provisioning (EC2), and VPC networking topologies.'
    },
    {
      icon: <CloudLightning size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Cloud Native Development',
      focus: 'Stateless Architectures',
      description: 'Exploring Twelve-Factor app patterns, API gateways, microservices integration, and CI/CD automated deployment pipelines.'
    },
    {
      icon: <Sliders size={24} style={{ color: 'var(--accent)' }} />,
      title: 'DevOps Engineering',
      focus: 'Automation & Monitoring',
      description: 'Implementing infrastructure as code (IaC), workflow automation, integration tests, and monitoring log structures.'
    },
    {
      icon: <Database size={24} style={{ color: 'var(--accent)' }} />,
      title: 'System Design',
      focus: 'Scalability & Availability',
      description: 'Deep diving into caching strategies, load balancing algorithms, database sharding, and high-availability backend layouts.'
    },
    {
      icon: <Sparkles size={24} style={{ color: 'var(--accent)' }} />,
      title: 'AI Engineering',
      focus: 'Generative AI Pipelines',
      description: 'Structuring prompts, fine-tuning configurations, loading local model packages, and integrating LLMs inside active web endpoints.'
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
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="learning" className="section">
      {/* Background Glow */}
      <div 
        className="ambient-glow" 
        style={{
          top: '30%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.04) 0%, transparent 70%)',
          filter: 'blur(75px)',
        }}
      />

      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-tag">Focus</span>
          <h2 className="section-title">Currently Exploring</h2>
          <p className="section-subtitle">
            Technology domains and architectural concepts I am actively studying to build more resilient, distributed systems.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '16px'
          }}
        >
          {learningTopics.map((topic, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '28px'
              }}
            >
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
                {topic.icon}
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{topic.title}</h3>
                <p style={{ 
                  fontSize: '12px', 
                  color: 'var(--accent)', 
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginTop: '4px',
                  marginBottom: '12px'
                }}>
                  {topic.focus}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Learning;

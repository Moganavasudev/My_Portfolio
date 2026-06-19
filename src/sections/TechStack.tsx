import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Binary, 
  Boxes, 
  Database, 
  Network, 
  Code2,
  Lock
} from 'lucide-react';

interface TechItem {
  name: string;
  level: string;
}

interface TechGroup {
  category: string;
  items: TechItem[];
}

interface TechLogoProps {
  name: string;
}

const TechLogo: React.FC<TechLogoProps> = ({ name }) => {
  const [error, setError] = useState(false);
  const key = name.toLowerCase().trim();

  // Custom static icons
  if (key === 'dsa') {
    return <Binary size={26} style={{ color: 'var(--accent)' }} />;
  }
  if (key === 'oops') {
    return <Boxes size={26} style={{ color: 'var(--accent)' }} />;
  }
  if (key === 'dbms') {
    return <Database size={26} style={{ color: 'var(--accent)' }} />;
  }
  if (key === 'rest apis') {
    return <Network size={26} style={{ color: 'var(--accent)' }} />;
  }

  // CDN logo links
  const logoUrls: Record<string, string> = {
    'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'c++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'c': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'react.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'tailwind css': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    'node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'express.js': 'https://cdn.simpleicons.org/express/ffffff',
    'spring boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    'jwt authentication': 'https://cdn.simpleicons.org/jsonwebtokens/ffffff',
    'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg',
    'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
    'git & github': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'postman': 'https://cdn.simpleicons.org/postman/FF6C37',
  };

  const url = logoUrls[key];

  if (url && !error) {
    return (
      <img 
        src={url} 
        alt={name} 
        style={{ 
          width: '28px', 
          height: '28px', 
          objectFit: 'contain',
        }} 
        onError={() => setError(true)}
      />
    );
  }

  // Fallback defaults
  if (key.includes('db') || key.includes('sql') || key.includes('mongo')) {
    return <Database size={26} style={{ color: 'var(--text-muted)' }} />;
  }
  if (key.includes('auth') || key.includes('jwt') || key.includes('token')) {
    return <Lock size={26} style={{ color: 'var(--text-muted)' }} />;
  }
  return <Code2 size={26} style={{ color: 'var(--text-muted)' }} />;
};

export const TechStack: React.FC = () => {
  const groups: TechGroup[] = [
    {
      category: 'Programming',
      items: [
        { name: 'Java', level: 'OOP & DSA' },
        { name: 'C++', level: 'Core Logic' },
        { name: 'Python', level: 'AI & Scripting' },
        { name: 'C', level: 'Core Syntax' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', level: 'Semantics' },
        { name: 'CSS', level: 'Responsive' },
        { name: 'JavaScript', level: 'Dynamic Logic' },
        { name: 'TypeScript', level: 'Type Safety' },
        { name: 'React.js', level: 'SPAs & Hooks' },
        { name: 'Tailwind CSS', level: 'Utility Styling' },
        { name: 'Bootstrap', level: 'UI Components' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 'Server Side' },
        { name: 'Express.js', level: 'API Routing' },
        { name: 'Spring Boot', level: 'MVC Services' },
        { name: 'JWT Authentication', level: 'Secure Tokens' },
        { name: 'REST APIs', level: 'Integrations' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', level: 'Document Store' },
        { name: 'MySQL', level: 'Relational DB' },
        { name: 'PostgreSQL', level: 'Relational DB' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', level: 'Cloud Infra' },
        { name: 'Docker', level: 'Containers' },
        { name: 'Kubernetes', level: 'Orchestration' },
        { name: 'Git & GitHub', level: 'VCS & Collab' },
        { name: 'Linux', level: 'Admin & Bash' },
        { name: 'Postman', level: 'API Client' }
      ]
    }
  ];

  return (
    <section id="tech" className="section">
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive list of programming languages, frameworks, database systems, and DevOps/cloud tools that form my core competencies.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          marginTop: '32px'
        }}>
          {groups.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: gIdx * 0.08 }}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '24px 32px'
              }}
            >
              <h3 style={{ 
                fontSize: '15px', 
                fontWeight: 600, 
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                paddingBottom: '12px',
                margin: 0
              }}>
                {group.category}
              </h3>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                width: '100%'
              }}>
                {group.items.map((tech, tIdx) => (
                  <div 
                    key={tIdx} 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '16px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.015)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      borderRadius: '12px',
                      transition: 'var(--transition-smooth)',
                      flex: '1 1 110px',
                      maxWidth: '130px',
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.35)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.03)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 140, 0, 0.08)';
                      
                      // Highlight logo container border
                      const logo = e.currentTarget.querySelector('.logo-holder') as HTMLDivElement;
                      if (logo) {
                        logo.style.borderColor = 'rgba(255, 140, 0, 0.4)';
                        logo.style.backgroundColor = 'rgba(255, 140, 0, 0.08)';
                        logo.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.015)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';

                      // Reset logo container border
                      const logo = e.currentTarget.querySelector('.logo-holder') as HTMLDivElement;
                      if (logo) {
                        logo.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                        logo.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                        logo.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <div 
                      className="logo-holder"
                      style={{
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '12px',
                        flexShrink: 0,
                        transition: 'var(--transition-fast)',
                      }}
                    >
                      <TechLogo name={tech.name} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
                      <span style={{ 
                        fontSize: '13.5px', 
                        fontWeight: 600, 
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '110px'
                      }}>
                        {tech.name}
                      </span>
                      <span style={{ 
                        fontSize: '10px', 
                        color: 'var(--text-muted)', 
                        fontFamily: 'var(--font-mono)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '110px'
                      }}>
                        {tech.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;

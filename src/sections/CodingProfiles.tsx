import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Import platform PNG logos from src/assets
import leetcodeLogo from '../assets/leetcode-removebg-preview.png';
import skillrackLogo from '../assets/skillrack-removebg-preview.png';
import codechefLogo from '../assets/codechef-removebg-preview.png';

interface Profile {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  stat: string;
  metricLabel: string;
  details: string[];
  link: string;
  color: string;
}

export const CodingProfiles: React.FC = () => {
  const profiles: Profile[] = [
    {
      name: 'LeetCode',
      subtitle: 'DSA & Problem Solving',
      icon: <img src={leetcodeLogo} alt="LeetCode" style={{ width: '48px', height: '48px', objectFit: 'contain', transform: 'scale(1.8)' }} />,
      stat: '125+',
      metricLabel: 'Problems Solved',
      details: [
        'Focus: Arrays, Trees, Dynamic Programming',
        'Solved easy & medium level challenges',
        'Consistent coding practice & logic training'
      ],
      link: 'https://leetcode.com/u/MoganavasudevP/',
      color: '#FF8C00'
    },
    {
      name: 'Skillrack',
      subtitle: 'Daily Progress Tracking',
      icon: <img src={skillrackLogo} alt="Skillrack" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />,
      stat: '800+',
      metricLabel: 'Problems Solved',
      details: [
        'Daily challenge completions',
        'Logic building & OOP implementation',
        'Core syntax and code compilation runs'
      ],
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=515470&key=3998838f234395683db92bd60a5d31fc2411594a',
      color: '#FF8C00'
    },
    {
      name: 'CodeChef',
      subtitle: 'Competitive Programming',
      icon: <img src={codechefLogo} alt="CodeChef" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />,
      stat: 'Contest',
      metricLabel: 'Participation',
      details: [
        'Competitive programming platform',
        'Problem-solving skills & algorithmic thinking',
        'Coding competition experience'
      ],
      link: 'https://www.codechef.com/users/gang_swan_71',
      color: '#FF8C00'
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
    <section id="profiles" className="section">
      {/* Background Glow */}
      <div 
        className="ambient-glow" 
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="section-tag">Competency</span>
          <h2 className="section-title">Coding Profiles</h2>
          <p className="section-subtitle">
            My algorithmic solving records, daily challenges, and competitive programming profiles across top platforms.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '12px'
          }}
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                border: `1px solid rgba(255, 255, 255, 0.05)`,
                transition: 'var(--transition-smooth)',
                flex: '1 1 300px',
                maxWidth: '360px',
                minHeight: '340px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = profile.color + '40';
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.6), 0 0 20px ${profile.color}05`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
              }}
            >
              {/* Glowing card dot marker */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(to right, transparent, ${profile.color}40, transparent)`
              }} />

              <div>
                {/* Header Icon & Verify link */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {profile.icon}
                  </div>
                  
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '13px',
                      color: 'var(--accent)',
                      backgroundColor: 'rgba(255, 140, 0, 0.08)',
                      border: '1px solid rgba(255, 140, 0, 0.25)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.16)';
                      e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.45)';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 140, 0, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.25)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                  >
                    <span>View Profile</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700 }}>{profile.name}</h3>
                  <span style={{ 
                    fontSize: '13.5px', 
                    color: profile.color, 
                    fontWeight: 500, 
                    display: 'block', 
                    marginTop: '2px',
                    opacity: 0.9
                  }}>
                    {profile.subtitle}
                  </span>
                  
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '16px' }}>
                    <span style={{ fontSize: '32px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                      {profile.stat}
                    </span>
                    <span style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
                      {profile.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Details Points */}
                <ul style={{
                  listStyleType: 'none',
                  paddingLeft: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {profile.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{
                      fontSize: '14.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.4,
                      position: 'relative',
                      paddingLeft: '12px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        backgroundColor: profile.color,
                        opacity: 0.8
                      }} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CodingProfiles;

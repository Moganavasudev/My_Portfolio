import React, { useEffect, useState } from 'react';

export const GlowEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-50 to 50 relative to center)
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="glow-container" style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      {/* Top Left Floating Glow */}
      <div 
        className="ambient-glow" 
        style={{
          top: '-10%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, transparent 70%)',
          animation: 'float-slow 20s infinite ease-in-out',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      />
      
      {/* Middle Right Glow */}
      <div 
        className="ambient-glow" 
        style={{
          top: '40%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 75%)',
          animation: 'float-medium 25s infinite ease-in-out',
          transform: `translate(${mousePosition.x * -0.7}px, ${mousePosition.y * -0.7}px)`
        }}
      />

      {/* Bottom Left Glow */}
      <div 
        className="ambient-glow" 
        style={{
          bottom: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(255, 140, 0, 0.09) 0%, transparent 70%)',
          animation: 'float-slow 18s infinite ease-in-out',
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
        }}
      />
    </div>
  );
};
export default GlowEffect;

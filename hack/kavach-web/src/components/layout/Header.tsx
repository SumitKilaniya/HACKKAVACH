import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: '#080d18',
        borderBottom: '1px solid #1e2a3a',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '24px', color: '#f97316' }}>KAVACH</h1>
        <p style={{ margin: 0, fontSize: '12px', color: '#8899aa' }}>India's Safety Operating System</p>
      </div>
      <div style={{ fontSize: '12px', color: '#8899aa' }}>
        Live Demo | SparkHack 2026
      </div>
    </header>
  );
};

export default Header;
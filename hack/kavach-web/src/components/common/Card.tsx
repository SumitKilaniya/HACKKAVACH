import React from 'react';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div
      style={{
        backgroundColor: '#0b1120',
        borderRadius: '12px',
        border: '1px solid #1e2a3a',
        padding: '16px',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
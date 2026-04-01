import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', loading, ...props }) => {
  const baseStyles = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    cursor: loading ? 'not-allowed' : 'pointer',
    opacity: loading ? 0.7 : 1,
    transition: 'all 0.2s',
  };

  const variantStyles = {
    primary: { backgroundColor: '#f97316', color: '#fff' },
    secondary: { backgroundColor: '#1e2a3a', color: '#fff' },
    danger: { backgroundColor: '#ef4444', color: '#fff' },
  };

  return (
    <button
      style={{ ...baseStyles, ...variantStyles[variant] }}
      disabled={loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
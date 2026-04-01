import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../common/Loader';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
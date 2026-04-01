import React, { useState } from 'react';
import { useLocation } from '../../hooks/useLocation';
import { addIncident } from '../../services/firebase';
import Button from '../common/Button';

interface SOSButtonProps {
  onSuccess?: () => void;
}

const SOSButton: React.FC<SOSButtonProps> = ({ onSuccess }) => {
  const { fetchLocation, loading: locationLoading, error } = useLocation();
  const [sending, setSending] = useState(false);

  const handleSOS = async () => {
    setSending(true);
    const position = await fetchLocation();
    if (position) {
      await addIncident({
        type: 'sos',
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        timestamp: Date.now(),
        status: 'active',
      });
      onSuccess?.();
    }
    setSending(false);
  };

  return (
    <div>
      <Button
        variant="danger"
        loading={sending || locationLoading}
        onClick={handleSOS}
        style={{ width: '100%', fontSize: '18px' }}
      >
        🚨 SOS
      </Button>
      {error && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px' }}>{error}</p>}
    </div>
  );
};

export default SOSButton;
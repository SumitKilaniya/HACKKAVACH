import React, { useState } from 'react';
import { addIncident } from '../../services/firebase';
import Button from '../common/Button';

interface CCTVSimulatorProps {
  onSimulate?: () => void;
}

const CCTVSimulator: React.FC<CCTVSimulatorProps> = ({ onSimulate }) => {
  const [loading, setLoading] = useState(false);

  const simulateCCTV = async () => {
    setLoading(true);
    // Use a random location near Delhi
    const lat = 28.6139 + (Math.random() - 0.5) * 0.02;
    const lng = 77.2090 + (Math.random() - 0.5) * 0.02;
    await addIncident({
      type: 'cctv',
      lat,
      lng,
      timestamp: Date.now(),
      status: 'active',
      confidence: 0.85 + Math.random() * 0.1,
      videoUrl: 'https://example.com/demo_clip.mp4',
    });
    setLoading(false);
    onSimulate?.();
  };

  return (
    <div>
      <Button variant="secondary" loading={loading} onClick={simulateCCTV} style={{ width: '100%' }}>
        🎥 Simulate CCTV Detection
      </Button>
      <p style={{ fontSize: '10px', color: '#8899aa', marginTop: '8px', textAlign: 'center' }}>
        (Mimics a real AI‑CCTV node)
      </p>
    </div>
  );
};

export default CCTVSimulator;
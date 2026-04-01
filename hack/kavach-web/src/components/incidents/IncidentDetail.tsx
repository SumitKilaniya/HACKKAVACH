import React from 'react';
import { Incident } from '../../types/incident';
import { formatDate } from '../../utils/formatters';
import Card from '../common/Card';

interface IncidentDetailProps {
  incident: Incident;
  onClose: () => void;
}

const IncidentDetail: React.FC<IncidentDetailProps> = ({ incident, onClose }) => {
  return (
    <Card style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000, width: '300px' }}>
      <h3 style={{ margin: '0 0 8px' }}>Incident Details</h3>
      <p><strong>Type:</strong> {incident.type.toUpperCase()}</p>
      <p><strong>Time:</strong> {formatDate(incident.timestamp)}</p>
      <p><strong>Status:</strong> {incident.status}</p>
      <p><strong>Location:</strong> {incident.lat.toFixed(5)}, {incident.lng.toFixed(5)}</p>
      {incident.confidence && <p><strong>Confidence:</strong> {Math.round(incident.confidence * 100)}%</p>}
      <button onClick={onClose} style={{ marginTop: '12px', padding: '6px 12px' }}>Close</button>
    </Card>
  );
};

export default IncidentDetail;
import React from 'react';
import { Incident } from '../../types/incident';
import { updateIncidentStatus } from '../../services/firebase';
import { formatTime } from '../../utils/formatters';
import Button from '../common/Button';

interface IncidentListProps {
  incidents: Incident[];
  onStatusChange?: () => void;
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, onStatusChange }) => {
  const handleDispatch = async (id: string) => {
    await updateIncidentStatus(id, 'dispatched');
    onStatusChange?.();
  };

  if (incidents.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '24px', color: '#8899aa' }}>
        No incidents yet
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ fontSize: '14px', color: '#8899aa', marginBottom: '12px' }}>Recent Incidents</h3>
      {incidents.map((incident) => (
        <div
          key={incident.id}
          style={{
            backgroundColor: '#080d18',
            marginBottom: '8px',
            padding: '12px',
            borderRadius: '8px',
            borderLeft: `4px solid ${incident.type === 'sos' ? '#ef4444' : '#f59e0b'}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ color: incident.type === 'sos' ? '#ef4444' : '#f59e0b' }}>
                {incident.type.toUpperCase()}
              </strong>
              <span style={{ fontSize: '11px', color: '#8899aa', marginLeft: '8px' }}>
                {formatTime(incident.timestamp)}
              </span>
              <div style={{ fontSize: '12px', marginTop: '4px' }}>
                Status:{' '}
                <span style={{ color: incident.status === 'active' ? '#f97316' : '#22c55e' }}>
                  {incident.status}
                </span>
              </div>
            </div>
            {incident.status === 'active' && (
              <Button variant="secondary" onClick={() => handleDispatch(incident.id!)} style={{ padding: '4px 12px', fontSize: '11px' }}>
                Dispatch
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
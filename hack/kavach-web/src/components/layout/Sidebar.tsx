import React from 'react';
import { Incident } from '../../types/incident';
import IncidentList from '../incidents/IncidentList';
import SOSButton from '../incidents/SOSButton';
import CCTVSimulator from '../incidents/CCTVSimulator';

interface SidebarProps {
  incidents: Incident[];
  onIncidentUpdate?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ incidents, onIncidentUpdate }) => {
  return (
    <div
      style={{
        width: '320px',
        backgroundColor: '#0b1120',
        borderRight: '1px solid #1e2a3a',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      <div style={{ padding: '16px' }}>
        <SOSButton onSuccess={onIncidentUpdate} />
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 16px' }}>
        <IncidentList incidents={incidents} onStatusChange={onIncidentUpdate} />
      </div>
      <div style={{ padding: '16px', borderTop: '1px solid #1e2a3a' }}>
        <CCTVSimulator onSimulate={onIncidentUpdate} />
      </div>
    </div>
  );
};

export default Sidebar;
import { Incident } from '../../types/incident';
import { formatDate } from '../../utils/formatters';

const MarkerPopup = (incident: Incident): string => {
  return `
    <div style="font-family:sans-serif; padding:8px; max-width:200px;">
      <strong style="color:${incident.type === 'sos' ? '#ef4444' : '#f59e0b'}">${incident.type.toUpperCase()}</strong><br/>
      ${formatDate(incident.timestamp)}<br/>
      Status: <span style="color:${incident.status === 'active' ? '#f97316' : '#22c55e'}">${incident.status}</span><br/>
      ${incident.confidence ? `Confidence: ${Math.round(incident.confidence * 100)}%` : ''}
    </div>
  `;
};

export default MarkerPopup;
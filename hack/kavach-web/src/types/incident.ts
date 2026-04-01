export interface Incident {
  id?: string;
  type: 'sos' | 'cctv';
  lat: number;
  lng: number;
  timestamp: number;
  status: 'active' | 'dispatched' | 'resolved';
  confidence?: number;
  videoUrl?: string;
}
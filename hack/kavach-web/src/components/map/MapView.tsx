import React, { useEffect, useRef } from 'react';
import mapboxgl from '../../services/mapbox';
import { Incident } from '../../types/incident';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MAPBOX_STYLE } from '../../utils/constants';
import MarkerPopup from './MarkerPopup';

interface MapViewProps {
  incidents: Incident[];
  center?: [number, number];
  zoom?: number;
}

const MapView: React.FC<MapViewProps> = ({ incidents, center = DEFAULT_MAP_CENTER, zoom = DEFAULT_MAP_ZOOM }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ [id: string]: mapboxgl.Marker }>({});

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_STYLE,
      center: center,
      zoom: zoom,
    });
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  }, [center, zoom]);

  // Manage markers
  useEffect(() => {
    if (!map.current) return;

    // Remove markers that no longer exist
    Object.keys(markers.current).forEach((id) => {
      if (!incidents.find((i) => i.id === id)) {
        markers.current[id].remove();
        delete markers.current[id];
      }
    });

    // Add or update markers
    incidents.forEach((incident) => {
      if (!markers.current[incident.id!]) {
        const color = incident.type === 'sos' ? '#ef4444' : '#f59e0b';
        const el = document.createElement('div');
        el.style.backgroundColor = color;
        el.style.width = '24px';
        el.style.height = '24px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.cursor = 'pointer';
        el.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(MarkerPopup(incident));
        const marker = new mapboxgl.Marker(el)
          .setLngLat([incident.lng, incident.lat])
          .setPopup(popup)
          .addTo(map.current!);
        markers.current[incident.id!] = marker;
      } else {
        // Update popup content in case status changed
        markers.current[incident.id!].getPopup()?.setHTML(MarkerPopup(incident));
      }
    });
  }, [incidents]);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default MapView;
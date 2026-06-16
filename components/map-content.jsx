'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function MapContent({ location, title, address }) {
  const markerRef = useRef(null);

  useEffect(() => {
    // Fix leaflet icon issue for Next.js
    if (typeof window !== 'undefined' && L.Icon.Default.prototype._getIconUrl) {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });
    }
  }, []);

  if (!location || !Array.isArray(location) || location.length !== 2) {
    return null;
  }

  return (
    <MapContainer
      center={location}
      zoom={15}
      scrollWheelZoom={false}
      style={{
        height: '280px',
        width: '100%',
        border: '4px solid var(--black-soft)',
      }}
      className="event-map-container"
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_toner_blacklite/{z}/{x}/{y}{r}.{ext}"
        attribution='&copy; Stadia Maps, &copy; OpenMapTiles'
      />
      <Marker position={location} ref={markerRef}>
        <Popup>
          <div className="map-popup">
            <strong>{title}</strong>
            <p>{address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

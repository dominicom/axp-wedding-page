'use client';

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
// import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

// const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
// const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
// const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false });

// const L = typeof window !== 'undefined' ? require('leaflet') : null;

export function EventMap({ location, title, address }) {
  // useEffect(() => {
  //   if (L) {
  //     // Fix leaflet icon issue
  //     delete L.Icon.Default.prototype._getIconUrl;
  //     L.Icon.Default.mergeOptions({
  //       iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  //       iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  //       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  //     });
  //   }
  // }, []);

  // if (!L) return null;

    const markerIcon = new L.Icon({
        iconUrl: "/marker-icon.png",
        shadowUrl: "/marker-shadow.png",
        // iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [22, 32],
        shadowSize:   [41, 41], // size of the shadow
        iconAnchor:   [11, 32], // point of the icon which will correspond to marker's location
        shadowAnchor: [24, 72],  // the same for the shadow
        popupAnchor:  [-11, -62] // point from which the popup should open relative to the iconAnchor
    });

  return (
    <MapContainer
      center={location}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '280px', width: '100%', border: '4px solid var(--black-soft)' }}
      className="event-map-container"
    >
      <TileLayer
        attribution='&copy; Esri'
        url="https://tiles.stadiamaps.com/tiles/stamen_toner_blacklite/{z}/{x}/{y}{r}.png"
      />
      <Marker position={location} icon={markerIcon}>
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


        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
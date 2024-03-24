import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './MapApp.css';

function MapApp() {
  const position = { lat: 54.15, lng: 28.6 };

  return (
    <MapContainer center={position} zoom={10}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
}

export default MapApp;

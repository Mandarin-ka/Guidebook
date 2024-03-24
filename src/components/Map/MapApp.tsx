import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import './MapApp.css';

function MapApp() {
  L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';
  const [position, setPosition] = useState<{ lat: number; lng: number }>();

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        () => {
          console.log('Невозможно определить ваше местоположение');
        },
        { maximumAge: 100, timeout: 1000, enableHighAccuracy: true }
      );
  }, []);

  if (position?.lat)
    return (
      <MapContainer center={position} zoom={3}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} />
      </MapContainer>
    );

  return <div className=''>Подождите минутку</div>;
}

export default MapApp;

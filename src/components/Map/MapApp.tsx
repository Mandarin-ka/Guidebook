import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './MapApp.css';

function MapApp() {
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
      <MapContainer center={position} zoom={7}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    );

  return <div className=''>Подождите минутку</div>;
}

export default MapApp;

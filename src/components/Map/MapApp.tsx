import React, { useEffect, useState } from 'react';

import {
  Map,
  Placemark,
  RouteButton,
  RoutePanel,
  YMaps,
} from '@pbe/react-yandex-maps';
import user from 'assets/imgs/user.png';

import './MapApp.css';

function MapApp() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
          console.log('Возникла ошибка, попробуйте позже');
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.log('Невозможно определить геолокацию');
    }
  }, []);

  if (position)
    return (
      <YMaps
        query={{
          lang: 'en_RU',
          apikey: process.env.REACT_APP_Y_API_KEY,
        }}
      >
        <Map
          width={'100vw'}
          height={'100vh'}
          defaultState={{ center: position, zoom: 16 }}
        >
          <Placemark
            geometry={position}
            options={{
              iconLayout: 'default#image',
              iconImageHref: user,
              iconImageSize: [50, 50],
            }}
          />
          <RoutePanel
            state={{
              fromEnabled: false,
              from: 'moscow',
              to: 'saint petersburg',
              type: 'auto',
            }}
          />
        </Map>
      </YMaps>
    );

  return <div>Невозможно определить вашу геолокацию</div>;
}

export default MapApp;

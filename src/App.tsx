import React from 'react';

import Aside from '@components/Aside/Aside';
import MapApp from '@components/Map/MapApp';

import './styles/App.css';

function App() {
  return (
    <div className='app'>
      <MapApp />
      <Aside />
    </div>
  );
}

export default App;

import React from 'react';

import Map from '../components/Map';
import UserList from '../components/UserList';

import '../css/MapView.css';

function MapView(props) {
  return (
    <div>
      <div className='floating-container'>
        <UserList />
      </div>
      <Map />
    </div>
  );
}

export default MapView;

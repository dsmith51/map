import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 1200,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={'pk.eyJ1IjoiZHNtaXRoNTEiLCJhIjoiY2s3bm9iNW1kMDBubDNkcXI0ZGE3OXJ6NiJ9.zD0Cl64MZtMJn40kNWA8Sw'}
    />
  );
}
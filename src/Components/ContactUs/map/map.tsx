import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[6.3654, 2.4183]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[6.3654, 2.4183]}>
      <Popup>
        Bienvenue à Cotonou !
      </Popup>
    </Marker>
  </MapContainer>
  
  );
}
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [policeStation, setPoliceStation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);

        // Replace YOUR_OPENCAGE_API_KEY with your key: https://opencagedata.com/
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=police%20station&proximity=${latitude},${longitude}&key=e5727b1323134df3b681d9c77eca0425&limit=1`
        );

        const result = response.data.results[0];
        if (result) {
          setPoliceStation({
            name: result.formatted,
            location: [
              result.geometry.lat,
              result.geometry.lng,
            ],
          });
        }
      },
      (err) => {
        console.error("Location access denied", err);
      }
    );
  }, []);

  const markerIcon = new L.Icon({
    iconUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div style={{ height: "500px", width: "100%" }}>
      {userLocation && (
        <MapContainer
          center={userLocation}
          zoom={14}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={userLocation} icon={markerIcon}>
            <Popup>You are here</Popup>
          </Marker>
          {policeStation && (
            <Marker position={policeStation.location} icon={markerIcon}>
              <Popup>Nearest Police Station: {policeStation.name}</Popup>
            </Marker>
          )}
        </MapContainer>
      )}
      {!userLocation && <p>Fetching your location...</p>}
    </div>
  );
};

export default Map;

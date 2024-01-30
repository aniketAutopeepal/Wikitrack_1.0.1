import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline, useLoadScript } from '@react-google-maps/api';
import VehicleSettingsHeader from './VehicleSettingsHeader';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Replace with your socket server URL

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA_S7GfAh6rJYWQ5X4n4X-3poo3vymuspU',
  });

  const [googleMaps, setGoogleMaps] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      // Set the googleMaps object in the state
      setGoogleMaps(window.google.maps);
    }
  }, [isLoaded]);

  const [vehicleLocation, setVehicleLocation] = useState({ lat: 18.516726, lng: 73.856255 });
  const [path, setPath] = useState([
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.7895, lng: -122.4060 },
    { lat: 37.7739, lng: -122.4312 },
    // Add more points as needed
  ]);



  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  const mapStyles = {
    height: '83vh',
    width: '100%',
  
  };

  const defaultCenter = {
    lat: 18.516726,
    lng: 73.856255,
  };

  if (!googleMaps) {
    // If googleMaps is not available yet, return null or a loading indicator
    return null;
  }

  const vehicleIcon = {
    url: '/path/to/your/vehicle-icon.png', // Replace with the path to your vehicle icon
    scaledSize: new googleMaps.Size(40, 40),
  };

  return (
    <div style={{position:"relative"}}>
       <div >
       <VehicleSettingsHeader  ></VehicleSettingsHeader>
       </div>
      <div style={{paddingTop:"50px"}}>
      <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={10}
      center={defaultCenter}
    >
      <Marker
        position={vehicleLocation}
        icon={{
          url: 'http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png', // Default yellow marker
          scaledSize: new googleMaps.Size(40, 40), // Adjust the size as needed
          anchor: new googleMaps.Point(20, 20), // Center the icon on the marker position
        }}
      />
      <Polyline
        path={path}
        options={{
          strokeColor: 'red',
          strokeOpacity: 1,
          strokeWeight: 2,
        }}
      />
      </GoogleMap>
      </div>
    </div>
  );
};

export default Map;

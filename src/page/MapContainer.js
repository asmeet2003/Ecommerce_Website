import React from 'react';

const MapContainer = () => {
  const markerLocation = {
    lat: 27.1750152, // Example coordinates
    lng: 78.0421552
  };

  const iframeSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27287.665325849077!2d75.70063359999999!3d31.249581400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724265370889!5m2!1sen!2sin`;

  return (
    <div className="map-container">
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Order Location"
      ></iframe>
    </div>
  );
};

export default MapContainer;

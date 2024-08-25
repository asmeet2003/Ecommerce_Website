import React, { useState } from 'react';
import MapContainer from './MapContainer';
import './OrderTracking.css'; // Import the CSS file

const OrderTracking = () => {
  const [showMap, setShowMap] = useState(false);

  const handleTrackOrder = () => {
    setShowMap(true);
  };

  return (
    <div className="order-tracking-container">
      <h2 className="text-3xl font-bold mb-8">Track Your Order</h2>
      <button
        className="track-button"
        onClick={handleTrackOrder}
      >
        Track
      </button>
      {showMap && <MapContainer />}
    </div>
  );
};

export default OrderTracking;

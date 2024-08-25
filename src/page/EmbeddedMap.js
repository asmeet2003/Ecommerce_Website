import React from 'react';

const EmbeddedMap = () => {
  return (
    <div className="map-iframe-container" style={{ width: '100%', height: '500px', marginTop: '20px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27287.665325849077!2d75.70063359999999!3d31.249581400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724265370889!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Google Map"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;

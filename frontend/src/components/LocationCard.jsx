// components/LocationCard.jsx
import React from "react";

const LocationCard = ({ title, address, timing, mapSrc }) => {
  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Address: </span>
          {address}
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Timing: </span>
          {timing}
        </p>
        <div className="mt-4">
          <iframe
            src={mapSrc}
            style={{ border: 0, width: "100%", height: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

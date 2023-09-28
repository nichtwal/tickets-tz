import React from "react";

const FlightStops = ({ flight }) => {
  const flightStops = flight.stops;
  return (
    <div className="stops">
      <div className="stops--container">
        {flightStops < 1 ? '' : <p>{flightStops} пересадка</p>}
      </div>
    </div>
  );
};

export default FlightStops;

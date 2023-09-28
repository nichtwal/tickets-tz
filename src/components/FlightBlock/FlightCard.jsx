import React from "react";
import FlightLocation from "./FlightLocation";
import FligthLength from "./FlightLength";
import FlightStops from "./FlightStops";

const FlightCard = (flight) => {
  const legs = flight.flight.legs;

  return (
    <div className="card">
      {legs.map((leg) => 
        leg.segments.map((el, index) => (
          <div key={index} className="card--item">
           <FlightLocation flight={el} />
           <FligthLength flight={el} />
           <FlightStops flight={el} />
           <p className="card--item__aircompany">Рейс выполняет: {flight.flight.carrier.uid} {flight.flight.carrier.caption}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FlightCard;

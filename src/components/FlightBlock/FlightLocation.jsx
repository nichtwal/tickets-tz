import React from "react";
import arrow from "../../assets/arrow.png";

const FlightLocation = ({ flight }) => {
  const departureCity = flight.departureCity && flight.departureCity.caption;
  const departureAirport =
    flight.departureAirport && flight.departureAirport.caption;
  const departureAirportUid =
    flight.departureAirport && flight.departureAirport.uid;
  const arrivalCity = flight.arrivalCity && flight.arrivalCity.caption;
  const arrivalAirport = flight.arrivalAirport && flight.arrivalAirport.caption;
  const arrivalAirportUid = flight.arrivalAirport && flight.arrivalAirport.uid;

  if (
    !departureCity ||
    !departureAirport ||
    !departureAirportUid ||
    !arrivalCity ||
    !arrivalAirport ||
    !arrivalAirportUid
  ) {
    return (
        <p style={{color: '#fd9b32', fontSize: '20px'}}>Рейс отменен</p>
    );
  }
  return (
    <div className="location">
      <div className="location--departure">
        <p>{departureCity},</p>
        <p>{departureAirport}</p>
        <p>({departureAirportUid})</p>
      </div>
      <img src={arrow} alt="arrow" />
      <div className="location--arrival">
        <p>{arrivalCity},</p>
        <p>{arrivalAirport}</p>
        <p>({arrivalAirportUid})</p>
      </div>
    </div>
  );
};

export default FlightLocation;

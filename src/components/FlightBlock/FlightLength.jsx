import React from "react";
import clock from "../../assets/clock.png";
const monthNames = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

const dayNames = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

const FligthLength = ({ flight }) => {
  const arrivalDate = new Date(flight.arrivalDate);
  const departureDate = new Date(flight.departureDate);
  const arrMonth = arrivalDate.getDate();
  const arrOfMonth = monthNames[arrivalDate.getMonth()];
  const arrDayOfWeek = dayNames[arrivalDate.getDay()];
  const depMonth = departureDate.getDate();
  const depOfMonth = monthNames[departureDate.getMonth()];
  const dapDayOfWeek = dayNames[departureDate.getDay()];

  const arrHours =
    arrivalDate.getHours() < 10
      ? `0${arrivalDate.getHours()}`
      : arrivalDate.getHours();
  const arrMinutes =
    arrivalDate.getMinutes() < 10
      ? `0${arrivalDate.getMinutes()}`
      : arrivalDate.getMinutes();
  const depHours =
    departureDate.getHours() < 10
      ? `0${departureDate.getHours()}`
      : departureDate.getHours();
  const depMinutes =
    departureDate.getMinutes() < 10
      ? `0${departureDate.getMinutes()}`
      : departureDate.getMinutes();

  const totalMinutes = flight.travelDuration;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedDuration = `${hours < 10 ? `0${hours}` : hours} ч ${
    minutes < 10 ? `0${minutes}` : minutes
  } мин`;
  return (
    <div className="length">
      <div className="length--departure">
        <h3>
          {depHours}:{depMinutes}
        </h3>
        <p>
          {depMonth} {depOfMonth}. {dapDayOfWeek}
        </p>
      </div>
      <div className="length--fligth">
        <img src={clock} alt="clock" />
        <p>{formattedDuration}</p>
      </div>
      <div className="length--arrival">
        <h3>
          {arrHours}:{arrMinutes}
        </h3>
        <p>
          {arrMonth} {arrOfMonth}. {arrDayOfWeek}
        </p>
      </div>
    </div>
  );
};

export default FligthLength;

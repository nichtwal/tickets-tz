import React from "react";
import data from "../data/flights.json";
import { useDispatch, useSelector } from "react-redux";
import { toggleAirlines, selectSort } from "../../redux/slices/filterSlice";

const extractMinPriceByCarrier = (data) => {
  const minPricesByCarrier = {};

  data.result.flights.forEach((flight) => {
    const carrierName = flight.flight.carrier.caption;
    const ticketPrice = parseFloat(flight.flight.price.total.amount);
    if (
      !(carrierName in minPricesByCarrier) ||
      ticketPrice < minPricesByCarrier[carrierName]
    ) {
      minPricesByCarrier[carrierName] = ticketPrice;
    }
  });
  return minPricesByCarrier;
};

const ShortenedParagraph = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  } else {
    const shortenedText = text.substring(0, maxLength) + "...";
    return <p>{shortenedText}</p>;
  }
};

const Categoies = () => {
  const selectedCarriers = useSelector(selectSort);
  const dispatch = useDispatch();
  const minPricesByCarrier = extractMinPriceByCarrier(data);
  const handleCheckboxAirlines = (carrierName) => {
    dispatch(toggleAirlines(carrierName));
  };
  return (
    <div className="categories">
      <h2>Авиакомпании</h2>
      {Object.keys(minPricesByCarrier).map((el, index) => (
        <div key={index} className="categories--item">
          <input
            type="checkbox"
            onChange={() => handleCheckboxAirlines(el)}
            checked={!selectedCarriers.airlines[el]}
          />
          <ShortenedParagraph text={el} maxLength={15} />
          <ShortenedParagraph
            text={`От ${minPricesByCarrier[el]}`}
            maxLength={15}
          />
        </div>
      ))}
    </div>
  );
};

export default Categoies;

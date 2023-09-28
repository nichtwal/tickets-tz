import React from "react";
import data from "./data/flights.json";
import FlightCompany from "./FlightBlock/FlightCompany";
import FlightCard from "./FlightBlock/FlightCard";

import { useSelector } from "react-redux";
import { selectSort } from "../redux/slices/filterSlice";

const FlightItem = () => {
  const flightsList = data.result.flights;
  const [visibleTickets, setVisibleTickets] = React.useState(2);
  const [ticketsToShow, setTicketsToShow] = React.useState(
    flightsList.slice(0, visibleTickets)
  );

  const sortOption = useSelector(selectSort);
  React.useEffect(() => {
    const filterTicketsByCarriers = (tickets) => {
      if (Object.keys(sortOption.airlines).length === 0) {
        return tickets;
      }
      return tickets.filter((ticket) => {
        const carrierName = ticket.flight.carrier.caption;
        return !sortOption.airlines[carrierName];
      });
    };

    const sortedFlights = [...flightsList];

    if (sortOption.value === "ascending") {
      sortedFlights.sort(
        (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
      );
    } else if (sortOption.value === "descending") {
      sortedFlights.sort(
        (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
      );
    } else if (sortOption.value === "time") {
      sortedFlights.sort((a, b) => {
        const durationA = Math.min(...a.flight.legs.map((leg) => leg.duration));
        const durationB = Math.min(...b.flight.legs.map((leg) => leg.duration));
        return durationA - durationB;
      });
    }

    const { min, max } = sortOption.priceRange;

    const filteredTickets = sortedFlights.filter((ticket) => {
      const totalStops = ticket.flight.legs.reduce((acc, leg) => {
        return (
          acc +
          leg.segments.reduce((segAcc, segment) => segAcc + segment.stops, 0)
        );
      }, 0);
      const ticketPrice = parseFloat(ticket.flight.price.total.amount);

      return (
        sortOption.stops.includes(totalStops) &&
        ticketPrice >= min &&
        ticketPrice <= max
      );
    });

    const filteredTicketsWithCarriers =
      filterTicketsByCarriers(filteredTickets);

    setTicketsToShow(filteredTicketsWithCarriers.slice(0, visibleTickets));
  }, [sortOption, visibleTickets, flightsList]);

  const loadMore = () => {
    const newVisibleTickets = visibleTickets + 2;
    setTicketsToShow(flightsList.slice(0, newVisibleTickets));
    setVisibleTickets(newVisibleTickets);
  };
  if (ticketsToShow.length === 0) {
    return (
      <div className="no--tickets">
        <p>Билетов нет, извините ^__^</p>
      </div>
    );
  }
  return (
    <div className="flight">
      {ticketsToShow.map((el, index) => (
        <div key={index} className="flight--wrapper">
          <div className="flight--wrapper__head">
            <FlightCompany flight={el.flight} />
          </div>
          <div className="flight--wrapper__location">
            <FlightCard flight={el.flight} />
          </div>
          <button
            className="button"
            onClick={() => alert("Извините, Вы выбрали не Сочи")}
          >
            выбрать
          </button>
        </div>
      ))}
      {visibleTickets < flightsList.length && (
        <button className="loadmore" onClick={loadMore}>
          Показать еще
        </button>
      )}
    </div>
  );
};

export default FlightItem;

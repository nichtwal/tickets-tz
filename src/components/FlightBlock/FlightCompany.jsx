import React from "react";

const FlightCompany = (fligth) => {
  const flightCompany = fligth.flight?.carrier;
  const fligthPrice = fligth.flight?.price
  return (
    <div className="travel">
      <div className="travel--company">
        <h3>{flightCompany.uid}</h3>
        <p>{flightCompany.caption}</p>
      </div>
      <div className="travel--price">
        <h3>{fligthPrice.total.amount}&thinsp;₽</h3>
        <p>Стоимость для  одного взрослого пассажира</p>
      </div>
    </div>
  );
};

export default FlightCompany;

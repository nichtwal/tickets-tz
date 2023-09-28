import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange, selectSort } from "../../redux/slices/filterSlice";

export const priceName = [
  { id: 1, priceType: "От"},
  { id: 2, priceType: "До"},
];

const Price = () => {
  const priceStatus= useSelector(selectSort)
  const dispatch = useDispatch()
  const handleInputChange = (id, newValue) => {
    const updatePriceRange = {...priceStatus.priceRange}
    if (id === 1) {
      updatePriceRange.min = newValue
    } else if (id === 2) {
      updatePriceRange.max = newValue
    }

    dispatch(setPriceRange( {priceRange: updatePriceRange}))
  };
  return (
    <div className="price">
      <h2>Цена</h2>
      <div className="price--container">
        {priceName.map((el, index) => (
          <div key={el.id} className="price--container__wrapper">
            <span>{el.priceType}</span>
            <input
              type="text"
              value={Object.entries(priceStatus.priceRange)[index][1]}
              onChange={(e) => handleInputChange(el.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;

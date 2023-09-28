import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleStops, selectSort} from '../../redux/slices/filterSlice'

export const filterName = [
  { id: 1, filterType: "- 1 пересадка"},
  { id: 0, filterType: "- без пересадок"},
];
const Filter = () => {
  
const selectedFilters = useSelector(selectSort)
const dispatch = useDispatch();
  const handleCheckboxChange = (id) => {
dispatch(toggleStops(id))
  }

  return (
    <div className="filter">
      <h2>Фильтровать</h2>
      <div className="filter--container">
        {filterName.map((el) => (
          <div key={el.id} className="filter--container__wrapper">
            <input type="checkbox"
            checked={selectedFilters.stops.includes(el.id)}
            onChange={() => handleCheckboxChange(el.id)}/>
            <p>{el.filterType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

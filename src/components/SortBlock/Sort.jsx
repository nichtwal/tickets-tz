import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue, selectSort } from "../../redux/slices/filterSlice";

export const sortName = [
  { id: 1, sortType: "- по возрастанию цены", value: "ascending" },
  { id: 2, sortType: "- по убыванию цены", value: "descending" },
  { id: 3, sortType: "- по времени в пути", value: "time" },
];

const Sort = () => {
  const sortOption = useSelector(selectSort);
  const dispatch = useDispatch();
  const handleChecked = (value) => {
    dispatch(setValue(value));
  };
  return (
    <div className="sort">
      <h2>Сортировать</h2>
      <div className="sort--container">
        {sortName.map((el) => (
          <div key={el.id} className="sort--container__wrapper">
            <input
              type="radio"
              value={el.value}
              checked={sortOption.value === el.value}
              onChange={() => handleChecked(el.value)}
            />
            <p>{el.sortType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sort;

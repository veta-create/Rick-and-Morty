import React from "react";
import { changeNameFilterTextAC, switchActiveFilterAC } from "../../redux/store";
import s from "./Filter.module.css";

const Filter = (props) => {
  const handleSelectChange = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    props.dispatch(switchActiveFilterAC(id, value));
  };

  const nandleInputChange = (event) => {
    let newText = event.target.value;
    props.dispatch(changeNameFilterTextAC(newText));
  };

  return (
    <div className={s.filter}>
      <div className={s.title}>Filter by:</div>
      <div className={s.byStatus}>
        status:
        <select
          id="byStatus"
          value={props.filterData.statusFilter.activeFilter}
          onChange={handleSelectChange}
        >
          {props.filterData.statusFilter.filters.map((o) => (
            <option key={o.id} id={o.id} value={o.value}>
              {o.name}
            </option>
          ))}
        </select>
      </div>
      <div className={s.bySpecies}>
        species:
        <select
          id="bySpecies"
          value={props.filterData.speciesFilter.activeFilter}
          onChange={handleSelectChange}
        >
          {props.filterData.speciesFilter.filters.map((o) => (
            <option key={o.id} id={o.id} value={o.value}>
              {o.name}
            </option>
          ))}
        </select>
      </div>
      <div className={s.byName}>
        name:{" "}
        <input
          value={props.filterData.nameFilter.name}
          onChange={nandleInputChange}
        ></input>
      </div>
      {/* <select value={props.filterData.activeFilter} onChange={handleSelectChange}>
      </select> */}
    </div>
  );
};

export default Filter;

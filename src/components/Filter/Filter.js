import React from "react";
import {
  changeNameFilterTextAC,
  switchActiveFilterAC,
} from "../../redux/filterReducer";
import s from "./Filter.module.css";

const Filter = (props) => {
  const onSwitchingFilters = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    props.switchingFilters(id, value);
  };

  const onChangeFilterByName = (event) => {
    let newText = event.target.value;
    props.changeFilterByName(newText);
  };

  return (
    <div className={s.filter}>
      <div className={s.title}>Filter by:</div>
      <div className={s.filters}>
        <div className={s.byStatus}>
          status:
          <select
            id="byStatus"
            value={props.filterData.statusFilter.activeFilter}
            onChange={onSwitchingFilters}
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
            onChange={onSwitchingFilters}
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
            onChange={onChangeFilterByName}
          ></input>
        </div>
      </div>

      {/* <select value={props.filterData.activeFilter} onChange={handleSelectChange}>
      </select> */}
    </div>
  );
};

export default Filter;

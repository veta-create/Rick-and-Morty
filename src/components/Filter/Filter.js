import React from "react";
import s from "./Filter.module.css";

const Filter = (props) => {
  const onSwitchingFilters = (event) => {
    props.switchingFilters(event);
  };

  const onChangeFilterByName = (event) => {
    const newText = event.target.value;
    props.changeNameFilterText(newText);
  };

  return (
    <div className={s.filter}>
      <div className={s.title}>Filter by:</div>
      <div className={s.filters}>
        <div className={s.byStatus}>
          status:
          <select
            id="status"
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
            id="species"
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
          <button className={s.search}>search</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

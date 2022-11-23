import React from "react";
import { charactersAPI } from "../../api/api";
import s from "./Filter.module.css";

const Filter = (props) => {
  const onSwitchingFilters = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    props.switchingFilters(id, value);
    let currentFilter = props.filterData.statusFilter.activeFilter;
    let filters = props.filterData.statusFilter.filters;
    let filter = filters.filter((f) => {
      if (f.value === currentFilter) {
        return f;
      }
    });
    let filterValue = filter[0].name;
    console.log(filterValue);
    charactersAPI
      .getCharactersByFilter(props.currentPage, filterValue, null)
      .then((response) => {
        props.setCharacters(response.data.results);
      });
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

      {/* <select value={props.filterData.activeFilter} onChange={handleSelectChange}>
      </select> */}
    </div>
  );
};

export default Filter;

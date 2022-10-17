import React from "react";
import { changeNameFilterTextAC, switchActiveFilterAC } from "../../redux/filterReducer";
import Filter from "./Filter";

const FilterContainer = (props) => {
  let filterData = props.store.getState().filterData
  const switchingFilters = (id, value) => {
    props.store.dispatch(switchActiveFilterAC(id, value));
  };

  const changeFilterByName = (newText) => {
    props.store.dispatch(changeNameFilterTextAC(newText));
  };

  return (
    <Filter switchingFilters={switchingFilters} changeFilterByName={changeFilterByName} filterData={filterData}/>
  );
};

export default FilterContainer;

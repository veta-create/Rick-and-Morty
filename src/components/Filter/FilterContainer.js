import React from "react";
import { connect } from "react-redux";
import {
  changeNameFilterTextAC,
  switchActiveFilterAC,
} from "../../redux/filterReducer";
import Filter from "./Filter";

const mapStateToProps = (state) => {
  return {
    filterData: state.filterData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchingFilters: (id, value) => {
      dispatch(switchActiveFilterAC(id, value));
    },
    changeFilterByName: (newText) => {
      dispatch(changeNameFilterTextAC(newText));
    },
  };
};

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterContainer;

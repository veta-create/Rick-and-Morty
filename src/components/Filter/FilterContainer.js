import { connect } from "react-redux";
import {
  changeNameFilterTextAC,
  switchActiveFilterAC,
} from "../../redux/filterReducer";
import { setCharacters } from "../../redux/cardsReducer";
import Filter from "./Filter";

const mapStateToProps = (state) => {
  return {
    filterData: state.filterData,
    currentPage: state.paginationData.currentPage,
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
    setCharacters: (characters) => {
      dispatch(setCharacters(characters));
    },
  };
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;

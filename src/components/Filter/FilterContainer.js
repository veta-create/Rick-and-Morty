import { connect } from "react-redux";
import {
  changeNameFilterText,
  switchActiveFilters,
} from "../../redux/filterReducer";
import { setCharacters } from "../../redux/cardsReducer";
import FilterAPI from "./FilterAPI";
import { setTotalPagesCount } from "../../redux/paginationReducer";

const mapStateToProps = (state) => {
  return {
    filterData: state.filterData,
    currentPage: state.paginationData.currentPage,
  };
};

const FilterContainer = connect(mapStateToProps, {
  switchActiveFilters,
  changeNameFilterText,
  setCharacters,
  setTotalPagesCount,
})(FilterAPI);

export default FilterContainer;

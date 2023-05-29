import { connect } from "react-redux";
import {
  changeNameFilterText,
  switchActiveFilters,
} from "../../redux/filterReducer";
import {
  getCharactersByFilterThunkCreator,
  getCharactersThunkCreator,
} from "../../redux/cardsReducer";
import FilterAPI from "./FilterAPI";

const mapStateToProps = (state) => {
  return {
    filterData: state.filterData,
  };
};

const FilterContainer = connect(mapStateToProps, {
  switchActiveFilters,
  changeNameFilterText,
  getCharactersThunkCreator,
  getCharactersByFilterThunkCreator,
})(FilterAPI);

export default FilterContainer;

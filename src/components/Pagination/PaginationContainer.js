import { connect } from "react-redux";
import {
  getCharactersByFilterThunkCreator,
  getCharactersThunkCreator,
  setCharacters,
  toggleIsFetching,
} from "../../redux/cardsReducer";
import {
  changeArrowState,
  setCurrentPage,
  setTotalPagesCount,
} from "../../redux/paginationReducer";
import PaginationAPI from "./PaginationAPI";

const mapStateToProps = (state) => {
  return {
    totalPagesCount: state.paginationData.totalPagesCount,
    currentPage: state.paginationData.currentPage,
    paginationSize: state.paginationData.paginationSize,
    filterData: state.filterData,
  };
};

const PaginationContainer = connect(mapStateToProps, {
  setCurrentPage,
  setCharacters,
  changeArrowState,
  toggleIsFetching,
  setTotalPagesCount,
  getCharactersThunkCreator,
  getCharactersByFilterThunkCreator,
})(PaginationAPI);

export default PaginationContainer;

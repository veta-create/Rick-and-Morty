import { connect } from "react-redux";
import { setCharacters, toggleIsFetching } from "../../redux/cardsReducer";
import {
  changeArrowState,
  setCurrentPage,
} from "../../redux/paginationReducer";
import PaginationAPI from "./PaginationAPI";

const mapStateToProps = (state) => {
  return {
    totalPagesCount: state.paginationData.totalPagesCount,
    currentPage: state.paginationData.currentPage,
    paginationSize: state.paginationData.paginationSize,
    arrowNextState: state.paginationData.arrowNextState,
    arrowBackState: state.paginationData.arrowBackState,
  };
};

const PaginationContainer = connect(mapStateToProps, {
  setCurrentPage,
  setCharacters,
  changeArrowState,
  toggleIsFetching,
})(PaginationAPI);

export default PaginationContainer;

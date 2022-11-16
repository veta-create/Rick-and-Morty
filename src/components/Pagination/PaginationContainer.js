import { connect } from "react-redux";
import { setCharactersAC } from "../../redux/cardsReducer";
import { changeArrowStateAC, setCurrentPageAC } from "../../redux/paginationReducer";
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPage: (newCurrentPage) => {
      dispatch(setCurrentPageAC(newCurrentPage));
    },
    setCharacters: (characters) => {
      dispatch(setCharactersAC(characters));
    },
    changeArrowState: (direction, value) => {
      dispatch(changeArrowStateAC(direction, value));
    },
  };
};

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationAPI);

export default PaginationContainer;

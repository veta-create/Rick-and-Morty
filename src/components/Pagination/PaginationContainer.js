import { connect } from "react-redux";
import { setCharactersAC } from "../../redux/cardsReducer";
import { setCurrentPageAC } from "../../redux/paginationReducer";
import Pagination from "./Pagination";

const mapStateToProps = (state) => {
  return {
    totalPagesCount: state.paginationData.totalPagesCount,
    currentPage: state.paginationData.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPage: (newCurrentPage) => {
      dispatch(setCurrentPageAC(newCurrentPage));
    },
    setCharacters: (characters) => {
      dispatch(setCharactersAC(characters))
    }
  };
};

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;

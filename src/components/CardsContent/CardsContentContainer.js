import { connect } from "react-redux";
import { setCharactersAC, toggleIsFetchingAC } from "../../redux/cardsReducer";
import { setTotalPagesCountAC } from "../../redux/paginationReducer";
import CardsContentAPI from "./CardsContentAPI";

const mapStateToProps = (state) => {
  return {
    characters: state.cardsData.characters,
    currentPage: state.paginationData.currentPage,
    isFetching: state.cardsData.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacters: (characters) => {
      dispatch(setCharactersAC(characters));
    },
    setTotalPagesCount: (totalPagesCount) => {
      dispatch(setTotalPagesCountAC(totalPagesCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

const CardsContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContentAPI);

export default CardsContentContainer;

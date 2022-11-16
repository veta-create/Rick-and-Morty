import { connect } from "react-redux";
import { setCharactersAC } from "../../redux/cardsReducer";
import { setTotalPagesCountAC } from "../../redux/paginationReducer";
import CardsContentAPI from "./CardsContentAPI";

const mapStateToProps = (state) => {
  return {
    characters: state.cardsData.characters,
    currentPage: state.paginationData.currentPage,
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
  };
};

const CardsContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContentAPI);

export default CardsContentContainer;

import { connect } from "react-redux";
import { setCharacters, toggleIsFetching } from "../../redux/cardsReducer";
import { setTotalPagesCount } from "../../redux/paginationReducer";
import CardsContentAPI from "./CardsContentAPI";

const mapStateToProps = (state) => {
  return {
    characters: state.cardsData.characters,
    currentPage: state.paginationData.currentPage,
    isFetching: state.cardsData.isFetching,
  };
};

const CardsContentContainer = connect(mapStateToProps, {
  setCharacters,
  setTotalPagesCount,
  toggleIsFetching,
})(CardsContentAPI);

export default CardsContentContainer;

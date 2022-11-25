import { connect } from "react-redux";
import { getCharactersThunkCreator } from "../../redux/cardsReducer";
import CardsContentAPI from "./CardsContentAPI";

const mapStateToProps = (state) => {
  return {
    characters: state.cardsData.characters,
    isFetching: state.cardsData.isFetching,
  };
};

const CardsContentContainer = connect(mapStateToProps, {
  getCharactersThunkCreator,
})(CardsContentAPI);

export default CardsContentContainer;

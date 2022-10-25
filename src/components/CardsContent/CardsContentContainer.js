import { connect } from "react-redux";
import { setCharactersAC } from "../../redux/cardsReducer";
import CardsContent from "./CardsContent";

const mapStateToProps = (state) => {
  return {
    characters: state.cardsData.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacters: (characters) => {
      dispatch(setCharactersAC(characters));
    },
  };
};

const CardsContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContent);

export default CardsContentContainer;

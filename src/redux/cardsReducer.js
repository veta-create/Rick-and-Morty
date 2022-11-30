import { charactersAPI } from "../api/api";
import { setCurrentPage, setTotalPagesCount } from "./paginationReducer";

const SET_CHARACTERS = "SET_CHARACTERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  characters: [],
  isFetching: false,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.characters };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  characters: characters,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

export const getCharactersThunkCreator = (pageNumber) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    charactersAPI.getCharacters(pageNumber).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setCharacters(response.data.results));
      dispatch(setTotalPagesCount(response.data.info.pages));
    });
  };
};

export const getCharactersByFilterThunkCreator = (pageNumber, status, name) => {
  return (dispatch) => {
    debugger;
    dispatch(toggleIsFetching(true));
    charactersAPI
      .getCharactersByFilter(pageNumber, status, name)
      .then((response) => {
        if (pageNumber > response.data.info.pages) {
          dispatch(setCurrentPage(pageNumber));
        }
        dispatch(setTotalPagesCount(response.data.info.pages));
        dispatch(toggleIsFetching(false));
        dispatch(setCharacters(response.data.results));
      });
  };
};
export default cardsReducer;

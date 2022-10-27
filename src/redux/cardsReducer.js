const SET_CHARACTERS = "SET_CHARACTERS";

const initialState = {
  characters: [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.characters} ;
    default:
      return state;
  }
};

export const setCharactersAC = (characters) => ({
  type: SET_CHARACTERS,
  characters: characters,
});

export default cardsReducer;

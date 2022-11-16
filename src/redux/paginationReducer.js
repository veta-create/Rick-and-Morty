const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const CHANGE_ARROW_STATE = "CHANGE_ARROW_STATE";

const initialState = {
  totalPagesCount: 0,
  currentPage: 1,
  paginationSize: 10,
  arrowNextState: true,
  arrowBackState: false,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_PAGES_COUNT:
      return { ...state, totalPagesCount: action.totalPagesCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.newCurrentPage };
    case CHANGE_ARROW_STATE:
      if (action.direction === "next") {
        return { ...state, arrowNextState: action.value };
      } else if (action.direction === "back") {
        return { ...state, arrowBackState: action.value };
      }
    default:
      return state;
  }
};

export const setTotalPagesCountAC = (totalPagesCount) => ({
  type: SET_TOTAL_PAGES_COUNT,
  totalPagesCount: totalPagesCount,
});

export const setCurrentPageAC = (newCurrentPage) => ({
  type: SET_CURRENT_PAGE,
  newCurrentPage,
});

export const changeArrowStateAC = (direction, value) => ({
  type: CHANGE_ARROW_STATE,
  direction,
  value,
});

export default paginationReducer;

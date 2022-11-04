const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
  totalPagesCount: 10,
  currentPage: 4,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_PAGES_COUNT:
      return { ...state, totalPagesCount: action.totalPagesCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.newCurrentPage };
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
  newCurrentPage: newCurrentPage,
});

export default paginationReducer;

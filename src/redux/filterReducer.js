const SWITCH_ACTIVE_FILTER = "SWITCH_ACTIVE_FILTER";
const CHANGE_NAME_FILTER_TEXT = "CHANGE_NAME_FILTER_TEXT";

const initialState = {
  genderFilter: {
    filters: [
      {
        id: 1,
        value: "all",
        name: "all",
      },
      {
        id: 2,
        value: "m",
        name: "male",
      },
      {
        id: 3,
        value: "f",
        name: "female",
      },
      {
        id: 4,
        value: "u",
        name: "unknown",
      },
    ],
    activeFilter: "all",
  },
  statusFilter: {
    filters: [
      {
        id: 1,
        value: "all",
        name: "all",
      },
      {
        id: 2,
        value: "a",
        name: "alive",
      },
      {
        id: 3,
        value: "d",
        name: "dead",
      },
      {
        id: 4,
        value: "u",
        name: "unknown",
      },
    ],
    activeFilter: "all",
  },
  nameFilter: {
    name: "",
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ACTIVE_FILTER:
      if (action.id === "status") {
        return {
          ...state,
          ...(state.statusFilter.activeFilter = action.value),
        };
      } else if (action.id === "gender") {
        return {
          ...state,
          ...(state.genderFilter.activeFilter = action.value),
        };
      }
    case CHANGE_NAME_FILTER_TEXT:
      return { ...state, ...(state.nameFilter.name = action.value) };
    default:
      return state;
  }
};

export const switchActiveFilters = (id, value) => ({
  type: SWITCH_ACTIVE_FILTER,
  id: id,
  value: value,
});

export const changeNameFilterText = (newText) => ({
  type: CHANGE_NAME_FILTER_TEXT,
  value: newText,
});

export default filterReducer;

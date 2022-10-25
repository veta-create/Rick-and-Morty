const SWITCH_ACTIVE_FILTER = "SWITCH_ACTIVE_FILTER";
const CHANGE_NAME_FILTER_TEXT = "CHANGE_NAME_FILTER_TEXT";

const initialState = {
  speciesFilter: {
    filters: [
      {
        id: 1,
        value: 1,
        name: "none",
      },
      {
        id: 2,
        value: 2,
        name: "name",
      },
      {
        id: 3,
        value: 3,
        name: "species",
      },
      {
        id: 4,
        value: 4,
        name: "status",
      },
    ],
    activeFilter: 1,
  },
  statusFilter: {
    filters: [
      {
        id: 1,
        value: "n",
        name: "none",
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
    activeFilter: 1,
  },
  nameFilter: {
    name: "xxx",
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ACTIVE_FILTER:
      let stateCopy = {...state}
      stateCopy.statusFilter = {...state.statusFilter}
      if (action.id === "byStatus") {
        stateCopy.statusFilter.activeFilter = action.value;
      } else if (action.id === "bySpecies") {
        stateCopy.speciesFilter.activeFilter = action.value;
      }
      return stateCopy;
    case CHANGE_NAME_FILTER_TEXT:
      let stateC = {...state}
      stateC.nameFilter.name = {...state.nameFilter}
      stateC.nameFilter.name = action.value;
      return stateC;
    default:
      return state;
  }
};

export const switchActiveFilterAC = (id, value) => ({
  type: SWITCH_ACTIVE_FILTER,
  id: id,
  value: value,
});

export const changeNameFilterTextAC = (newText) => ({
  type: CHANGE_NAME_FILTER_TEXT,
  value: newText,
});

export default filterReducer;

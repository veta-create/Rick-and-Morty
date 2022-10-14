const SWITCH_ACTIVE_FILTER = "SWITCH_ACTIVE_FILTER";
const CHANGE_NAME_FILTER_TEXT = "CHANGE_NAME_FILTER_TEXT";

const filterReducer = (state, action) => {
  switch (action.type) {
    case SWITCH_ACTIVE_FILTER:
      if (action.id === "byStatus") {
        state.statusFilter.activeFilter = action.value;
      } else if (action.id === "bySpecies") {
        state.speciesFilter.activeFilter = action.value;
      }
      return state;
    case CHANGE_NAME_FILTER_TEXT:
      state.nameFilter.name = action.value;
      return state;
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

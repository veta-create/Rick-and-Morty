const SWITCH_ACTIVE_FILTER = "SWITCH_ACTIVE_FILTER";
const CHANGE_NAME_FILTER_TEXT = "CHANGE_NAME_FILTER_TEXT";

let store = {
  _state: {
    cardsData: [
      {
        id: 1,
        name: "Rick",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 2,
        name: "Mo",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 3,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 4,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 5,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 6,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 7,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 8,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 9,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 10,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 11,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 12,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
    ],
    filterData: {
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
    },
  },
  _callSubcriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubcriber = observer;
  },

  dispatch(action) {
    if (action.type === SWITCH_ACTIVE_FILTER) {
      if (action.id === "byStatus") {
        this._state.filterData.statusFilter.activeFilter = action.value;
      } else if (action.id === "bySpecies") {
        this._state.filterData.speciesFilter.activeFilter = action.value;
      }
      this._callSubcriber(store);
    } else if (action.type === CHANGE_NAME_FILTER_TEXT) {
      this._state.filterData.nameFilter.name = action.value;
      this._callSubcriber(store);
    }
  },
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

export default store;

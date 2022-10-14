import filterReducer from "./filterReducer";

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
    this._state.filterData = filterReducer(this._state.filterData, action);
    this._callSubcriber(store);
  },
};

export default store;

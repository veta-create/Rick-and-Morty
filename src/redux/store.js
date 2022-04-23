import { rerender } from "../rerender"

let store = {
  state:
  {
    cardsData: [{ id: 1, name: 'Rick', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 2, name: 'Mo', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 3, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 4, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 5, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 6, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 7, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 8, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 9, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 10, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 11, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
    { id: 12, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' }],
    filterData: {
      speciesFilter: {
        filters: [{
          id: 1,
          value: 1,
          name: 'none'
        }, {
          id: 2,
          value: 2,
          name: 'name'
        },
        {
          id: 3,
          value: 3,
          name: 'species',

        },
        {
          id: 4,
          value: 4,
          name: 'status'
        }],
        activeFilter: 1
      },
      statusFilter: {
        filters: [
          {
            id: 1,
            value: 'n',
            name: 'none'
          }, {
            id: 2,
            value: 'a',
            name: 'alive'
          },
          {
            id: 3,
            value: 'd',
            name: 'dead',

          },
          {
            id: 4,
            value: 'u',
            name: 'unknown'
          }
        ],
        activeFilter: 1
      },
      nameFilter: {
        name: 'xxx'
      }
    },


  },
  switchActiveFilter(id, value) {
    if(id == '1') {
      store.state.filterData.statusFilter.activeFilter = value
    } else if (id == '2'){
      store.state.filterData.speciesFilter.activeFilter = value
    }
    rerender(store)
  },
  changeNameText(value) {
    store.state.filterData.nameFilter.name = value
    rerender(store)
  }
}

export default store
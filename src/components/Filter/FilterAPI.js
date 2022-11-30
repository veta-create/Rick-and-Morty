import Filter from "./Filter";

const FilterAPI = (props) => {
  const switchingFilters = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    props.switchActiveFilters(id, value);
    let currentFilter = props.filterData.statusFilter.activeFilter;
    let filters = props.filterData.statusFilter.filters;
    let filter = filters.filter((f) => {
      if (f.value === currentFilter) {
        return f;
      }
    });
    let filterValue = filter[0].name;
    if (currentFilter === "all") {
      props.getCharactersThunkCreator(1);
    } else {
      props.getCharactersByFilterThunkCreator(1, filterValue, null);
    }
  };

  return (
    <Filter
      filterData={props.filterData}
      changeNameFilterText={props.changeNameFilterText}
      switchingFilters={switchingFilters}
    />
  );
};

export default FilterAPI;

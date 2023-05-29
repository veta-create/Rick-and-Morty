import Filter from "./Filter";

const FilterAPI = (props) => {
  const switchingFilters = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    props.switchActiveFilters(id, value);
    const currentStatusFilter = props.filterData.statusFilter.activeFilter;
    const statusFilters = props.filterData.statusFilter.filters;
    const statusFilter = statusFilters.filter((f) => {
      if (f.value === currentStatusFilter) {
        return f;
      }
    });
    const statusFilterValue = statusFilter[0].name;
    const currentGenderFilter = props.filterData.genderFilter.activeFilter;
    const genderFilters = props.filterData.genderFilter.filters;
    const genderFilter = genderFilters.filter((f) => {
      if (f.value === currentGenderFilter) {
        return f;
      }
    })
    const genderFilterValue = genderFilter[0].name;
    const currentNameFilter = props.filterData.nameFilter.name;
    if (currentStatusFilter === "all" && currentGenderFilter === "all" && currentNameFilter === "") {
      props.getCharactersThunkCreator(1);
    } else {
      props.getCharactersByFilterThunkCreator(
        1,
        statusFilterValue,
        genderFilterValue,
        currentNameFilter
      );
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

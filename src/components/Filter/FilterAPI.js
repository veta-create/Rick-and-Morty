import { charactersAPI } from "../../api/api";
import Filter from "./Filter";

const FilterAPI = (props) => {
  debugger;
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
    console.log(filterValue);
    charactersAPI
      .getCharactersByFilter(props.currentPage, filterValue, null)
      .then((response) => {
        props.setTotalPagesCount(response.data.info.pages);
        props.setCharacters(response.data.results);
      });
  };

  return (
    <Filter
      filterData={props.filterData}
      changeNameFilterText={props.changeNameFilterText}
      switchingFilters={switchingFilters}
      setTotalPagesCount={props.setTotalPagesCount}
    />
  );
};

export default FilterAPI;

import React from "react";
import Pagination from "./Pagination";
import { charactersAPI } from "../../api/api";

const PaginationAPI = (props) => {
  let pages = [];
  for (let i = 0; i < props.paginationSize; i++) {
    pages.push(i + 1);
  }
  const onCurrentPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.toggleIsFetching(true);
    let currentFilter = props.statusFilterState.activeFilter;
    let filters = props.statusFilterState.filters;
    if (currentFilter === "n") {
      charactersAPI.getCharacters(pageNumber).then((response) => {
        props.setCharacters(response.data.results);
        props.toggleIsFetching(false);
        if (response.data.info.prev === null) {
          props.changeArrowState("back", false);
        }

        if (response.data.info.next === null) {
          props.changeArrowState("next", false);
        } else {
          props.changeArrowState("back", true);
        }
      });
    } else if (currentFilter !== "n") {
      let filter = filters.filter((f) => {
        if (f.value === currentFilter) {
          return f.name;
        }
      });
      let filterValue = filter[0].name;
      charactersAPI
        .getCharactersByFilter(pageNumber, filterValue, null)
        .then((response) => {
          props.setCharacters(response.data.results);
          props.toggleIsFetching(false);
          if (response.data.info.prev === null) {
            props.changeArrowState("back", false);
          }

          if (response.data.info.next === null) {
            props.changeArrowState("next", false);
          } else {
            props.changeArrowState("back", true);
          }
        });
    }
  };

  return (
    <Pagination
      onCurrentPageChanged={onCurrentPageChanged}
      paginationSize={props.paginationSize}
      arrowBackState={props.arrowBackState}
      currentPage={props.currentPage}
      arrowNextState={props.arrowNextState}
    />
  );
};

export default PaginationAPI;

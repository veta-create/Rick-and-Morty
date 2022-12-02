import React from "react";
import Pagination from "./Pagination";

const PaginationAPI = (props) => {
  let pages = [];

  for (let i = 0; i < props.totalPagesCount; i++) {
    pages.push(i + 1);
  }

  const onCurrentPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    const checkForFilter =
      props.filterData.statusFilter.activeFilter === "all" &&
      props.filterData.nameFilter.name === "";
    const statusFilterState = props.filterData.statusFilter.filters.filter(
      (f) => {
        return f.value === props.filterData.statusFilter.activeFilter;
      }
    );
    const genderFilterState = props.filterData.genderFilter.filters.filter(
      (f) => {
        return f.value === props.filterData.genderFilter.activeFilter;
      }
    );

    if (checkForFilter) {
      props.getCharactersThunkCreator(pageNumber);
    } else {
      props.getCharactersByFilterThunkCreator(
        pageNumber,
        statusFilterState[0].name,
        genderFilterState[0].name,
        null
      );
    }
  };

  return (
    <Pagination
      onCurrentPageChanged={onCurrentPageChanged}
      paginationSize={props.paginationSize}
      setTotalPagesCount={props.setTotalPagesCount}
      totalPagesCount={props.totalPagesCount}
      arrowBackState={props.arrowBackState}
      currentPage={props.currentPage}
      arrowNextState={props.arrowNextState}
    />
  );
};

export default PaginationAPI;

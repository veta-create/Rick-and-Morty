import React from "react";
import Pagination from "./Pagination";
import { charactersAPI, } from "../../api/api";

const PaginationAPI = (props) => {
  let pages = [];
  for (let i = 0; i < props.paginationSize; i++) {
    pages.push(i + 1);
  }
  const onCurrentPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.toggleIsFetching(true);
    charactersAPI.getCharacters(pageNumber).then((response) => {
      props.toggleIsFetching(false);
      props.setCharacters(response.data.results);
      if (response.data.info.prev !== null) {
        props.changeArrowState("back", true);
      } else if (response.data.info.prev === null) {
        props.changeArrowState("back", false);
      }

      if (response.data.info.next === null) {
        props.changeArrowState("next", false);
      } else {
        props.changeArrowState("back", true);
      }
    });
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

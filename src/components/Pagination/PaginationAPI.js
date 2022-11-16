import React from "react";
import axios from "axios";
import Pagination from "./Pagination";

const PaginationAPI = (props) => {
  let pages = [];
  for (let i = 0; i < props.paginationSize; i++) {
    pages.push(i + 1);
  }
  const onCurrentPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((response) => {
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

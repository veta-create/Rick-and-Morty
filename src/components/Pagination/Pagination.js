import React from "react";
import s from "./Pagination.module.css";
import cn from "classnames";
import axios from "axios";

const Pagination = (props) => {
  let pages = [];
  for (let i = 0; i < props.totalPagesCount; i++) {
    pages.push(i + 1);
  }

  const onCurrentPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((response) => {
        props.setCharacters(response.data.results);
      });
  };
  return (
    <div className={s.pagination}>
      <div className={s.prev}>
        <div></div>
      </div>

      <div className={s.pages}>
        {pages.map((p) => (
          <span
            onClick={(e) => {onCurrentPageChanged(p)}}
            className={cn(s.page, p === props.currentPage && s.selected)}
          >
            {p}
          </span>
        ))}
      </div>

      <div className={s.next}>
        <div></div>
      </div>
    </div>
  );
};

export default Pagination;

import React from "react";
import s from "./Pagination.module.css";
import cn from "classnames";

const Pagination = (props) => {
  let pages = [];
  for (let i = 0; i < props.totalPagesCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className={s.pagination}>
      {props.arrowBackState ? (
        <div
          onClick={(e) => {
            props.onCurrentPageChanged(props.currentPage - 1);
          }}
          className={s.prev}
        >
          <div></div>
        </div>
      ) : (
        ""
      )}
      <div className={s.pages}>
        {pages.map((p) => (
          <span
            onClick={(e) => {
              props.onCurrentPageChanged(p);
            }}
            className={cn(s.page, p === props.currentPage && s.selected)}
          >
            {p}
          </span>
        ))}
      </div>

      {props.arrowNextState ? (
        <div
          onClick={(e) => {
            props.onCurrentPageChanged(props.currentPage + 1);
          }}
          className={s.next}
        >
          <div></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;

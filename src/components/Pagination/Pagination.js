import React, { useEffect, useState } from "react";
import s from "./Pagination.module.css";
import cn from "classnames";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const Pagination = (props) => {
  let [leftLine, setLeftLine] = useState(1);
  let [rightLine, setRightLine] = useState(5);
  let pages = [];

  for (let i = 0; i < props.totalPagesCount; i++) {
    pages.push(i + 1);
  };

  useEffect(() => {
    setLeftLine(1);
    if(props.totalPagesCount < 5) {
      setRightLine(props.totalPagesCount);
    } else {
      setRightLine(5);
    }
  }, [props.totalPagesCount]);

  return (
    <div className={s.pagination}>
      {leftLine >= 5 && <div className={s.prev} onClick={() => {
        if (rightLine === props.totalPagesCount) {
          setRightLine(rightLine - (props.totalPagesCount % 5));
          setLeftLine(rightLine - (props.totalPagesCount % 5) - 5);
        } else {
          setLeftLine(leftLine - 5);
          setRightLine(rightLine - 5);
        };
      }}><img src={left} /></div>}
      <div className={s.pages}>
        {pages.filter(p => p >= leftLine && p <= rightLine).map((p) => (
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
      {(rightLine < props.totalPagesCount) && <div className={s.next} onClick={() => {
        if (rightLine + 5 > props.totalPagesCount) {
          setLeftLine(leftLine + 5);
          setRightLine(props.totalPagesCount);
        } else {
          setLeftLine(leftLine + 5);
          setRightLine(rightLine + 5);
        };
      }}><img src={right} /></div>}
    </div>
  );
};

export default Pagination;

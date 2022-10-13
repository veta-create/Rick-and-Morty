import React from "react";
import s from "./Header.module.css";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.title}>Rick Database</div>
      <Pagination />
      <div className={s.filter}>
        <Filter filterData={props.filterData} dispatch={props.dispatch} />
      </div>
    </div>
  );
};

export default Header;

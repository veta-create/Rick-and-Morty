import React from "react";
import s from "./Header.module.css";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import FilterContainer from "../Filter/FilterContainer";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.title}>Rick Database</div>
      <Pagination />
      <div className={s.filter}>
        {/* <Filter filterData={props.filterData} dispatch={props.dispatch} /> */}
        <FilterContainer store={props.store} />
      </div>
    </div>
  );
};

export default Header;

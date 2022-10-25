import React from "react";
import s from "./Header.module.css";
import Pagination from "../Pagination/Pagination";
import FilterContainer from "../Filter/FilterContainer";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.title}>Rick Database</div>
      <Pagination />
      <div className={s.filter}>
        <FilterContainer/>
      </div>
    </div>
  );
};

export default Header;

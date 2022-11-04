import React from "react";
import s from "./Header.module.css";
import Pagination from "../Pagination/Pagination";
import FilterContainer from "../Filter/FilterContainer";
import PaginationContainer from "../Pagination/PaginationContainer";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.title}>Rick Database</div>
      <PaginationContainer />
      <div className={s.filter}>
        <FilterContainer/>
      </div>
    </div>
  );
};

export default Header;

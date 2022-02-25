import React from "react";
import s from './Header.module.css'
import Filter from "../Filter/Filter";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.title}>Rick Database</div>
      <Filter />
    </div>)
}

export default Header
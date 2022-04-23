import React from "react";
import s from './Header.module.css'
import Filter from "../Filter/Filter";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.title}>Rick Database</div>
      <div  className={s.filter}><Filter filterData={props.filterData}
       switchActiveFilter={props.switchActiveFilter}
       changeNameText={props.changeNameText} /></div>
    </div>)
}

export default Header
import React from "react";
import s from "./Card.module.css";
import ava from "../../../assets/images/ava.jpeg";

const Card = (props) => {
  return (
    <div className={s.card}>
      <div className={s.photo}>
        <img src={props.image} alt="avatar" />
      </div>

      <div className={s.info}>
        <div className={s.name}>name: {props.name ? props.name : "Rick"}</div>
        <div className={s.status}>
          status: {props.status ? props.status : "dead"}
        </div>
        <div className={s.species}>
          species: {props.species ? props.species : "Humanoid"}
        </div>
        <div className={s.gender}>
          gender: {props.gender ? props.gender : "male"}
        </div>
      </div>
    </div>
  );
};

export default Card;

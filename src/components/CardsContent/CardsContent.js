import React from "react";
import s from "./CardsContent.module.css";
import Card from "./Card/Card";
import axios from "axios";

const CardsContent = (props) => {
  if (props.characters.length === 0) {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${props.currentPage}`
      )
      .then((response) => {
        props.setCharacters(response.data.results);
      });
  }

  let cards = props.characters.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      name={card.name}
      status={card.status}
      species={card.species}
      gender={card.gender}
      image={card.image}
    />
  ));

  return <div className={s.content}>{cards}</div>;
};

export default CardsContent;

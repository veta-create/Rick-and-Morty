import React from "react";
import s from "./CardsContent.module.css";
import Card from "./Card/Card";
import { setCharactersAC } from "../../redux/cardsReducer";

const CardsContent = (props) => {
  if (props.characters.length === 0) {
    props.setCharacters(
      {
        id: 1,
        name: "Rick",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 2,
        name: "Mo",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 3,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 4,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 5,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 6,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 7,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 8,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 9,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 10,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 11,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      },
      {
        id: 12,
        name: "Morty",
        status: "alive",
        species: "Humanoid",
        gender: "male",
        img: "www",
      }
    );
  }

  let cards = props.characters.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      name={card.name}
      status={card.status}
      species={card.species}
      gender={card.gender}
      img={card.img}
    />
  ));

  return <div className={s.content}>{cards}</div>;
};

export default CardsContent;

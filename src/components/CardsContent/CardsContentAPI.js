import React from "react";
import axios from "axios";
import CardsContent from "./CardsContent";

const CardsContentAPI = (props) => {
  if (props.characters.length === 0) {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${props.currentPage}&&gender=male`
      )
      .then((response) => {
        props.setCharacters(response.data.results);
        props.setTotalPagesCount(response.data.info.pages);
      });
  }

  return <CardsContent characters={props.characters} />;
};

export default CardsContentAPI;
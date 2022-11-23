import React from "react";
import CardsContent from "./CardsContent";
import { charactersAPI } from "../../api/api";

const CardsContentAPI = (props) => {
  if (props.characters.length === 0) {
    props.toggleIsFetching(true);
    charactersAPI.getCharacters(1).then((response) => {
      props.toggleIsFetching(false);
      props.setCharacters(response.data.results);
      props.setTotalPagesCount(response.data.info.pages);
    });
  }

  return (
    <CardsContent characters={props.characters} isFetching={props.isFetching} />
  );
};

export default CardsContentAPI;

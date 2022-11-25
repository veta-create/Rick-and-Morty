import React from "react";
import CardsContent from "./CardsContent";

const CardsContentAPI = (props) => {
  if (props.characters.length === 0) {
    props.getCharactersThunkCreator(1);
  }

  return (
    <CardsContent characters={props.characters} isFetching={props.isFetching} />
  );
};

export default CardsContentAPI;

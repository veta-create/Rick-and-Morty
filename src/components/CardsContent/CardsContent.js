import Preloader from "../common/Preloader/Preloader";
import Card from "./Card/Card";
import s from "./CardsContent.module.css";

const CardsContent = (props) => {
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
  return props.isFetching ? (
    <Preloader />
  ) : (
    <div className={s.content}>{cards}</div>
  );
};

export default CardsContent;

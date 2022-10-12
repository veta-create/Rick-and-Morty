import React from 'react'
import s from './CardsContent.module.css'
import Card from './Card/Card'

const CardsContent = (props) => {
  let cards = props.cardsData.map(card => <Card key={card.id} id={card.id} name={card.name} status={card.status}
     species={card.species} gender={card.gender} img={card.img} />)

  return (
    <div className={s.content}>   
      {cards}
    </div>
  )
}

export default CardsContent
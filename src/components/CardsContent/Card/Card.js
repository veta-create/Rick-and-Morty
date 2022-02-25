import React from 'react'
import s from '../CardsContent.module.css'
import ava from '../../../assets/images/ava.jpeg'

const Card = () => {
  return (
    <div className={s.card}>

      <div className={s.photo}>
        <img src={ava}></img>
      </div>

      <div className={s.info}>
        <div className={s.name}>name: Rick</div>
        <div className={s.status}>status: Dead</div>
        <div className={s.species}>species: Humanoid</div>
        <div className={s.gender}>gender: Male</div>
      </div>

    </div>
  )
}

export default Card
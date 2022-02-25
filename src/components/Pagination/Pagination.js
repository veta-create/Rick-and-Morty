import React from 'react'
import s from './Pagination.module.css'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'

const Pagination = () => {
  return (
    <div className={s.pagination}>
      <div className={s.left}><img src={left}></img></div>
      ...
      <div className={s.pages}>
        <div className={s.page}>1</div>
        <div className={s.page}>2</div>
        <div className={s.page}>3</div>
        <div className={s.page}>4</div>
        <div className={s.page}>5</div>
      </div>
      ...
      <div className={s.right}><img src={right}></img></div>
    </div>
  )
}

export default Pagination
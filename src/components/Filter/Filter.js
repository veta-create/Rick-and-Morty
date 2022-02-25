import React from 'react'
import s from './Filter.module.css'

const Filter = () => {
  return (
    <div className={s.filter}>
      Filter by:
      <select>
        <option>none</option>
        <option>name</option>
        <option>species</option>
        <option>status</option>
      </select>
    </div>
  )
}

export default Filter

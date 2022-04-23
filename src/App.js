import React from 'react'
import './App.css'
import rick from './assets/images/rick.png'
import CardsContent from './components/CardsContent/CardsContent'
import Header from './components/Header/Header'
import Pagination from './components/Pagination/Pagination'
import Footer from './components/Footer/Footer'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header filterData={props.store.state.filterData}
       switchActiveFilter={props.store.switchActiveFilter}
       changeNameText={props.store.changeNameText} />
      <CardsContent cardsData={props.store.state.cardsData} />
      <div className='forRick'>
        <img src={rick} className='rick'></img>
      </div>
      <Pagination />
      <Footer />
    </div>
  )
}

export default App;

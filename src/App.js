import React from "react";
import "./App.css";
import rick from "./assets/images/rick.png";
import CardsContent from "./components/CardsContent/CardsContent";
import Header from "./components/Header/Header";
import store from "./redux/store";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header
        filterData={props.store.getState().filterData}
        switchActiveFilter={props.store.switchActiveFilter.bind(store)}
        changeNameText={props.store.changeNameText.bind(store)}
      />
      <CardsContent cardsData={props.store.getState().cardsData} />
      <div className="forRick">
        <img src={rick} alt="Rick" className="rick"></img>
      </div>
    </div>
  );
};

export default App;

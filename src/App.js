import React from "react";
import "./App.css";
import rick from "./assets/images/rick.png";
import CardsContent from "./components/CardsContent/CardsContent";
import Header from "./components/Header/Header";
import store from "./redux/store";

const App = (props) => {
  debugger
  return (
    <div className="app-wrapper">
      <Header
        filterData={props.state.filterData}
        dispatch={props.store.dispatch.bind(store)}
      />
      <CardsContent cardsData={props.state.cardsData} />
      <div className="forRick">
        <img src={rick} alt="Rick" className="rick"></img>
      </div>
    </div>
  );
};

export default App;

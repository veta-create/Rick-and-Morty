import React from "react";
import "./App.css";
import rick from "./assets/images/rick.png";
import CardsContent from "./components/CardsContent/CardsContent";
import CardsContentContainer from "./components/CardsContent/CardsContentContainer";
import Header from "./components/Header/Header";
import store from "./redux/store";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <CardsContentContainer />
      <div className="forRick">
        <img src={rick} alt="Rick" className="rick"></img>
      </div>
    </div>
  );
};

export default App;

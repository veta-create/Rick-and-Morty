import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerender(state)
});

reportWebVitals();

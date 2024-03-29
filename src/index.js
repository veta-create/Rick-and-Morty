import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

reportWebVitals();

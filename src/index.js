import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import buildStore from "./js/store/index";
import App from "./js/components/App";

render(
  <Provider store={buildStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

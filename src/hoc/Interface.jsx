import React from "react";
import { Provider } from "react-redux";
import store from "../redux/storeConfig/store";

const Interface = Component => props => (
  <Provider store={store}>
    <Component {...props} style={{ marginTop: "30px" }} />
  </Provider>
);
export default Interface;

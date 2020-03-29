import React, { ComponentType } from "react";

import { Provider } from "react-redux";
import store from "../redux/store";

const Interface = <P extends object>(Component: ComponentType<P>) => (
  props: P
) => (
  <Provider store={store}>
    <Component {...props} style={{ marginTop: "30px" }} />
  </Provider>
);
export default Interface;

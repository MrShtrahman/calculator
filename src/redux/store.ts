import { applyMiddleware, compose, createStore } from "redux";
import rootReducer, { RootAction, RootState } from "./reducers/rootReducer";

import { createEpicMiddleware } from "redux-observable";
import epics from "./epics";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState
>();

const configureStore = (initialState?: RootState) => {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();
epicMiddleware.run(epics);

export default store;

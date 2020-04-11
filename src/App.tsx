import React, { FC } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Calculator from "./components/Calculator/Calculator";
import Interface from "./hoc/Interface";
import LinkButtons from "./components/MainButtons/MainButtons";

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LinkButtons} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/login" component={LinkButtons} />
      <Route path="/signup" component={LinkButtons} />
    </Switch>
  </Router>
);

export default Interface(App);

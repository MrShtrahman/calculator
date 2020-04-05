import React, { FC } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Calculator from "../Calculator/Calculator";
import LinkButtons from "./LinkButtons";

const Routes: FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LinkButtons} />
      <Route path="/calculator" component={Calculator} />
    </Switch>
  </Router>
);

export default Routes;

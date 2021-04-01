import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FunctionalType from "./pages/functional/FunctionalType";
import ClassType from "./pages/class/ClassType";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/functional" component={FunctionalType} />
        <Route path="/class" component={ClassType} />
      </Switch>
    </Router>
  );
}

export default Routes;

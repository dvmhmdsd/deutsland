import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "globals/routes";
import adminRoutes from "globals/admin-routes";

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {adminRoutes.map((adRoute, index) => {
            return (
              <Route
                key={`adRoute${index}`}
                exact
                path={`/admin${adRoute.path}`}
                component={adRoute.component}
              />
            );
          })}
          {routes.map((route, index) => {
            return (
              <Route
                key={`route${index}`}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

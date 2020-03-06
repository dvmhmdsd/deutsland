import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";
import adminRoutes from "./admin-routes";

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {adminRoutes.map((adRoute, index) => {
            return (
              <Route
                key={index}
                exact
                path={`/admin${adRoute.path}`}
                component={adRoute.component}
              />
            );
          })}
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
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

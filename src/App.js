import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => {
            if (route.group) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  render={({ match: { url } }) => (
                    <>
                      {route.group.map((adminRoute, idx) => {
                        return (
                          <Route
                            path={`${url}${adminRoute.path}`}
                            key={idx}
                            component={adminRoute.component}
                            exact
                          />
                        );
                      })}
                    </>
                  )}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            }
          })}
        </Switch>
      </Router>
    );
  }
}

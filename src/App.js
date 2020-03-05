import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import routes from "./routes";
import LoginPage from "./modules/users/components/login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin/login" component={LoginPage} exact />
          {routes.map((route, index) => {
            if (route.group) {
              if (isAuthenticated()) {
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
                return <Redirect key={index} to="/admin/login" />;
              }
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

let isAuthenticated = () => {
  if (!localStorage.getItem("user")) {
    return false;
  }

  return true;
};

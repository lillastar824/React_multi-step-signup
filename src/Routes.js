import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}

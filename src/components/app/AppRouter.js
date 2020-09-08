import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
import RouteGuard from "../auth/services/RouteGuard";
import HandleError from "../error/HandleError";
import SignOut from "../auth/signout.js/SignOut";
import SignIn from "../auth/signin/SignIn";
import SignUp from "../auth/signup/SignUp";

function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app" exact component={Home} />
        <RouteGuard path="/main/:user" exact component={Dashboard} />
        {/* 
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        */}
        <Route path="/logout" exact component={SignOut} />
        <Route path="/401" exact component={HandleError} />
        <Route path="/404" exact component={HandleError} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default AppRouter;

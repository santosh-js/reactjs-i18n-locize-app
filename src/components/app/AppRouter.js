import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFound from "../error/Error404-deprecated/Error";
import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
import RouteGuard from "../auth/services/RouteGuard";
import NotAuthorized from "../error/Error401-deprecated/NotAuthorized";
import HandleError from "../error/HandleError";
import Signout from "../auth/signout.js/Signout";

function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app" exact component={Home} />
        <RouteGuard path="/main/:user" exact component={Dashboard} />
        <Route path="/logout" exact component={Signout} />
        {/* <Route path="/404" exact component={NotFound} />*/}
        <Route path="/401" exact component={HandleError} />
        <Route path="/404" exact component={HandleError} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default AppRouter;

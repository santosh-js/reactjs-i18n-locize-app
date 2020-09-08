import React from "react";
import { Route, Redirect } from "react-router-dom";
import serviceObj from "./AuthService.js";

// class RouteGuard extends Component {
//   render() {
//     // check login here
//     if (serviceObj.isLoggedIn()) {
//       return <Route {...this.props} />;
//     } else {
//       return <Redirect to="/login" />;
//     }
//   }
// }

function RouteGuard(props) {
  // check login here
  if (serviceObj.isLoggedIn()) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/401" />;
  }
}

export default RouteGuard;

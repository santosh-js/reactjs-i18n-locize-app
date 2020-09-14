import React from "react";
import styles from "./HandleError.module.css";
import { NavLink } from "react-router-dom";
import { ERRORS } from "../database/Errors";
// import FIRST_INDEX from "../auth/services/AuthService";

function getErrorByUri(props) {
  console.log(props.history.location.pathname);
  console.log(ERRORS);
  const error = ERRORS.filter((error) => error.id === props.location.pathname);
  console.log(error);
  // return error[FIRST_INDEX]
  return error;
}

function HandleError(props) {
  // const { id, value, style } = getErrorByUri(props.history);
  const [{ id, value, style }] = getErrorByUri(props);
  console.log(id, value, style);
  return (
    <div className={styles.error}>
      <h3>{value}</h3>

      <NavLink className={styles.link} to="/">
        Go to Home
      </NavLink>
    </div>
  );
}

export default HandleError;

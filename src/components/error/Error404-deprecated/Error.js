import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.error}>
      <h3>404 page not found</h3>

      <Link className={styles.link} to="/">
        Go to Home{" "}
      </Link>
    </div>
  );
}

export default NotFound;

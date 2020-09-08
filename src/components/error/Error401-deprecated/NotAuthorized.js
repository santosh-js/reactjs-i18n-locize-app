import React from "react";
import styles from "./NotAuthorized.module.css";
import { Link } from "react-router-dom";

function NotAuthorized() {
  return (
    <div className={styles.unauth}>
      <h3>401 Not Authorized</h3>

      <Link className={styles.link} to="/">
        Go to Home{" "}
      </Link>
    </div>
  );
}

export default NotAuthorized;

import React from "react";
import serviceObj from "../../auth/services/AuthService";
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { t, i18n } = useTranslation();

  const change = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.all}>
      <Link
        className={styles.logout}
        to="/logout"
        onClick={() => {
          serviceObj.logout();
        }}
      >
        logout
      </Link>
      <div className={styles.lang}>
        <button onClick={() => change("ait")}>Italian</button>
        <button onClick={() => change("en")}>English</button>
      </div>
      <div className={styles.display}>
        <h2>{t("title")}</h2>
      </div>
      <p>{t("description.one")}</p>
    </div>
  );
}

export default withRouter(Dashboard);

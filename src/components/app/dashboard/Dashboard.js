import React, { Suspense } from "react";
import serviceObj from "../../auth/services/AuthService";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard(props) {
  const { t, i18n } = useTranslation();

  const change = (lng) => {
    console.log(props.username.user);
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
        {t("logout")}
      </Link>
      <div className={styles.lang}>
        <button onClick={() => change("it")}>Italian</button>
        <button onClick={() => change("en")}>English</button>
      </div>
      <div className={styles.display}>
        <h1>{t("greet") + " " + props.username.user}</h1>
        <h2>{t("title")}</h2>
      </div>
      <p>{t("description")}</p>
    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function Loading(props) {
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard username={props.match.params} />
    </Suspense>
  );
}

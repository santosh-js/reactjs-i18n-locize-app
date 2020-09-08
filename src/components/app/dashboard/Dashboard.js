import React, { Suspense } from "react";
import serviceObj from "../../auth/services/AuthService";
import { useTranslation } from "react-i18next";
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
        <button onClick={() => change("it")}>Italian</button>
        <button onClick={() => change("en")}>English</button>
      </div>
      <div className={styles.display}>
        <h1>{t("greet") + " santosh"}</h1>
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
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard />
    </Suspense>
  );
}

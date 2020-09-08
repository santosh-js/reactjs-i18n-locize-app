import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  resources,
  lng,
  fallbackLng,
} from "../i18n-translations/TranslationResourse";
import serviceObj from "../auth/services/AuthService";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function Dashboard() {
  i18n.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng,

    // interpolation: {
    //   escapeValue: false,
    // },
  });
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("Welcome to React")}</h2>
      <Link
        to="/logout"
        onClick={() => {
          serviceObj.logout();
        }}
      >
        logout
      </Link>
    </>
  );
}

export default withRouter(Dashboard);

import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  resources,
  lng,
  fallbackLng,
} from "../i18n-translations/TranslationResourse";

function Internalization() {
  i18n.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng,

    // interpolation: {
    //   escapeValue: false,
    // },
  });
  const { t } = useTranslation();

  console.log(useTranslation());
  return <h2>{t("Welcome to React")}</h2>;
}

export default Internalization;

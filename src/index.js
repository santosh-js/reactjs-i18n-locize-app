import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../src/components/i18n-setup/i18n";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

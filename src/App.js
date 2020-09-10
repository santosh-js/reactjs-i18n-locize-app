import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./components/app/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

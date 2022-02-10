import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import { Contact } from "./views";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Contact />
      </div>
    </Provider>
  );
}

export default App;

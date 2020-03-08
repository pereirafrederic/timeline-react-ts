import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import "./App.css";
import Space from "./Components/Space/Space";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        Timeline App
        <ClockCircleOutlined spin={true} />
      </header>
      <body className="App__Body">
        <Router>
          <div className="App__routes">
            <Switch>
              <Route
                exact
                path={"/"}
                render={() => <Space times={["el1", "el2"]} />}
              />

              <Route render={() => <Redirect push to={"/"} />} />
            </Switch>
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;

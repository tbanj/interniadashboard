import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Internia from "./pro/Internia";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>

            <Route exact path="/" component={Internia} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
      {/* <Dashbae /> */}
    </div>
  );
}

export default App;

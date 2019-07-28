import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./component/landing/Landing";
import Register from "./component/onboarding/Register";
import Login from "./component/Login";
import Faq from "./component/Faq";
import About from "./component/About";
import Forgot from "./component/Forgot";
import Terms from "./component/Terms";
import Dashbae from "./component/dashboard/Dashbae";
import Internia from "./pro/Internia";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/about" component={About} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/dashboard" component={Dashboard} /> */}
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

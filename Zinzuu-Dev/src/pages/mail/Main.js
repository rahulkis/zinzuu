import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import Mail from "../mail/Mail";
// eslint-disable-next-line
function EMail() {

  return (
    <div className="app-main">
      <Router>
        <Switch>        
          <Route exact path="/test-email/mail" component={Mail} />
          <Route path="/test-email" component={Mail} />
        </Switch>
      </Router>
      <div>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_RIGHT}
        />
      </div>
    </div>
  );
}

export default EMail;

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import Login from "./Login";


function LoginComponent() {

  return (
    <div className="app-main signup">
      <Router>
        <Switch>
          <Route path={"/"} component={Login} />
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

export default LoginComponent;

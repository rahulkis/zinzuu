import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import QrCode from "../qr-code/QR-Code";
import QrImage from "../qr-code/QrImage";

function App() {

  return (
    <div className="app-main">
      <Router>
        <Switch>
          <Route exact path="/qr-code" component={QrCode} />
          <Route exact path="/qr-image" component={QrImage} />
          <Route path="/" component={QrCode} />
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

export default App;

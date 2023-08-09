import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import BarCodeScanner from "../barcode-scanner/BarCodeScanner";
function UPC() {

  return (
    <div className="app-main">
      <Router>
        <Switch>
          <Route exact path="/test-upc/barcode-reader" component={BarCodeScanner} />
          <Route path="/test-upc" component={BarCodeScanner} />
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

export default UPC;

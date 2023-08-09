import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/main/Index";
import SMS from "./pages/sms/SMS";
import UPC from "./pages/upc/UPC";
import QRCODE from "./pages/qr-code/Main";
import MAIL from "./pages/mail/Main";
import Customer from "./pages/sign-up/Main";
import QrTracking from "./pages/common/QrTracking";
import TemplateTracking from "./pages/common/TemplateTracking";
import "./template/assets/css/bootstrap.min.css";
import "./template/assets/sass/iDashboard.scss";

function App() {
  const url = window.location.origin;
  if (!url.includes("localhost") && !url.includes("https")) {
    window.location = `https:${url.split(":")[1]}`;
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/test-sms" component={SMS} />
          <Route path="/test-upc" component={UPC} />
          <Route path="/test-qrcode" component={QRCODE} />
          <Route path="/test-email" component={MAIL} />
          <Route path="/customer" component={Customer} />
          <Route path="/partner/qr/:id" component={QrTracking} />
          <Route path="/partner/marketing/templates/:id" component={TemplateTracking} />
          <Route path="/partner" component={Index} />
          <Route path="/vip-registration/qr/:id" component={QrTracking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

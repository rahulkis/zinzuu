import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import Login from "../login/Login";
import Logout from "../login/Logout";
import Profile from "../profile/Profile";
import Marketing from "../marketing/Marketing";
import Customer from "../customer/Customer";
import Sales from "../sales/Sales";
import Orders from "../orders/Orders";
import Training from "../training/Training";
import ReportsMain from "../reports/ReportsMain";
import PartnerReport from "../reports/Partners";
import CustomerReport from "../reports/Customer.js";
import SalesReport from "../reports/Sales";
import CommissionsReport from "../reports/Commissions";
import Main from "./Main";
import EmailTemplates from "../marketing/email-template/EmailTemplates";
import GenerateEmailTemplate from "../marketing/email-template/GenerateEmailTemplate";
import ProductUpload from "../marketing/ProductUpload";
import GenerateQrCode from "../marketing/qr-code/GenerateQrCode";
import UPCReader from "../marketing/UPCReader";
import Refer from "../marketing/Refer";
import ViewTemplate from "../marketing/email-template/ViewTemplate";
import GlobalCommisions from "../commisions/GlobalCommisions";
import CustomComissions from "../commisions/CustomComissions";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  if (userToken && userToken[0].success === true) return userToken;
}

const Index = () => {
  const token = getToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/partner/login" component={Login} />
          <Route exact path="/partner/logout" component={Logout} />
          <Route exact path="/partner/profile" component={Profile} />
          <Route exact path="/partner/sales" component={Sales} />
          <Route exact path="/partner/orders" component={Orders} />
          <Route exact path="/partner/marketing" component={Marketing} />
          <Route
            exact
            path="/partner/comissions/global-comissions"
            component={GlobalCommisions}
          />
          <Route
            exact
            path="/partner/comissions/custom-comissions"
            component={CustomComissions}
          />
          <Route
            exact
            path="/partner/comissions/report"
            component={CommissionsReport}
          />
          <Route
            exact
            path="/partner/marketing/mail-templates"
            component={EmailTemplates}
          />
          <Route
            exact
            path="/partner/marketing/generate-mail-templates"
            component={GenerateEmailTemplate}
          />
          <Route
            exact
            path="/partner/marketing/edit-template/:id"
            component={GenerateEmailTemplate}
          />
          <Route
            exact
            path="/partner/marketing/view-template/:id"
            component={ViewTemplate}
          />
          <Route
            exact
            path="/partner/marketing/upload-product"
            component={ProductUpload}
          />
          <Route
            exact
            path="/partner/marketing/generate-qr"
            component={GenerateQrCode}
          />
          <Route
            exact
            path="/partner/marketing/upc-scanner"
            component={UPCReader}
          />
          <Route exact path="/partner/marketing/refer" component={Refer} />
          <Route exact path="/partner/training" component={Training} />
          <Route exact path="/partner/reports" component={ReportsMain} />
          <Route
            exact
            path="/partner/reports/partner"
            component={PartnerReport}
          />
          <Route
            exact
            path="/partner/reports/customer"
            component={CustomerReport}
          />
          <Route exact path="/partner/reports/sales" component={SalesReport} />
          <Route
            exact
            path="/partner/reports/comissions"
            component={CommissionsReport}
          />
          <Route exact path="/partner/customers" component={Customer} />
          <Route exact path="/partner" component={Main} />
        </Switch>
      </Router>
      <div>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_RIGHT}
        />
      </div>
    </>
  );
};

export default Index;

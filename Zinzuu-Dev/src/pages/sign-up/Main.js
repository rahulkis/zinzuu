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
import SignUp from "../sign-up/Register";
import Profile from "./Profile";
import { useCookies } from "react-cookie";
import LoginCustomer from "../login/LoginCustomer";
import CustomerSignUp from "./CustomerSignUp";
import Thanks from "../common/Thanks";
// import UploadReceipt from "../common/UploadReceipt";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import RPOffer from "../common/RPOffer";
import BarcodeScan from "../common/BarcodeScan";
import PrivacyPolicy from "../common/PrivacyPolicy";
import Referal from './Referal';

function App(props) {
  const [redirect, setRedirect] = useState(false);
  const [cookie] = useCookies(["user"]);

  useEffect(() => {
    if (Object.keys(cookie).length > 0) {
      setRedirect(true);
    }
  }, [cookie]);

  return (
    <div className="app-main signup">
      <Router>
        {props.location.pathname.includes("/customer/register/") && (
          <div>
            {redirect ? (
              <Redirect to="/customer/scan-barcode" />
            ) : (
              <Redirect to="/customer/register" />
            )}
          </div>
        )}
        <Switch>
          <Route path="/customer/update/:id" component={Profile} />
          <Route path="/customer/signup" component={SignUp} />
          <Route path="/customer/forgot-password" component={ForgotPassword} />
          <Route path="/customer/reset-password/:id" component={ResetPassword} />
          <Route path="/customer/welcome" component={Thanks} />
          <Route path="/customer/login" component={LoginCustomer} />
          {/* <Route path="/customer/upload-receipt" component={UploadReceipt} /> */}
          <Route path="/customer/scan-barcode" component={BarcodeScan} />
          <Route path="/customer/rp-offer" component={RPOffer} />
          <Route path="/customer/privacy-policy" component={PrivacyPolicy} />
          <Route path="/customer/refer" component={Referal} />
          <Route path="/customer/register" component={CustomerSignUp} />
          <Route path="/customer/register/:id" component={CustomerSignUp} />
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

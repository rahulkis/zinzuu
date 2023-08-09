import React, { useState } from "react";
import Logo from "../../logo_555.jpg";
import QRLgo from "../../template/assets/img/test.png";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router";
import Footer from "./Footer";

function RPOffer() {
  const [redirect, setRedirect] = useState(false);
  return (
    <>
      {redirect ? <Redirect to="/customer/scan-barcode" /> : null}
      <div className="signup-container">
        <div className="col-md-4 mt-5">
          <div className="LogoMain text-center">
            <img src={Logo} alt="" />
          </div>
          <div className="text-white mt-4 text-center">
            <h5 className="text-white ">
              {" "}
              RP Offer Interstitial ( Can be Active/Inactive )
            </h5>
            <div className="d-flex justify-content-around mt-5 p-3">
              <img src={QRLgo} alt="" width="80%" />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Button
              className="w-100 text-dark"
              style={{ backgroundColor: "#f09e38" }}
              onClick={() => setRedirect(true)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RPOffer;

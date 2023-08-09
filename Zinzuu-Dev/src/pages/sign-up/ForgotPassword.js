import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { Button } from "react-bootstrap";
import { ToastsStore } from "react-toasts";
import { httpClient } from "../../constants/ApiApp";
import { CUSTOMER, CRYPTO_SECRET_KEY } from "../../constants/AppConstants";
import { resetPasswordEmail } from "../common/CommonFunction";
import Logo from "../../logo_555.jpg";
import Footer from "../common/Footer";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await httpClient
        .post(CUSTOMER.GET_CUSTOMER, { email: email })
        .then((res) => {
          if (res.status === 201) {
            let encryptedData = CryptoJS.AES.encrypt(
              res.data.email,
              CRYPTO_SECRET_KEY
            ).toString();
            resetPasswordEmail(
              res.data.firstName,
              res.data.email,
              encryptedData
            );
            setEmail("");
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Somenthing went wrong.");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="col-md-4 mt-5">
          <div className="LogoMain text-center">
            <img src={Logo} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="signupHeader">
              {/* <div className="LogoDiscription text-white text-center">
              <p className="font-weight-bold">Welcome to our VIP Club.</p>
            </div> */}
              <p className="text-white text-center mt-3">
                Please enter your email to reset your password
              </p>
              <div className="form-group mb-3">
                <label className="text-blue-gray">Email</label>
                <input
                  required
                  type="email"
                  placeholder="enter your email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between mt-4">
                <Button
                  className="w-100 text-dark"
                  style={{ backgroundColor: "#f09e38" }}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;

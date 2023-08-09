import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ToastsStore } from "react-toasts";
import { Redirect } from "react-router-dom";
import CryptoJS from "crypto-js";
import Logo from "../../logo_555.jpg";
import { httpClient } from "../../constants/ApiApp";
import { CUSTOMER, CRYPTO_SECRET_KEY } from "../../constants/AppConstants";
import Footer from "../common/Footer";

function ResetPassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const urlParams = props.location.pathname;
    const id = urlParams.split("reset-password/");
    const bytes = CryptoJS.AES.decrypt(id[1], CRYPTO_SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    setEmail(originalText);
  }, [props.location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return ToastsStore.error("Password and Confirm Password didn't match");
      }
      let formData = {
        email: email,
        password: password,
      };
      await httpClient
        .put(CUSTOMER.RESET_PASSWORD, formData)
        .then((res) => {
          if (res.status === 200) {
            ToastsStore.success(res.data.message);
            setSubmit(true);
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
      {login ? <Redirect to="/customer/login" /> : null}
      <div className="signup-container">
        {submit ? (
          <div className="d-flex flex-column justify-content-center p-4">
            <h2 className="text-white">Password Updated Successfully</h2>
            <h5 className="mt-4 text-white">
              Please go to the login page and sign in with your credentials
            </h5>
            <div className="d-flex justify-content-center mt-4">
              <Button
                className="w-50 text-dark"
                style={{ backgroundColor: "#f09e38" }}
                onClick={() => setLogin(true)}
              >
                Login
              </Button>
            </div>
          </div>
        ) : (
          <div className="col-md-4 mt-5">
            <div className="LogoMain text-center">
              <img src={Logo} alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="signupHeader">
                <div className="LogoDiscription text-white text-center">
                  <p className="font-weight-bold">Welcome to our VIP Club.</p>
                </div>
                <p className="text-white text-center mt-3">
                  Please fill all the fields
                </p>
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Email</label>
                  <input
                    required
                    readOnly
                    type="email"
                    placeholder="enter your email"
                    className="form-control"
                    name="email"
                    defaultValue={email}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Password</label>
                  <input
                    required
                    type=""
                    placeholder="enter password"
                    className="form-control"
                    name="password"
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Confirm Password</label>
                  <input
                    required
                    type=""
                    placeholder="confirm password"
                    className="form-control"
                    name="confirmPassword"
                    defaultValue={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
        )}
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;

import React, { useState } from "react";
import { ToastsStore } from "react-toasts";
import { useCookies } from "react-cookie";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { httpClient } from "../../constants/ApiApp";
import { CUSTOMER } from "../../constants/AppConstants";
import Logo from "../../logo_555.jpg";
import Footer from "../common/Footer";

const Login = () => {
  const [username, setUserName] = useState();
  // const [password, setPassword] = useState();
  const [submit, setSubmit] = useState(false);
  const [, setCookie] = useCookies(["name"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await httpClient
        .post(CUSTOMER.LOGIN_CUSTOMER, {
          email: username,
        })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem("customer", JSON.stringify(res.data));
            setCookie("user", res.data, { path: "/" });
            setSubmit(true);
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Something went wrong");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  let LoginTemplate;

  LoginTemplate = (
    <>
      {submit ? <Redirect to="/customer/scan-barcode" /> : null}
      <div className="signup-container">
        <div className="col-md-4 mt-5">
          <div className="LogoMain text-center">
            <img src={Logo} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="signupHeader">
              <div className="LogoDiscription text-white text-center">
                <p className="font-weight-bold">Welcome to our VIP Club.</p>
              </div>
              <div className="mt-3">
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Email</label>
                  <input
                    required
                    placeholder="email "
                    className="form-control "
                    name="email"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <Button
                  className="w-100 text-dark"
                  style={{ backgroundColor: "#f09e38" }}
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <a
                  href="/customer/register"
                  className="yoo-form-btn yoo-style2 text-blue-gray"
                >
                  Sign up
                </a>
                <a
                  href="/customer/forgot-password"
                  className="yoo-form-btn yoo-style2 text-blue-gray"
                >
                  Forgot password
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
  return LoginTemplate;
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

export default Login;

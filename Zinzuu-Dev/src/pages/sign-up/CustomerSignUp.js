import React, { useState } from "react";
import Logo from "../../logo_555.jpg";
import { Redirect } from "react-router-dom";
import Footer from "../common/Footer";
import "../../template/assets/css/pages/customerSignUp.css";

function CustomerSignUp() {
  const [customerType, setCustomerType] = useState("");
  const [login, setLogin] = useState(false);

  const handleCustomerType = (data) => {
    setCustomerType(data);
    localStorage.setItem("customer_type", data);
  };

  return (
    <>
      {customerType ? <Redirect to="/customer/signup" /> : null}
      {login ? <Redirect to="/customer/login" /> : null}
      <div className="signup-container">
        <div className="col-md-3 mt-5 text-center">
          <div className="LogoMain">
            <img src={Logo} alt="" />
          </div>
          <div className="LogoDiscription">
            <p className="text-white">
              Welcome to our VIP Club. You are just moments away from becoming a
              member
            </p>
          </div>
          <div className="buttonsDiv">
            <div className="mb-5 text-white">
              <p className="text-white">are you a</p>
              <button
                onClick={() => {
                  handleCustomerType("New VIP");
                  localStorage.removeItem("customer");
                }}
                className="newCustomer"
              >
                New VIP
              </button>
              <p className="text-white">or</p>
              <button
                onClick={() => {
                  handleCustomerType("Futur VIP");
                  localStorage.removeItem("customer");
                }}
                className="FutureCustomer"
              >
                Future VIP
              </button>
            </div>
            <button
              onClick={() => {
                setLogin(true);
                localStorage.removeItem("customer");
              }}
              className="FutureCustomer "
            >
              Existing VIP
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomerSignUp;

import React, { useEffect, useState } from "react";
import { ToastsStore } from "react-toasts";
import CryptoJS from "crypto-js";
import "../../template/assets/css/pages/customerSignUp.css";
// import UploadReceipt from "../common/UploadReceipt";
import BarcodeScan from "../common/BarcodeScan";
import VIPLogo from "../../template/assets/img/image_2021_03_30T05_54_05_206Z.png";
import Logo from "../../logo_555.jpg";
import { Button } from "react-bootstrap";
import { sendEmail } from "../common/CommonFunction";
import { Redirect } from "react-router";
import { httpClient } from "../../constants/ApiApp";
import { CUSTOMER, CRYPTO_SECRET_KEY } from "../../constants/AppConstants";
import Footer from "../common/Footer";

function Register(props) {
  const [values, setValues] = useState("");
  const [next, setNext] = useState(false);
  const [customerType, setCustomerType] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const customer = localStorage.getItem("customer_type");
    setCustomerType(customer);
    // let encryptedData = CryptoJS.AES.encrypt(
    //   "Zinzuu",
    //  "secretkey123"
    // ).toString();
    // console.log(encryptedData,"data")
    const urlParams = props.location.pathname;
    const id = urlParams.split("customer/");
    const bytes = CryptoJS.AES.decrypt(id[1], "secretkey123");
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText);
  }, [props.location.pathname]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerType === "New VIP") {
      setNext(true);
    } else {
      try {
        let formModel = {
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          customer_type: customerType,
          status: "pending",
        };
        httpClient
          .post(CUSTOMER.REGISTER_CUSTOMER, formModel)
          .then((result) => {
            if (result.status === 201) {
              let encryptedData = CryptoJS.AES.encrypt(
                result.data.email,
                CRYPTO_SECRET_KEY
              ).toString();
              sendEmail(values.firstName, values.email, encryptedData);
              setSubmit(true);
            }
          })
          .catch((error) => {
            if (error.response) {
              ToastsStore.error(error.response.data.message);
            } else {
              ToastsStore.error("Something went wrong");
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {submit ? <Redirect to="/customer/welcome" /> : null}
      {next ? (
        <BarcodeScan values={values} customerType={customerType} />
      ) : (
        <div className="signup-container ">
          <div className="col-md-4 mt-5">
            <div className="LogoMain text-center">
              <img src={Logo} alt="" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="signupHeader">
                <div className="LogoDiscription text-white text-center">
                  <p className="font-weight-bold">
                    Welcome to our VIP Club. You are just moments away from
                    becoming a member
                  </p>
                </div>
                <div className="LogoMain text-center">
                  <img src={VIPLogo} alt="" />
                </div>
                <p className="text-white text-center mt-3">
                  Please complete the brief signup below
                </p>
                <div className="mt-3">
                  <div className="form-group mb-3">
                    <label className="text-blue-gray">First Name</label>
                    <input
                      required
                      placeholder="first name "
                      className="form-control "
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-blue-gray">Last Name</label>
                    <input
                      required
                      placeholder="last name "
                      className="form-control "
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-blue-gray">Email</label>
                    <input
                      required
                      placeholder="enter your email"
                      className="form-control"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  {customerType === "New VIP" ? (
                    <Button
                      className="w-100 text-dark"
                      style={{ backgroundColor: "#f09e38" }}
                      type="submit"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      className="w-100 text-dark"
                      style={{ backgroundColor: "#f09e38" }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Register;

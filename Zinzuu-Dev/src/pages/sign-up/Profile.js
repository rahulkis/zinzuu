import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CryptoJS from "crypto-js";
import { CUSTOMER, CRYPTO_SECRET_KEY } from "../../constants/AppConstants";
import { httpClient } from "../../constants/ApiApp";
import Logo from "../../logo_555.jpg";
import "../../template/assets/css/loader.css";
import Footer from "../common/Footer";

function Profile(props) {
  const [values, setValues] = useState("");
  const [submit, setSubmit] = useState(false);
  const [customer, setCustomer] = useState("");

  useEffect(() => {
    const urlParams = props.location.pathname;
    const id = urlParams.split("update/");
    const bytes = CryptoJS.AES.decrypt(id[1], CRYPTO_SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    getCustomerDetail(originalText);
  }, [props.location.pathname]);

  const getCustomerDetail = async (email) => {
    try {
      let formModel = {
        email: email,
      };
      await httpClient
        .post(CUSTOMER.GET_CUSTOMER, formModel)
        .then((res) => {
          if (res.status === 201) {
            setCustomer(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    values["status"] = "confirm";
    try {
      await httpClient
        .put(`${CUSTOMER.UPDATE_CUSTOMER}/${customer.customer_id}`, values)
        .then((res) => {
          if (res.status === 200) {
            setSubmit(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="signup-container">
        {submit ? (
          <div className="d-flex flex-column justify-content-center">
            <h2 className="text-white">Profile Updated Successfully</h2>
            <h5 className="mt-4 text-white">
              Please go to the login page and sign in with your credentials
            </h5>
          </div>
        ) : (
          <div className="col-md-6 mt-5 text-white ">
            <div className="LogoMain text-center">
              <img src={Logo} alt="" />
            </div>
            <h5 className="m-3 text-white text-center">
              Welcome {customer.firstname}
            </h5>
            <div>
              <p className="text-white text-center mt-3">
                Please complete the profile details below
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group mb-3 col-6">
                  <label>Country</label>
                  <input
                    required
                    placeholder=""
                    className="form-control "
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3 col-6">
                  <label>State</label>
                  <input
                    required
                    placeholder=""
                    className="form-control "
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3 col-6">
                  <label>City</label>
                  <input
                    required
                    placeholder=""
                    className="form-control "
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3 col-6">
                  <label>Phone Number</label>
                  <input
                    required
                    type="number"
                    placeholder=""
                    className="form-control"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3 col-6">
                  <label>Password</label>
                  <input
                    required
                    placeholder=""
                    className="form-control "
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3 col-6">
                  <label>Post Code</label>
                  <input
                    required
                    placeholder=""
                    className="form-control "
                    name="postcode"
                    value={values.postcode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row" />
              <div className="row">
                <div className="form-group mb-3 col-12">
                  <label>Address</label>
                  <textarea
                    required
                    placeholder=""
                    className="form-control "
                    name="default_address"
                    value={values.default_address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-around mt-5">
                <Button
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#f09e38" }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Profile;

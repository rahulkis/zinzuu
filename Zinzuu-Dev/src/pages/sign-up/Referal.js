import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { referalEmail } from "../common/CommonFunction";
import Logo from "../../logo_555.jpg";
import Footer from "../common/Footer";

function Referal() {
  const [values, setValues] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    referalEmail(values);
    setSubmit(true);
  };
  return (
    <>
      {submit ? <Redirect to="/customer/welcome" /> : null}
      <div className="signup-container">
        <div className="col-md-4 mt-5">
          <div className="LogoMain text-center">
            <img src={Logo} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="signupHeader">
              <div className="LogoDiscription text-white text-center">
                <p className="font-weight-bold">
                  Welcome to our VIP Club. Please refer a friend..
                </p>
              </div>
              <div className="mt-3">
                <div className="form-group mb-3">
                  <label className="text-blue-gray">First Name</label>
                  <input
                    required
                    placeholder="Name"
                    className="form-control "
                    name="name"
                    value={values.name}
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
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Message</label>
                  <textarea
                    required
                    placeholder="messate "
                    className="form-control "
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <Button
                  className="w-100 text-dark"
                  style={{ backgroundColor: "#f09e38" }}
                  type="submit"
                >
                  Refer a Friend
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

export default Referal;

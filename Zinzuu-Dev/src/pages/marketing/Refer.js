import React, { useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { referalEmail } from "../common/CommonFunction";

function Refer() {
  const [values, setValues] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  const  newObj = {
      name: "",
      email: "",
      msg: "",
    };

  await referalEmail(values);
    setValues(newObj);
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading">
            <h2 className="yoo-uikits-title">Refer a Friend</h2>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  <div className="yoo-card-heading-left">
                    <h2 className="yoo-card-title">
                      <span className="yoo-card-title-icon yoo-blue-bg">
                        <ion-icon name="share-social-outline" />
                      </span>
                      Refer a friend
                    </h2>
                  </div>
                </div>
                <div className="yoo-card-body d-flex justify-content-center">
                  <div className="col-md-5">
                    <div className="yoo-height-b30 yoo-height-lg-b15" />
                    <form onSubmit={handleSubmit} className="p-2">
                      <div>
                        <div className="form-group mb-3">
                          <label className="text-blue-gray">Name</label>
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
                            placeholder="message "
                            className="form-control "
                            name="message"
                            value={values.msg}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="text-center">
                          <button
                            className="btn btn-primary w-50"
                            style={{ marginTop: "20px" }}
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="yoo-height-b15 yoo-height-lg-b15" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Refer;

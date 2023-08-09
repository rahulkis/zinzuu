import React, { useState } from "react";
import { ToastsStore } from "react-toasts";
import { SEND_EMAIL } from "../../constants/AppConstants";
import { httpClientEmail } from "../../constants/ApiEmail";
import { Modal, Button } from "react-bootstrap";

function SendMail(props) {
  const [values, setValues] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const newVal = {
      email: "",
      subject: "",
      body: "",
    };
    e.preventDefault();
    try {
      httpClientEmail
        .post(SEND_EMAIL, values)
        .then((res) => {
          if (res.status === 200) {
            ToastsStore.success("mail send successfully");
            setValues(newVal);
            handleClose();
          }
        })
        .catch((err) => {
          ToastsStore.error("something went wrong");
          setValues(newVal);
          handleClose();
        });
    } catch (err) {
      ToastsStore.error("something went wrong");
    }
  };
  const handleClose = () => {
    props.close(false);
  };
  return (
    <div className="container">
      <Modal
        show={props.openModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Send Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12 mb-3">
                <input
                  required
                  type="email"
                  placeholder="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  required
                  placeholder="subject"
                  className="form-control"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12 mb-3">
                <textarea
                  required
                  className="form-control"
                  rows="4"
                  onChange={handleChange}
                  placeholder="body"
                  name="body"
                  value={values.body}
                ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default SendMail;

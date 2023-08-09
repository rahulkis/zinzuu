import React, { useState } from "react";
import { ToastsStore } from "react-toasts";
import { Modal, Button } from "react-bootstrap";
import { SEND_SMS } from "../../constants/AppConstants";
import { httpClientSms } from "../../constants/ApiSMS";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function SendSMS(props) {
  const [msg, setMsg] = useState(null);
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phone) {
      const formModal = {
        phoneNumber: phone,
        message: msg,
      };
      try {
        httpClientSms
          .post(SEND_SMS, formModal)
          .then((res) => {
            if (res.status === 200) {
              ToastsStore.success("message send successfully");
              handleClearInput();
              props.close(false);
            }
          })
          .catch((err) => {
            ToastsStore.error("something went wrong");
            handleClearInput();
            props.close(false);
          });
      } catch (err) {
        ToastsStore.error("something went wrong");
      }
    } else {
      setError(true);
    }
  };
  const handleClose = () => {
    handleClearInput();
    props.close(false);
  };

  const handleClearInput = () => [
    setPhone(null),
    setMsg(null),
    setError(false),
  ];

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
            <Modal.Title>Send SMS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12 mb-3">
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    className: "form-control w-100",
                  }}
                  country={"us"}
                  value={phone}
                  onChange={(e) => setPhone(e)}
                />
              </div>
              {error && (
                <div className="text-danger col-md mb-1">
                  Please fill out this field
                </div>
              )}
              <div className="col-md-12">
                <textarea
                  required
                  className="form-control"
                  rows="4"
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="message"
                  name="msg"
                  value={msg}
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

export default SendSMS;

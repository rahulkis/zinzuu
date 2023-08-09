import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function GenerateQr(props) {
  const [value, setValue] = useState("");

  const handleClose = () => {
    props.close(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("value", value);
    setValue('')
    handleClose()
    window.open("/qr-image");
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
            <Modal.Title>Generate Qr</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12 mb-3">
                <input
                  required
                  type="url"
                  placeholder="url"
                  className="form-control"
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default GenerateQr;

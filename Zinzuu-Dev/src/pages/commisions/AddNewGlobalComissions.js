import React from "react";
import { Modal } from "react-bootstrap";

function AddNewGlobalComissions(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.close()
  };
  return (
    <>
      <div>
        <Modal
          show={props.open}
          onHide={props.close}
          //   backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> Add Global Comissions</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <div className="form-group mb-3">
                <label className="text-blue-gray">Level 1</label>
                <input
                  required
                  className="form-control "
                  placeholder="comission"
                  name="level1"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label className="text-blue-gray">Level 2</label>
                <input
                  required
                  className="form-control "
                  placeholder="comission"
                  name="level2"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div>
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default AddNewGlobalComissions;

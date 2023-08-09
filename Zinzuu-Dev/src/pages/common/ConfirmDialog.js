import React from "react";
import { Modal, Container, Button } from "react-bootstrap";

function ConfirmDialog(props) {
  return (
    <>
      <Container>
        <Modal
          show={props.openDialog}
          onHide={props.closeDialog}
          //   backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-danger text-white"
              onClick={() => props.onConfirm()}
            >
              Delete
            </Button>
            <Button
              className="bg-primary text-white"
              onClick={() => props.closeDialog()}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default ConfirmDialog;

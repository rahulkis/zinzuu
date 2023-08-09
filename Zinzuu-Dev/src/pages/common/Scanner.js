import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Modal, Container } from "react-bootstrap";

function Scanner(props) {
  const [isWebCamAvailabel, setIsWebCamAvailabel] = useState(true);
  // eslint-disable-next-line
  useEffect(() => {
    navigator.getUserMedia =
      navigator.getUserMedia || // use the proper vendor prefix
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { video: true },
        function () {
          setIsWebCamAvailabel(true);
        },
        function () {
          setIsWebCamAvailabel(false);
        }
      );
    } else {
      setIsWebCamAvailabel(false);
    }
  });

  const handleClose = () => {
   props.close();
  };

  const handleInput = (err, res) => {
    if (res) {    
      props.input(res.text);
      handleClose()
    }
  };
  return (
    <Container>
      <Modal
        show={props.open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="modalsignup"
      >
        <Modal.Header closeButton>
          <Modal.Title> Scan UPC</Modal.Title>
        </Modal.Header>
        {isWebCamAvailabel ? (
          <Modal.Body>
            <>
              <BarcodeScannerComponent
                width={470}
                height={470}
                onUpdate={(err, result) => handleInput(err, result)}
              />
            </>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <div className="text-danger"> Webcam is not available.</div>
          </Modal.Body>
        )}
      </Modal>
    </Container>
  );
}

export default Scanner;

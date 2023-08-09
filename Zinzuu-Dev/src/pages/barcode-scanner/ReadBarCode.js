import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Modal, Button } from "react-bootstrap";

function ReadBarCode(props) {
  const [data, setData] = useState(null);
  const [isWebCamAvailabel, setIsWebCamAvailabel] = useState(false);

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
  }, []);

  const handleClose = () => {
    setData(null);
    props.close(false);
  };

  const handleInput = (err, res) => {
    if (res) {
      setData(res.text);
    }
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
        <Modal.Header closeButton>
          <Modal.Title> {data ? "Result" : "Scan Code"}</Modal.Title>
        </Modal.Header>
        {isWebCamAvailabel ? (
          <Modal.Body>
            <>
              {data ? (
                <p>{data}</p>
              ) : (
                <BarcodeScannerComponent
                  width={470}
                  height={470}
                  onUpdate={(err, result) => handleInput(err, result)}
                />
              )}
            </>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <div className="text-danger"> Web cam is not availabel.</div>
          </Modal.Body>
        )}
        {data && (
          <Modal.Footer>
            <Button variant="primary" onClick={() => setData(null)}>
              Scan New
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </div>
  );
}

export default ReadBarCode;

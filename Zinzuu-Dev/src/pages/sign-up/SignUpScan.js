import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import "../../template/assets/css/signup.css";

function SignUpScan(props) {
  // eslint-disable-next-line
  const [data, setData] = useState(null);
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

  const handleInput = (err, res) => {
    if (res) {
      setData(res.text);
      console.log(res.text);
      props.history.push("/customer/signup");
    }
  };

  return (
    <>
      <div>
        <Modal show={"true"} centered>
          <Modal.Header>
            <Modal.Title> Scan Code</Modal.Title>
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
              <div className="text-danger"> Web cam is not availabel.</div>
            </Modal.Body>
          )}
        </Modal>
      </div>
    </>
  );
}

export default SignUpScan;

import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { sendThanksEmail } from "../common/CommonFunction";
import FileBase64 from "react-file-base64";
import axios from "axios";

const options = [
  { value: "john", label: "John" },
  { value: "jack", label: "Jack" },
  { value: "mack", label: "Mack" },
];

function LoginScan(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const handleChange = (selectedOption) => {
    // setSelectedOption(selectedOption);
  };
  const handleClose = () => {
    // setOpenModal(false);
  };
  const handleInput = (res) => {
    // setData(res);
    handleClose();
  };

  const handleReceiptUpload = async (file) => {
    try {
      setIsLoading(true);
      const UID = Math.round(1 + Math.random() * (1000000 - 1));
      const fileExt = file[0].type.split("/");
      const imgObj = {
        fileExt: fileExt[1],
        imageID: UID,
        folder: UID,
        img: file[0].base64,
      };
      await axios
        .post(
          "https://cre0q1camg.execute-api.us-east-2.amazonaws.com/zinzuu-dev-api/zinzuu-upload-image",
          imgObj
        )
        .then((res) => {
          handleReadData(`${UID}.${fileExt[1]}`);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      // showErrorToaster(error);
    }
  };

  const handleReadData = async (data) => {
    try {
      await axios
        .post(
          "https://nqtxlib4od.execute-api.us-east-2.amazonaws.com/zinzuu-dev-api/zinzuu-ocr",
          { img: data }
        )
        .then((res) => {
          setReceipt(res.data.body);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    const user = localStorage.getItem("username");
    sendThanksEmail(user);
    props.history.push("/login/welcome");
  };

  return (
    <>
      <div className="signup-container">
        <Card style={{ width: "42%" }}>
          <div>
            <Card.Header className="text-center">
              Scan & Upload Receipt
            </Card.Header>
            <Card.Body>
              {receipt && (
                <div>
                  <Card.Text>Uploaded Receipt</Card.Text>
                  <p className=" p-1 font-weight-bold mt-3">
                    <span> {receipt}</span>
                  </p>
                </div>
              )}
              <div className="">
                <div className="">
                  <div className="font-weight-bold">Upload Receipt</div>
                  <FileBase64 multiple={true} onDone={handleReceiptUpload} />
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="signup-create-account w-100 d-flex justify-content-end ">
                {receipt && (
                  <div>
                    <Button onClick={() => handleSubmit()}>
                     Submit
                    </Button>
                  </div>
                )}
              </div>
            </Card.Footer>
          </div>
        </Card>
        {isLoading && (
          <div className="loader">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LoginScan;

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { sendThanksEmail, sendEmail } from "./CommonFunction";
import { httpClient } from "../../constants/ApiApp";
import { CUSTOMER, RECEIPT,CRYPTO_SECRET_KEY } from "../../constants/AppConstants";
import FileBase64 from "react-file-base64";
import axios from "axios";
import CryptoJS from "crypto-js";
import { Redirect } from "react-router";
import Logo from "../../logo_555.jpg";

function UploadReceipt(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState("");
  const [customer, setCustomer] = useState(false);

  useEffect(() => {
    const cust = JSON.parse(localStorage.getItem("customer"));
    if (cust) {
      setCustomer(cust);
    }
  }, []);

  const handleReceiptUpload = async (file) => {
    try {
      setIsLoading(true);
      const UID = Math.round(1 + Math.random() * (1000000 - 1));
      const fileExt = file[0].type.split("/");
      setImage(`${UID}.${fileExt[1]}`);
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
    setIsLoading(true);
    if (customer) {
      uploadReceipt(customer.customer.customer_id);
      sendThanksEmail(customer.customer.email, customer.customer.firstname);
      setSubmit(true);
      setIsLoading(false);
    } else {
      const val = props.values;
      try {
        let formModel = {
          firstname: val.firstName,
          lastname: val.lastName,
          email: val.email,
          customer_type: props.customerType,
          status: "pending",
        };
        httpClient
          .post(CUSTOMER.REGISTER_CUSTOMER, formModel)
          .then((result) => {
            if (result.status === 201) {
              let encryptedData = CryptoJS.AES.encrypt(
                result.data.email,
                CRYPTO_SECRET_KEY
              ).toString();
              sendEmail(val.firstName, val.email, encryptedData);
              setSubmit(true);
              uploadReceipt(result.data.customer_id);
              setIsLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
          });
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
  };

  const uploadReceipt = async (customer_id) => {
    try {
      let formData = {
        customer_id: customer_id,
        ocr_data: receipt,
        image_link: `https://zinzuu-text-ract.s3.us-east-2.amazonaws.com/${image}`,
      };

      await httpClient
        .post(RECEIPT.UPLOAD_RECEIPT, formData)
        .then((res) => {
          if (res.status === 201) {
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {submit && <Redirect to="/customer/welcome" />}
      <div className="signup-container ">
        <div className="col-md-4 mt-5">
          <div className="LogoMain text-center">
            <img src={Logo} alt="" />
          </div>
          <div className="text-white mt-4 text-center">
            <h5 className="text-white "> Scan & Upload Receipt</h5>
            <div>
              <p className="font-weight-bold mb-3 mt-3">
                Please point your phone at the receipt and press the “Take”
                button. If the receipt does not “fit” in the viewing area
                reposition the camera to take second picture.
              </p>
              <div className="d-flex justify-content-around">
                <div
                  className="btn btn-primary"
                  style={{ backgroundColor: "#f09e38" }}
                >
                  <label>
                    Take Picture
                    <p className="custom-control-input">
                      <FileBase64
                        multiple={true}
                        onDone={handleReceiptUpload}
                      />
                    </p>
                  </label>
                </div>
              </div>
            </div>
            {receipt && (
              <div>
                <div className="mt-3">
                  <h5 className="text-white">Receipt Uploaded Successfully</h5>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  {customer ? (
                    <Button
                      className="w-100 text-dark"
                      style={{ backgroundColor: "#f09e38" }}
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      className="w-100 text-dark"
                      style={{ backgroundColor: "#f09e38" }}
                      onClick={() => handleSubmit()}
                    >
                      Create account
                    </Button>
                  )}
                </div>
              </div>
            )}
            {isLoading && (
              <div className="loader">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadReceipt;

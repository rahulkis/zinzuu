import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import CryptoJS from "crypto-js";
import { Button } from "react-bootstrap";
import { ToastsStore } from "react-toasts";
import {
  CRYPTO_SECRET_KEY,
  SEND_SMS,
  LOGS,
} from "../../../constants/AppConstants";
import { httpClientSms } from "../../../constants/ApiSMS";
import { httpClient } from "../../../constants/ApiApp";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  if (userToken && userToken[0].success === true) return userToken[1];
}

function SendSMS(props) {
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState(false);
  const [isProcessing, setProcessing] = useState(false);
  const token = getToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!phone) {
        setError(true);
      } else {
        setProcessing(true);
        const data = {
          phone_number: phone,
          template_id: props.templateData[0]?.template_id,
        };
        const encryptedData = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          CRYPTO_SECRET_KEY
        ).toString();

        const formModal = {
          phoneNumber: phone,
          message: `Please click on the below link to view the template..
          
          ${window.location.origin.toString()}/partner/marketing/templates/${encryptedData}`,
        };

        httpClientSms
          .post(SEND_SMS, formModal)
          .then((res) => {
            if (res.status === 200) {
              ToastsStore.success("message sent successfully");
              props.close();
              setProcessing(false);
              handleSMSLogs();
            }
          })
          .catch((err) => {
            ToastsStore.error("something went wrong");
            setProcessing(false);
            props.close();
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSMSLogs = async () => {
    try {
      const formModal = {
        template_id: props.templateData[0]?.template_id,
        customer_id: token.vip_id,
        phone_number: phone,
      };
      await httpClient
        .post(LOGS.SMS_LOG, formModal)
        .then((res) => {
          if (res.status === 201) {
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("something went wrong");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="yoo-height-b30 yoo-height-lg-b15" />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="form-group mb-3">
              <label className="text-blue-gray">Phone Number *</label>
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
          </div>
          {error && (
            <div className="text-danger col-md mb-1">
              Please fill out this field
            </div>
          )}
        </div>
        <div className="d-flex justify-content-end">
          {isProcessing ? (
            <Button variant="success">Sending</Button>
          ) : (
            <Button variant="success" type="submit">
              Send
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default SendSMS;

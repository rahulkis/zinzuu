import React, { useState } from "react";
import { ToastsStore } from "react-toasts";
import { SEND_EMAIL, LOGS } from "../../../constants/AppConstants";
import { httpClientEmail } from "../../../constants/ApiEmail";
import { httpClient } from "../../../constants/ApiApp";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  if (userToken && userToken[0].success === true) return userToken[1];
}

function SendEmail(props) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [isProcessing, setProcessing] = useState(false);
  const token = getToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = props.templateData.map((temp) => {
      return temp.template_data;
    });
    const formData = {
      email: email,
      subject: subject,
      body: newArray.join("\n"),
    };
    setProcessing(true);
    try {
      httpClientEmail
        .post(SEND_EMAIL, formData)
        .then((res) => {
          if (res.status === 200) {
            ToastsStore.success("Email sent successfully");
            props.close();
            handleEmailLogs();
            setProcessing(false);
          }
        })
        .catch((err) => {
          ToastsStore.error("something went wrong");
          setProcessing(false);
          props.close();
        });
    } catch (err) {
      ToastsStore.error("something went wrong");
      setProcessing(false);
    }
  };

  const handleEmailLogs = async () => {
    try {
      const newArray = props.templateData.map((temp) => {
        return temp.template_id;
      });

      const formModal = {
        template_id: newArray.join(","),
        customer_id: token.vip_id,
        email: email,
      };
      await httpClient
        .post(LOGS.EMAIL_LOG, formModal)
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
      <div>
        <div className="yoo-height-b30 yoo-height-lg-b15" />
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="text-blue-gray">Email</label>
            <input
              required
              className="form-control "
              placeholder="email"
              name="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label className="text-blue-gray">Subject</label>
            <input
              required
              className="form-control "
              placeholder="subject"
              name="subject"
              defaultValue={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label className="text-blue-gray">Body</label>
            <div
              style={{
                backgroundColor: "#f0f0f0",
                maxHeight: "500px",
                minHeight: "200px",
                padding: "10px",
                borderRadius: "10px",
                overflow: "scroll",
              }}
            >
              {props.templateData?.map((data, i) => (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: data.template_data,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            {!isProcessing && (
              <button className="btn btn-success" type="submit">
                Send
              </button>
            )}
            {isProcessing && (
              <button className="btn btn-success" type="button">
                Sending...
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default SendEmail;

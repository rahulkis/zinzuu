import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { ToastsStore } from "react-toasts";
import { CRYPTO_SECRET_KEY, TEMPLATES } from "../../constants/AppConstants";
import { httpClient } from "../../constants/ApiApp";

function TemplateTracking(props) {
  const [templateData, setTemplateData] = useState("");

  useEffect(() => {
    let params = props.match.params.id;
    const bytes = CryptoJS.AES.decrypt(params, CRYPTO_SECRET_KEY);
    const decryptedParams = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptedParams);
    handleGetRequest(decryptedParams.template_id);
    handleTrackTemplate(decryptedParams);
  }, [props.match.params.id]);

  const handleGetRequest = async (id) => {
    try {
      await httpClient
        .get(TEMPLATES.GET_TEMPLATE_BY_ID + id)
        .then((res) => {
          if (res.status === 200) {
            setTemplateData(res.data.template_data);
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Something went wrong");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrackTemplate = async (data) => {
    try {
      await httpClient
        .post(TEMPLATES.TRACK_TEMPLATE, data)
        .then((res) => {
          console.log(res);
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
      <div className="d-flex justify-content-center">
        <div
          className="vh-100 col-md-8"
          style={{
            overflow: "hidden",
            padding: "6px 20px",
            marginBottom: "14px",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: templateData }} />
        </div>
      </div>
    </>
  );
}

export default TemplateTracking;

import React, { useState, useEffect } from "react";
import { ToastsStore } from "react-toasts";
import { httpClient } from "../../../constants/ApiApp";
import { TEMPLATES } from "../../../constants/AppConstants";

function ViewTemplate(props) {
  const [templateData, setTemplateData] = useState("");

  useEffect(() => {
    let id = props.match.params.id;
    if (id) {
      handleGetRequest(id);
    }
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

  return (
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
  );
}

export default ViewTemplate;

import React, { useEffect, useState } from "react";
import { ToastsStore } from "react-toasts";
import { httpClient } from "../../constants/ApiApp";
import { QR } from "../../constants/AppConstants";

function QrTracking(props) {
  const [params, setParams] = useState("");

  useEffect(() => {
    let id = props.match.params.id;
    setParams(id);
    handleGetRequest(id);
  }, []);

  const handleGetRequest = async (id) => {
    try {
      await httpClient
        .get(QR.GET_QR_DETAIL_BY_ID + id)
        .then((res) => {
          console.log(res);
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
    <>
      <div className="signup-container align-items-center text-center">
        <div>
          <h3 className="text-white d-flex m-3">
            Tracking id : <h2 className="text-white"> {params}</h2>
          </h3>
        </div>
      </div>
    </>
  );
}

export default QrTracking;

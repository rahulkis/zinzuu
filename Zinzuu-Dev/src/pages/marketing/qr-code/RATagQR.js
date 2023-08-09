import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { ToastsStore } from "react-toasts";
import axios from "axios";
import { httpClient } from "../../../constants/ApiApp";
import { QR,IMAGE_BUCKET_URL } from "../../../constants/AppConstants";

function RATagQR(props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const result = Math.random()
      .toString(36)
      .substring(2, 20);
    setCode(result);
    setUrl(`${window.location.origin.toString()}/partner/qr/${result}`);
  }, []);

  const handleSaveData = async (img) => {
    try {
      const formData = {
        customer_id: "1",
        name: name,
        qr_data: url,
        unique_code: code,
        qr_image: `${IMAGE_BUCKET_URL}${img}.png`,
        type: "RA Tag",
      };
      await httpClient
        .post(QR.GENERATE_QR, formData)
        .then((res) => {
          if (res.status === 201) {
            ToastsStore.success(res.data.message);
            props.handleClose();
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Something went wrong.");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const canvas = document.getElementById("ra-tag");
    const pngUrl = canvas.toDataURL("image/png");
    try {
      const UID = Math.round(1 + Math.random() * (1000000 - 1));
      const imgObj = {
        fileExt: "png",
        imageID: UID,
        folder: UID,
        img: pngUrl,
      };
      await axios
        .post(
          "https://cre0q1camg.execute-api.us-east-2.amazonaws.com/zinzuu-dev-api/zinzuu-upload-image",
          imgObj
        )
        .then((res) => {
          if (res.status === 200) {
            handleSaveData(UID);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <div className="yoo-height-b15 yoo-height-lg-b15" />
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="text-blue-gray">Name</label>
              <input
                required
                className="form-control "
                placeholder="name"
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="text-blue-gray">Tag</label>
              <input
                readOnly
                className="form-control "
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="yoo-height-b15 yoo-height-lg-b15" />
            <div className="text-center">
              <QRCode id="ra-tag" value={url} size="300" includeMargin={true} />
            </div>
            <div className="yoo-height-b15 yoo-height-lg-b15" />
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RATagQR;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import QRCode from "qrcode.react";
import { ToastsStore } from "react-toasts";
import axios from "axios";
import { httpClient } from "../../../constants/ApiApp";
import { QR } from "../../../constants/AppConstants";
import "../../../template/assets/css/pages/couponQr.css";

function CouponQr(props) {
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [coupon, setCoupon] = useState("");
  const [generate, setGenerate] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerate(true);
  };

  const handleSubmit=async()=>{
    const canvas = document.getElementById("coupon-qr");
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
  }

  const handleSaveData = async (img) => {
    try {
      const formData = {
        customer_id: "1",
        name: name,
        qr_data: coupon,
        qr_image: `https://zinzuu-text-ract.s3.us-east-2.amazonaws.com/${img}.png`,
        type: "Coupon",
        discount:discount,
        expiry_date:startDate
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

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="col-md-8">
          <form onSubmit={handleGenerate}>
            <div className="row " style={{ marginTop: "20px" }}>
              <div className="yoo-height-b15 yoo-height-lg-b15" />
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Name</label>
                  <input
                    required
                    className="form-control "
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Coupon Code</label>
                  <input
                    required
                    className="form-control "
                    placeholder="coupon"
                    name="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Discount %</label>
                  <input
                    required
                    type="number"
                    className="form-control "
                    placeholder="discount"
                    name="discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="text-blue-gray">Valid till</label>
                  <div className="coupon-qr-wrapper">
                    <DatePicker
                      clasName="p-1"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {generate ? (
              <div className="text-center">
                <QRCode
                  id="coupon-qr"
                  includeMargin={true}
                  value={coupon}
                  size="300"
                />
              </div>
            ) : (
              <div>
                <div className="yoo-height-b15 yoo-height-lg-b15" />

                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary w-100" type="submit">
                    Generate
                  </button>
                </div>
              </div>
            )}
          </form>
          {generate && (
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary w-100" onClick={()=>handleSubmit()}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CouponQr;

import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";

function QrImage() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const val = localStorage.getItem("value");
    setValue(val);
  },[]);
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div style={{ justifyContent: "center", display: "flex" }}>
          <QRCode value={value} size="300" />
        </div>
      </div>
    </div>
  );
}

export default QrImage;

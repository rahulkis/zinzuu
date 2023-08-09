import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

function ComissionsReport() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading">
            <h2 className="yoo-uikits-title">Comissions Reports</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ComissionsReport;

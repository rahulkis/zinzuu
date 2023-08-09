import React, { useEffect, useState } from "react";
import Header from "../../../components/header";
import Sidebar from "../../../components/sidebar";
import Footer from "../../../components/footer";
import { Modal, Container, TabContainer, Tab, Tabs } from "react-bootstrap";
import RegisterQr from "./RegisterQr";
import RATagQR from "./RATagQR";
import CouponQr from "./CouponQr";
import { httpClient } from "../../../constants/ApiApp";
import { QR } from "../../../constants/AppConstants";
import moment from "moment";

function GenerateQrCode() {
  const [open, setOpen] = useState(false);
  const [qrList, setQrList] = useState([]);

  useEffect(() => {
    getQrList();
  }, []);

  const getQrList = async () => {
    try {
      await httpClient
        .get(QR.GET_QR_LIST)
        .then((res) => {
          if (res.status === 200) {
            setQrList(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    getQrList();
    setOpen(false);
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading">
            <h2 className="yoo-uikits-title">QR-Code</h2>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  <div className="yoo-card-heading-left">
                    <h2 className="yoo-card-title">
                      <span className="yoo-card-title-icon yoo-blue-bg">
                        <ion-icon name="browsers" />
                      </span>
                      Generate QR-Code
                    </h2>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => setOpen(true)}
                  >
                    Generate New
                  </button>
                </div>
                <div className="yoo-card-body">
                  <div className="">
                    <div>
                      <div className="yoo-height-b15 yoo-height-lg-b15" />
                      <div className="yoo-table yoo-style1 yoo-type2">
                        {qrList.length > 0 && (
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Data</th>
                                <th>Image</th>
                                <th>Type</th>
                                <th>Discount</th>
                                <th>Validity</th>
                              </tr>
                            </thead>
                            {qrList.map((qr, i) => (
                              <tbody key={i}>
                                <tr>
                                  <td>{qr.name} </td>
                                  <td>{qr.qr_data} </td>
                                  <td className="text-center">
                                    <img
                                      src={qr.qr_image}
                                      alt=""
                                      width="200px"
                                    />
                                  </td>
                                  <td>{qr.type} </td>
                                  <td>
                                    {qr.discount ? qr.discount + "%" : ""}{" "}
                                  </td>
                                  <td style={{ width: "10%" }}>
                                    {qr.expiry_date
                                      ? moment(qr.expiry_date).format(
                                          "MMM Do YY"
                                        )
                                      : "Permanent"}
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        )}
                        <div className="yoo-height-b15 yoo-height-lg-b15" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <Modal
            show={open}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="xl"
          >
            <Modal.Header closeButton>
              <Modal.Title> Generate QR</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TabContainer>
                <Tabs
                  defaultActiveKey="register"
                  className="w-100 d-flex justify-content-around"
                >
                  <Tab eventKey="register" title="Register">
                    <RegisterQr handleClose={handleClose} />
                  </Tab>
                  <Tab eventKey="ratag" title="RA Tag">
                    <RATagQR handleClose={handleClose} />
                  </Tab>
                  <Tab eventKey="coupon" title="Coupon">
                    <CouponQr handleClose={handleClose} />
                  </Tab>
                </Tabs>
              </TabContainer>
            </Modal.Body>
          </Modal>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default GenerateQrCode;

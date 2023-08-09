import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import Scanner from "../common/Scanner";

function UPCReader() {
  const [openScanner, setOpenScanner] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => {
    setOpenScanner(false);
  };

  const handleInput = (res) => {
    const obj = [...data];
    obj.push(res);
    setData(obj);
    handleClose();
  };

  const handleDelete = (pro) => {
    const newData = [...data];
    const index = newData.indexOf(pro);
    if (index > -1) {
      newData.splice(index, 1);
    }
    setData(newData);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading">
            <h2 className="yoo-uikits-title">UPC Reader</h2>
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
                      Read Barcode
                    </h2>
                  </div>
                </div>
                <div className="yoo-card-body">
                  <div>
                    <div>
                      <div className="yoo-height-b15 yoo-height-lg-b15" />
                      <div className="yoo-table-heading yoo-style1 yoo-padd-lr-20">
                        <div className="yoo-table-heading-left">
                          <form
                            action="/"
                            className="yoo-search yoo-style1 yoo-search-md"
                          >
                            <input
                              type="text"
                              placeholder="Search..."
                              className="yoo-search-input"
                            />
                            <button className="yoo-search-submit">
                              <ion-icon name="search" />
                            </button>
                          </form>
                        </div>
                        <div className="yoo-table-heading-right">
                          <ul className="yoo-table-heading-btn-list yoo-mp0">
                            <li>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-ripple="ripple"
                                data-ripple-color="#fff"
                                onClick={() => setOpenScanner(true)}
                              >
                                Scan New
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {data.length > 0 && (
                        <div className="yoo-table yoo-style1 yoo-type2">
                          <table
                            className="table table-bordered"
                            style={{ marginTop: "20px" }}
                          >
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>UPC Code</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            {data.map((pro, i) => (
                              <tbody key={i}>
                                <tr>
                                  <td>{i + 1}</td>
                                  <td>{pro}</td>
                                  <td>
                                    <Button
                                      className="btn-sm btn-danger"
                                      onClick={(e) => handleDelete(pro)}
                                    >
                                      Remove
                                    </Button>
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                      )}
                    </div>
                    <div className="yoo-height-b15 yoo-height-lg-b15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scanner open={openScanner} close={handleClose} input={handleInput} />
        <Footer />
      </div>
    </>
  );
}

export default UPCReader;

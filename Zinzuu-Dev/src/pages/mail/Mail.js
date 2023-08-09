import React, { useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import SendMail from "./SendMail";

function Mail() {
    const [show, setShow] = useState(false);

    const handleClose=()=>{
        setShow(false)
    }
  return (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        <div className="container">
          <div className="yoo-uikits-heading">
            <h2 className="yoo-uikits-title">Email</h2>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  <div className="yoo-card-heading-left">
                    <h2 className="yoo-card-title">
                      <span className="yoo-card-title-icon yoo-blue-bg">
                        <ion-icon name="browsers"></ion-icon>
                      </span>
                      Send Email
                    </h2>
                  </div>
                </div>
                <div className="yoo-card-body">
                  <div>
                    <div>
                      <div className="yoo-height-b15 yoo-height-lg-b15"></div>
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
                              <ion-icon name="search"></ion-icon>
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
                                onClick={() => setShow(true)}
                              >
                                Create New
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SendMail openModal={show} close={handleClose}/>
        <Footer />
      </div>
    </>
  );
}

export default Mail;

import React, { useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import AddNewGlobalComissions from './AddNewGlobalComissions'

function GlobalCommisions() {
  const [addNew, setAddNew] = useState(false);

  const handleClose = () => {
    setAddNew(false);
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading">
            <h2 className="yoo-uikits-title">Global Comission Rates</h2>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-body">
                  <div className="">
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
                        <button
                          className="btn btn-primary"
                          onClick={() => setAddNew(true)}
                        >
                          Add New
                        </button>
                      </div>
                      <div className="yoo-height-b15 yoo-height-lg-b15" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNewGlobalComissions open={addNew} close={handleClose} />
      <Footer />
    </>
  );
}

export default GlobalCommisions;

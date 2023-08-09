import React, { useState, Component } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

export default class Emails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailsData: [
        {
          id: 1,
          date: "January 21, 2021",
          to: "smith23@yopmail.com",
          type: "Sent",
          cost: 0.25,
          status: "Success",
        },
        {
          id: 1,
          date: "January 23, 2021",
          to: "norenJohn@yopmail.com",
          type: "Sent",
          cost: 0.25,
          status: "Success",
        },
        {
          id: 1,
          date: "Fabruary 04, 2021",
          to: "vikasrana@yopmail.com",
          type: "reply",
          cost: 0.2,
          status: "Failed",
        },
        {
          id: 1,
          date: "Fabruary 10, 2021",
          to: "harry560@yopmail.com",
          type: "Sent",
          cost: 0.25,
          status: "Success",
        },
        {
          id: 1,
          date: "March 02, 2021",
          to: "nicolas07@yopmail.com",
          type: "reply",
          cost: 0.2,
          status: "Success",
        },
      ],
      show: false,
    };
  }
  componentDidMount() {}

  render() {
    let template;
    template = (
      <>
        <Header />
        <Sidebar />
        <div className="yoo-content yoo-style1">
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
          <div className="container">
            <div className="yoo-uikits-heading">
              <h2 className="yoo-uikits-title">Emails Report</h2>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="yoo-card yoo-style1">
                  <div className="yoo-card-body">
                    <div className="">
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
                        </div>
                        <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                        <div className="yoo-table yoo-style1 yoo-type2">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>To</th>
                                <th>cost</th>
                                <th>status</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {emailsData.map((el) => {
                                return (
                                  <tr>
                                    <td>{el.date}</td>
                                    <td>
                                      <div className="yoo-table-medias yoo-style1">
                                        <h2 className="yoo-media-title yoo-margin-bottom-0">
                                          {el.type}
                                        </h2>
                                      </div>
                                    </td>
                                    <td>
                                      <span className="yoo-base-color1">
                                        {el.to}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="yoo-line-1-2 yoo-base-color1">
                                        {el.cost}
                                      </div>
                                    </td>
                                    <td>
                                      {el.status == "success" && (
                                        <span className="badge badge-success">
                                          {el.tax_id}
                                        </span>
                                      )}
                                      {el.status == "failed" && (
                                        <span className="badge badge-warning">
                                          {el.tax_id}
                                        </span>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="yoo-height-b30 yoo-height-lg-b30"></div>
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
          <Footer />
        </div>
      </>
    );
    return template;
  }
}

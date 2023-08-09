import React, { Component } from "react";
import CustomerData from "../../data/customer.json";
import partner from "../../data/partner.json";
import sales from "../../data/sales.json";
import emailsData from "../../data/emailReports.json";
import smsData from "../../data/smsReports.json";
export class Customer extends Component {
  render() {
    let template;
    template = (
      <>
        <table
          className="table table-bordered"
          id="DashboardReport"
          key={"Customer"}
        >
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Total Purchase</th>
              <th className="yoo-arrow-wrap">Last Purchase</th>
              <th>Profile Completion</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {CustomerData.map((customer) => {
              let widthProgress = customer.profile_completion + "%";
              return (
                <tr key={customer.id}>
                  <td>
                    <div className="yoo-table-medias yoo-style1">
                      <h2 className="yoo-media-title yoo-margin-bottom-0">
                        <a href="/">{customer.customer_name}</a>
                      </h2>
                    </div>
                  </td>
                  <td>
                    <span className="yoo-base-color1">
                      {customer.currency}
                      {customer.total_purchase}
                    </span>
                  </td>
                  <td>
                    <span className="yoo-base-color1">
                      {customer.currency}
                      {customer.last_purchase}
                    </span>
                  </td>
                  <td>
                    <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                      <div className="yoo-progress-head">
                        <div className="yoo-progressbar-percentage">
                          {customer.profile_completion}%
                        </div>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar yoo-gray-bg"
                          role="progressbar"
                          style={{ width: widthProgress }}
                          aria-valuenow={customer.profile_completion}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-success">
                      {customer.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
    return template;
  }
}
export class Commissions extends Component {
  render() {
    let template;
    template = (
      <>
        <table
          className="table table-bordered"
          id="DashboardReport"
          key={"Commissions"}
        >
          <thead>
            <tr>
              <th>Gross</th>
              <th>Net</th>
              <th>Commissions</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((e) => {
              return (
                <tr key={e.id}>
                  <td>
                    <div className="yoo-line-1-2 yoo-base-color1">
                      ${e.gross}
                    </div>
                  </td>
                  <td>
                    <div className="yoo-line-1-2 yoo-base-color1">${e.net}</div>
                  </td>
                  <td>
                    <span className="yoo-base-color1">${e.commissions}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
    return template;
  }
}
export class Sales extends Component {
  render() {
    let template;
    template = (
      <>
        <table
          className="table table-bordered"
          id="DashboardReport"
          key={"Sales"}
        >
          <thead>
            <tr>
              <th>Gross</th>
              <th>Net</th>
              <th>Commissions</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((e) => {
              return (
                <tr key={e.id}>
                  <td>
                    <div className="yoo-line-1-2 yoo-base-color1">
                      ${e.gross}
                    </div>
                  </td>
                  <td>
                    <div className="yoo-line-1-2 yoo-base-color1">${e.net}</div>
                  </td>
                  <td>
                    <span className="yoo-base-color1">${e.commissions}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
    return template;
  }
}
export class Partner extends Component {
  render() {
    let template;
    template = (
      <>
        <table
          className="table table-bordered"
          id="DashboardReport"
          key={"Partner"}
        >
          <thead>
            <tr>
              <th>
                Registration Date
                <button
                  className="yoo-table-info-btn yoo-style1"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <ion-icon name="information-circle"></ion-icon>
                </button>
                <div className="dropdown-menu yoo-table-info-text">
                  Is it more important for something to be subscriber-defined or
                  to be compelling? Our technology takes the best features of
                  XForms and OWL.
                </div>
              </th>
              <th>Company Name</th>
              <th className="yoo-arrow-wrap">ID#</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Contact Person</th>
              <th>Tax ID</th>
              <th>T&C</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {partner.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.reg_date}</td>
                  <td>
                    <div className="yoo-table-medias yoo-style1">
                      <h2 className="yoo-media-title yoo-margin-bottom-0">
                        {el.company_name}
                      </h2>
                    </div>
                  </td>
                  <td>
                    <span className="yoo-base-color1">{el.id}</span>
                  </td>
                  <td>
                    <div className="yoo-line-1-2 yoo-base-color1">
                      {el.address}
                    </div>
                    <div className="yoo-font-size-13 yoo-base-color2"></div>
                  </td>
                  <td>
                    <span className="yoo-base-color1">{el.phone}</span>
                  </td>
                  <td>{el.email}</td>
                  <td>{el.contact_person}</td>
                  <td>
                    <span className="badge badge-success">{el.tax_id}</span>
                  </td>
                  <td>
                    <span className="badge badge-success">{el.t_and_c}</span>
                  </td>
                  <td>
                    <span className="badge badge-success">{el.role}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
    return template;
  }
}

export class Emails extends Component {
  render() {
    let template;
    template = (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: "180px" }}>Date</th>
              <th>Email</th>
              <th>Type</th>
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
                    <span className="yoo-base-color1">{el.to}</span>
                  </td>
                  <td>
                    <div className="yoo-table-medias yoo-style1">
                      <h2 className="yoo-media-title yoo-margin-bottom-0">
                        {el.type}
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="yoo-line-1-2 yoo-base-color1">
                      ${el.cost}
                    </div>
                  </td>
                  <td>
                    {el.status == "success" && (
                      <span className="badge badge-success">Success</span>
                    )}
                    {el.status == "failed" && (
                      <span className="badge badge-warning">Failed</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
    return template;
  }
}
export class SMS extends Component {
  render() {
    let template;
    template = (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: "180px" }}>Date</th>
              <th>Phone</th>
              <th>Type</th>
              <th>cost</th>
            </tr>
          </thead>
          <tbody>
            {smsData.map((el) => {
              return (
                <tr>
                  <td>{el.date}</td>
                  <td>
                    <span className="yoo-base-color1">{el.phone}</span>
                  </td>
                  <td>
                    <div className="yoo-table-medias yoo-style1">
                      <h2 className="yoo-media-title yoo-margin-bottom-0">
                        {el.type}
                      </h2>
                    </div>
                  </td>
                  <td>
                    <div className="yoo-line-1-2 yoo-base-color1">
                      ${el.cost}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
    return template;
  }
}

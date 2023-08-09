import React, {Component } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import partner from "../../data/partner.json";
import { Modal, Button } from "react-bootstrap";
import { API_PARTNER } from "../../constants/AppConstants";
import axios from "axios";

export default class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PartnerData: [],
      show: false,
    };
    // this.renderPartnerData();
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  componentDidMount() {
    this.setState({ PartnerData: partner });
    // this.renderPartnerData();
  }
  showModal = (e) => {
    e.preventDefault();
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  renderPartnerData = async () => {
    try {
      let res = await axios.get(API_PARTNER + "partner/get/all");
      let partnerResult = res.data;
      // this will re render the view with new data
      this.setState({
        PartnerData: partnerResult.result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleSearch = (e) => {
    const searchText = e.target.value;
    const data = [...partner];
    let newData = data.filter((partner) => {
      return (
        partner.email.includes(searchText) ||
        partner.phone.includes(searchText) ||
        partner.company_name.includes(searchText) ||
        partner.address.includes(searchText) ||
        partner.tax_id.includes(searchText) ||
        partner.contact_person.includes(searchText)||
        partner.role.includes(searchText)
      );
    });
    this.setState({ PartnerData: newData });
  };
  render() {
    let template;
    template = (
      <>
        <Header />
        <Sidebar />
        <div className="yoo-content yoo-style1">
          <div className="yoo-height-b30 yoo-height-lg-b30" />
          <div className="container">
            <div className="yoo-uikits-heading">
              <h2 className="yoo-uikits-title">Partner Report</h2>
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
                                onChange={this.handleSearch}
                              />
                              <button className="yoo-search-submit">
                                <ion-icon name="search" />
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="yoo-height-b15 yoo-height-lg-b15" />
                        <div className="yoo-table yoo-style1 yoo-type2">
                          <table className="table table-bordered">
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
                                    <ion-icon name="information-circle" />
                                  </button>
                                  <div className="dropdown-menu yoo-table-info-text">
                                    Is it more important for something to be
                                    subscriber-defined or to be compelling? Our
                                    technology takes the best features of XForms
                                    and OWL.
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
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.PartnerData.map((el) => {
                                return (
                                  <tr>
                                    <td>{el.reg_date}</td>
                                    <td>
                                      <div className="yoo-table-medias yoo-style1">
                                        <h2 className="yoo-media-title yoo-margin-bottom-0">
                                          {el.company_name}
                                        </h2>
                                      </div>
                                    </td>
                                    <td>
                                      <span className="yoo-base-color1">
                                        {el.id}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="yoo-line-1-2 yoo-base-color1">
                                        {el.address}
                                      </div>
                                      <div className="yoo-font-size-13 yoo-base-color2" />
                                    </td>
                                    <td>
                                      <span className="yoo-base-color1">
                                        {el.phone}
                                      </span>
                                    </td>
                                    <td>{el.email}</td>
                                    <td>{el.contact_person}</td>
                                    <td>
                                      <span className="badge badge-success">
                                        {el.tax_id}
                                      </span>
                                    </td>
                                    <td>
                                      <span className="badge badge-success">
                                        {el.t_and_c}
                                      </span>
                                    </td>
                                    <td>
                                      <span className="badge badge-success">
                                        {el.role}
                                      </span>
                                    </td>
                                    <td>
                                      <button
                                        className="yoo-table-action-btn yoo-style1"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <ion-icon name="ellipsis-horizontal" />
                                      </button>
                                      <div className="dropdown-menu">
                                        <a
                                          className="dropdown-item"
                                          onClick={this.showModal}
                                          data-id={el.id}
                                          href="/partner"
                                        >
                                          View
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          onClick={this.showModal}
                                          data-id={el.id}
                                          href="/partner"
                                        >
                                          Edit
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          onClick={this.showModal}
                                          data-id={el.id}
                                          href="/partner"
                                        >
                                          Delete
                                        </a>
                                      </div>
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
                <div className="yoo-height-b30 yoo-height-lg-b30" />
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30" />
          <Footer />
        </div>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton />
          <Modal.Body>
            <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-body">
                  <div className="tab-content">
                    <div className="yoo-profile-setting-container">
                      <div className="yoo-height-b45 yoo-height-lg-b45" />
                      <div className="yoo-height-b20 yoo-height-lg-b20" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          Profile Photo
                        </label>
                        <div className="yoo-form-field">
                          <div className="yoo-setting-profile-pic">
                            <img
                              src="/static/media/logo_555.36cd4226.jpg"
                              alt=""
                            />
                            <a href="/" className="yoo-profile-pic-edit-btn">
                              <ion-icon name="pencil" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="yoo-height-b25 yoo-height-lg-b25" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          Username
                        </label>
                        <div className="input-group form-group-sm">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value="ThemeBubble"
                          />
                        </div>
                      </div>
                      <div className="yoo-height-b25 yoo-height-lg-b25" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          First Name
                        </label>
                        <div className="input-group form-group-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value="Jhon"
                          />
                        </div>
                      </div>
                      <div className="yoo-height-b25 yoo-height-lg-b25" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          Last Name
                        </label>
                        <div className="input-group form-group-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value="Doe"
                          />
                        </div>
                      </div>
                      <div className="yoo-height-b25 yoo-height-lg-b25" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          Email
                        </label>
                        <div className="input-group form-group-sm">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value="Jhon Doe"
                          />
                        </div>
                      </div>
                      <div className="yoo-height-b20 yoo-height-lg-b20" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          Country
                        </label>
                        <div className="input-group form-group-sm">
                          <div className="yoo-select">
                            <select id="inputState" className="form-control">
                              <option selected="">United Kingdom</option>
                              <option>India</option>
                              <option>Austrilia</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="yoo-height-b25 yoo-height-lg-b25" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          Time Zone
                        </label>
                        <div className="input-group form-group-sm">
                          <div className="yoo-select">
                            <select id="inputState" className="form-control">
                              <option selected="">GMT-7 (USA & Canada)</option>
                              <option>GMT-6 (USA & Canada)</option>
                              <option>GMT-5 (USA & Canada)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="yoo-height-b25 yoo-height-lg-b25" />
                      <div className="yoo-form-field-wrap yoo-style1">
                        <label className="yoo-form-field-label yoo-type1">
                          Website
                        </label>
                        <div className="input-group form-group-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                            >
                              .com
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="yoo-height-b60 yoo-height-lg-b60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button variant="primary">Update</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    return template;
  }
}

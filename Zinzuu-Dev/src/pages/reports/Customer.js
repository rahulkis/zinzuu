import React, {Component} from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
import axios from 'axios';
import {API_PARTNER} from "../../constants/AppConstants";

export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CustomerData: [],
    };
    this.renderCustomerData();
  }

  componentDidMount() {
    this.renderCustomerData();
  }


  renderCustomerData = async() => {
    try {
      let res = await axios.post(API_PARTNER + 'customer/get/all');
      let customerDataResult = res.data.customerList;
      // this will re render the view with new data
      this.setState({
        CustomerData: customerDataResult
      });
    } catch (err) {
      console.log(err);
    }
  }

  render () {
    return (
      <div>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
  <div className="yoo-height-b30 yoo-height-lg-b30"></div>
  <div className="container">
    <div className="yoo-uikits-heading">
      <h2 className="yoo-uikits-title">Customers</h2>
    </div>
  </div>
  <div className="yoo-height-b30 yoo-height-lg-b30"></div>
  <div className="container">
    <div className="row">
    <div className="col-lg-12">
        <div className="yoo-card yoo-style1">
          <div className="yoo-card-heading">
            <div className="yoo-card-heading-left">
            </div>
          </div>
          <div className="yoo-card-body">
            <div className="">
              <div>
                <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                <div className="yoo-table-heading yoo-style1 yoo-padd-lr-20">
                  <div className="yoo-table-heading-left">
                    <form action="/" className="yoo-search yoo-style1 yoo-search-md">
                      <input type="text" placeholder="Search..." className="yoo-search-input" />
                      <button className="yoo-search-submit"><ion-icon name="search"></ion-icon></button>
                    </form>
                  </div>
                </div>
                <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                <div className="yoo-table yoo-style1 yoo-type2">
                  <table className="table table-bordered">
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
                    {
                        this.state.CustomerData.map (customer => {
                          let widthProgress = '90%';
                          return (
                            <tr key={customer.id}>
                            <td>
                              <div className="yoo-table-medias yoo-style1">
                                <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">{customer.firstname} {customer.lastname}</a></h2>
                              </div>
                            </td>
                            <td><span className="yoo-base-color1"></span></td>
                            <td><span className="yoo-base-color1"></span></td>
                            <td>
                              <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                                <div className="yoo-progress-head">
                                  <div className="yoo-progressbar-percentage">90%</div>
                                </div>
                                <div className="progress">
                                  <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : widthProgress }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </td>
                            <td><span className="badge badge-success">{customer.status}</span></td>
                          </tr>
                          )
                        })
                      }
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
  </div>
    );
  }
}
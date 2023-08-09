import React, {Component} from 'react';
import axios from 'axios';
import {API_PARTNER} from "../../constants/AppConstants";

export default class NewUsers extends Component {
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
        <div className="col-lg-4">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-heading">
              <div className="yoo-card-heading-left">
                <h2 className="yoo-card-title"><span className="yoo-card-title-icon yoo-purple-bg"><ion-icon name="flask" role="img" className="md hydrated" aria-label="flask"></ion-icon></span>New Customers</h2>
              </div>
            </div>
            <div className="yoo-card-body">
              <div className="yoo-padd-lr-20">
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <ul className="yoo-list-group yoo-style1 yoo-type1 yoo-mp0">
                  {
                    this.state.CustomerData.reverse().slice(0, 5).map( (data, i) => {
                      let widthProgress = '85%';
                      return (
                        <li key={i} style={{marginLeft : '0px'}}>
                        <div className="yoo-medias yoo-style1 yoo-type1">
                          <div className="yoo-media-meta">
                            <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                            <h2 className="yoo-media-title yoo-margin-bottom-0 yoo-margin-top-2">{data.firstname} {data.lastname}</h2>
                            <div className="yoo-media-subtitle">{data.datetime_added}</div>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                                <div className="yoo-progress-head">
                                  <div className="yoo-progressbar-percentage">85%</div>
                                </div>
                                <div className="progress">
                                  <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : widthProgress }} aria-valuenow={data.profile_completion} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                          </div>
                          <span className="badge badge-success">{data.status}</span>
                        </div>
                      </li>
                      )
                    })
                  }
                </ul>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        </div>
      );
  }
}
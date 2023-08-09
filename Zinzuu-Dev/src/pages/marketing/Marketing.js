import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
import sales from '../../data/sales.json';
import {Emailchart, SMSchart} from '../../charts/Charts';

const Marketing = () => {
    let template;
    template = (
        <>
        <Header />
        <Sidebar />
        <div className="yoo-content yoo-style1">
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container">
      <div className="yoo-uikits-heading">
        <h2 className="yoo-uikits-title">Marketing Report</h2>
      </div>
    </div>
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container">
      <div className="row">
      <div className="col-lg-12">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-heading">
              <div className="yoo-card-heading-left">
                <h2 className="yoo-card-title"><span className="yoo-card-title-icon yoo-indigo-bg"><ion-icon name="cloudy"></ion-icon></span>MARKETING REPORT</h2>
              </div>
              <div className="yoo-card-heading-right">
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#AreaCharts">Email</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#AreaCharts2">SMS</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="yoo-card-body">
              <div className="yoo-padd-lr-20">
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <div className="tab-content">
                <div className="tab-pane fade show active" id="AreaCharts">
                  <div className="yooChart"><Emailchart /></div>
                    <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                  </div>
                  <div className="tab-pane fade show" id="AreaCharts2">
                  <div className="yooChart"><SMSchart /></div>
                    <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                  </div>
                </div>
                <div className="yoo-height-b0 yoo-height-lg-b0"></div>
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        </div>
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
                  <div className="yoo-table yoo-style1 yoo-type2">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Gross</th>
                          <th>Net</th>
                          <th>Commissions</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                          {
                            sales.map(e => {
                              return (
                                <tr>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">{e.gross}</div>
                                  </td>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">{e.net}</div>
                                  </td>
                                  <td><span className="yoo-base-color1">{e.commissions}</span></td>
                                  <td>
                                    <button className="yoo-table-action-btn yoo-style1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><ion-icon name="ellipsis-horizontal"></ion-icon></button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="/">View</a>
                                      <a className="dropdown-item" href="/">Edit</a>
                                      <a className="dropdown-item" href="/">Delete</a>
                                      <div className="dropdown-divider"></div>
                                      <a className="dropdown-item" href="/">Export</a>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })
                          }
                      </tbody>
                    </table>
                    <div className="yoo-height-b15 yoo-height-lg-b15"></div>
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
};

export default Marketing;
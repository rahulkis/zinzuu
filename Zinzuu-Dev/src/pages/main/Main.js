import React, {Component} from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
import DashboardHeader from '../../modules/dashboard/Header';
import DashboardAnalytics from '../../modules/dashboard/Analytics';
import NewUsers from '../../modules/dashboard/NewUsers';
import {Customer, Partner, Commissions, Sales, Emails, SMS} from '../../pages/reports/ShowDashboardReport';

export default class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displayPartnersChart: true,
        displayCommissionsChart: false,
        displayCustomersChart: false,
        displaySalesChart: false,
        tableTitle: 'Sales',
        dataTable: <Sales />
      };
      this.UpdateChartAndTable = this.UpdateChartAndTable.bind(this);
      this.UpdateChartAndTable();
    }

    UpdateChartAndTable = value => {
        if (value === "SalesChart") {
          this.setState({
            tableTitle: 'Sales',
            dataTable: <Sales />
          })
        } else if (value === "PartnersChart") {
          this.setState({
            tableTitle: 'Partners',
            dataTable: <Partner />
          })
        } else if (value === "CommissionsChart") {
          this.setState({
            tableTitle: 'Commissions',
            dataTable: <Commissions />
          })
        } else if (value === "CustomersChart") {
          this.setState({
            tableTitle: 'Customers',
            dataTable: <Customer />
          })
        } else if (value === "EmailsChart") {
          this.setState({
            tableTitle: 'Emails',
            dataTable: <Emails />
          })
        } else if (value === "SmsChart") {
          this.setState({
            tableTitle: 'SMS',
            dataTable: <SMS />
          })
        } else {
          this.setState({
            tableTitle: 'Sales',
            dataTable: <Sales />
          })
        }
    }
    render() {
        let template;
    template = (
        <>
        <Header />
        <Sidebar />
        <div className="yoo-content yoo-style1">
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container-fluid">
      <div className="yoo-uikits-heading">
        <h2 className="yoo-uikits-title">Dashboard</h2>
      </div>
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      <DashboardHeader UpdateChartAndTable ={this.UpdateChartAndTable} />
      <div className="row">
      <DashboardAnalytics />
      <NewUsers />
        <div className="col-lg-12">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-heading">
              <h5>{this.state.tableTitle}</h5>
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
                  <div className="yoo-table yoo-style1 yoo-type2" id="DataTable">
                    {this.state.dataTable}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        </div>
        <div className="col-lg-6">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-heading">
              <div className="yoo-card-heading-left">
                <h2 className="yoo-card-title"><span className="yoo-card-title-icon yoo-green-bg"><ion-icon name="cube"></ion-icon></span>PRODUCTS</h2>
              </div>
            </div>
            <div className="yoo-card-body">
              <div className="yoo-padd-lr-20">
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <ul className="yoo-list-group yoo-style1 yoo-mp0">
                  <li>
                    <div className="yoo-medias yoo-style1">
                      <div className="yoo-media-img"><img src="/assets/img/product-img/01.png" alt=""/></div>
                      <div className="yoo-media-meta">
                        <h2 className="yoo-media-title yoo-margin-bottom-0">iPhone 11 Pro Max</h2>
                        <div className="yoo-media-subtitle">Phone</div>
                      </div>
                      <span className="yoo-media-tag">$999</span>
                    </div>
                  </li>
                  <li>
                    <div className="yoo-medias yoo-style1">
                      <div className="yoo-media-img"><img src="/assets/img/product-img/02.png" alt=""/></div>
                      <div className="yoo-media-meta">
                        <h2 className="yoo-media-title yoo-margin-bottom-0">iPhone 11 Pro</h2>
                        <div className="yoo-media-subtitle">Phone</div>
                      </div>
                      <span className="yoo-media-tag">$799</span>
                    </div>
                  </li>
                  <li>
                    <div className="yoo-medias yoo-style1">
                      <div className="yoo-media-img"><img src="/assets/img/product-img/06.png" alt=""/></div>
                      <div className="yoo-media-meta">
                        <h2 className="yoo-media-title yoo-margin-bottom-0">Watch Series 5</h2>
                        <div className="yoo-media-subtitle">Watch</div>
                      </div>
                      <span className="yoo-media-tag">$659</span>
                    </div>
                  </li>
                  <li>
                    <div className="yoo-medias yoo-style1">
                      <div className="yoo-media-img"><img src="/assets/img/product-img/04.png" alt=""/></div>
                      <div className="yoo-media-meta">
                        <h2 className="yoo-media-title yoo-margin-bottom-0">Watch Series 5 Aluminum</h2>
                        <div className="yoo-media-subtitle">Watch</div>
                      </div>
                      <span className="yoo-media-tag">$249</span>
                    </div>
                  </li>
                  <li>
                    <div className="yoo-medias yoo-style1">
                      <div className="yoo-media-img"><img src="/assets/img/product-img/05.png" alt=""/></div>
                      <div className="yoo-media-meta">
                        <h2 className="yoo-media-title yoo-margin-bottom-0">iPad Pro 12.9 (2017)</h2>
                        <div className="yoo-media-subtitle">Pad</div>
                      </div>
                      <span className="yoo-media-tag">$499</span>
                    </div>
                  </li>
                  <li>
                    <div className="yoo-medias yoo-style1">
                      <div className="yoo-media-img"><img src="/assets/img/product-img/02.png" alt=""/></div>
                      <div className="yoo-media-meta">
                        <h2 className="yoo-media-title yoo-margin-bottom-0">iPhone 11</h2>
                        <div className="yoo-media-subtitle">Phone</div>
                      </div>
                      <span className="yoo-media-tag">$499</span>
                    </div>
                  </li>
                  <li>
                    <div className="yoo-medias yoo-style1">
                      <div className="yoo-media-img"><img src="/assets/img/product-img/02.png" alt=""/></div>
                      <div className="yoo-media-meta">
                        <h2 className="yoo-media-title yoo-margin-bottom-0">iPhone 11 Pro</h2>
                        <div className="yoo-media-subtitle">Phone</div>
                      </div>
                      <span className="yoo-media-tag">$799</span>
                    </div>
                  </li>
                </ul>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        </div>
        <div className="col-lg-6">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-heading">
              <div className="yoo-card-heading-left">
                <h2 className="yoo-card-title"><span className="yoo-card-title-icon yoo-gray-bg"><ion-icon name="notifications"></ion-icon></span>Tasks List</h2>
              </div>
            </div>
            <div className="yoo-card-body">
              <div className="yoo-padd-lr-20">
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <ul className="yoo-task-list yoo-style1 yoo-mp0">
                    <li>
                      <div className="yoo-task-checkmark">
                        <div className="yoo-switch yoo-style1"></div>
                      </div>
                      <div className="yoo-task-text">
                        <span className="badge badge-secondary">SignUp</span>
                        <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                        <h3><a href="/">New Employee intro</a></h3>
                        <div className="yoo-ativity-time"><ion-icon name="time" role="img" className="md hydrated" aria-label="time"></ion-icon> Scheduled For 3.00 PM on Jan 2019</div>
                      </div>
                      <div className="yoo-button-group yoo-style2">
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="build" role="img" className="md hydrated" aria-label="build"></ion-icon></a>
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="trash" role="img" className="md hydrated" aria-label="trash"></ion-icon></a>
                      </div>
                    </li>
                    <li>
                      <div className="yoo-task-checkmark">
                        <div className="yoo-switch yoo-style1"></div>
                      </div>
                      <div className="yoo-task-text">
                        <span className="badge badge-secondary">SignUp</span>
                        <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                        <h3><a href="/">Send email to CEO</a></h3>
                        <div className="yoo-ativity-time"><ion-icon name="time" role="img" className="md hydrated" aria-label="time"></ion-icon> Scheduled For 3.00 PM on Jan 2019</div>
                      </div>
                      <div className="yoo-button-group yoo-style2">
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="build" role="img" className="md hydrated" aria-label="build"></ion-icon></a>
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="trash" role="img" className="md hydrated" aria-label="trash"></ion-icon></a>
                      </div>
                    </li>
                    <li>
                      <div className="yoo-task-checkmark">
                        <div className="yoo-switch yoo-style1"></div>
                      </div>
                      <div className="yoo-task-text">
                        <span className="badge badge-secondary">SignUp</span>
                        <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                        <h3><a href="/">New Joing Employee Welcome</a></h3>
                        <div className="yoo-ativity-time"><ion-icon name="time" role="img" className="md hydrated" aria-label="time"></ion-icon> Scheduled For 3.00 PM on Jan 2019</div>
                      </div>
                      <div className="yoo-button-group yoo-style2">
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="build" role="img" className="md hydrated" aria-label="build"></ion-icon></a>
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="trash" role="img" className="md hydrated" aria-label="trash"></ion-icon></a>
                      </div>
                    </li>
                    <li>
                      <div className="yoo-task-checkmark">
                        <div className="yoo-switch yoo-style1"></div>
                      </div>
                      <div className="yoo-task-text">
                        <span className="badge badge-secondary">SignUp</span>
                        <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                        <h3>
                          <a href="/">Birthday Wish</a>
                        </h3>
                        <div className="yoo-ativity-time"><ion-icon name="time" role="img" className="md hydrated" aria-label="time"></ion-icon> Scheduled For 3.00 PM on Jan 2019</div>
                      </div>
                      <div className="yoo-button-group yoo-style2">
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="build" role="img" className="md hydrated" aria-label="build"></ion-icon></a>
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="trash" role="img" className="md hydrated" aria-label="trash"></ion-icon></a>
                      </div>
                    </li>
                    <li>
                      <div className="yoo-task-checkmark">
                        <div className="yoo-switch yoo-style1"></div>
                      </div>
                      <div className="yoo-task-text">
                        <span className="badge badge-secondary">SignUp</span>
                        <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                        <h3><a href="/">Send email to CEO</a></h3>
                        <div className="yoo-ativity-time"><ion-icon name="time" role="img" className="md hydrated" aria-label="time"></ion-icon> Scheduled For 3.00 PM on Jan 2019</div>
                      </div>
                      <div className="yoo-button-group yoo-style2">
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="build" role="img" className="md hydrated" aria-label="build"></ion-icon></a>
                        <a href="/" className="yoo-btn yoo-style4"><ion-icon name="trash" role="img" className="md hydrated" aria-label="trash"></ion-icon></a>
                      </div>
                    </li>
                  </ul>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        </div>
      </div>
    </div>
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <Footer />
    </>
    );
    return template;
    }
}
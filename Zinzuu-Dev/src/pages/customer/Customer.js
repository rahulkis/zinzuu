import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';


const Customer = () => {
    let template;
    template = (
        <>
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
                    <div className="yoo-table-heading-right">
                      <ul className="yoo-table-heading-btn-list yoo-mp0">
                        <li>
                          <div className="yoo-page-number">15 of 31</div>
                        </li>
                        <li>
                          <nav>
                            <ul className="pagination">
                              <li className="page-item active">
                                <a className="page-link" href="/">
                                  <span><ion-icon name="chevron-back"></ion-icon></span>
                                  <span className="sr-only">Previous</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="/">
                                  <span><ion-icon name="chevron-forward"></ion-icon></span>
                                  <span className="sr-only">Next</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </li>
                        <li>
                          <button className="btn btn-outline-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-ripple="ripple" data-ripple-color="#666">Small button</button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Separated link</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                  <div className="yoo-table yoo-style1 yoo-type2">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            <div className="yoo-check-mark-all">
                              <span className="yoo-first"></span>
                              <span className="yoo-last"></span>
                            </div>
                          </th>
                          <th>Customer Name
                            <button className="yoo-table-info-btn yoo-style1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><ion-icon name="information-circle"></ion-icon></button>
                            <div className="dropdown-menu yoo-table-info-text">
                              Is it more important for something to be subscriber-defined or to be compelling? Our technology takes the best features of XForms and OWL.
                            </div>
                          </th>
                          <th>Total Purchase</th>
                          <th className="yoo-arrow-wrap">Last Purchase</th>
                          <th>Profile Completion</th>
                          <th>Membership Plan</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="yoo-check-mark"></div>
                          </td>
                          <td>
                            <div className="yoo-table-medias yoo-style1">
                              <a href="/" className="yoo-media-img">
                                <div className="yoo-box-sm yoo-radious5">
                                  <img src="/assets/img/nav-icon/gmail.png" alt="" />
                                </div>
                              </a>
                              <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">Instagram</a></h2>
                            </div>
                          </td>
                          <td><span className="yoo-base-color1">$60</span></td>
                          <td>
                            <div className="yoo-line-1-2 yoo-base-color1">$70</div>
                            <div className="yoo-font-size-13 yoo-base-color2">Multiple Value</div>
                          </td>
                          <td>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                              <div className="yoo-progress-head">
                                <div className="yoo-progressbar-percentage">65%</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="yoo-users yoo-style1 yoo-mp0">
                              <li><a href="/"><img src="/assets/img/user/7.jpg" alt="2" /></a></li>
                              <li><a href="/"><img src="/assets/img/user/2.jpg" alt="4" /></a></li>
                            </ul>
                          </td>
                          <td><span className="badge badge-success">Paid</span></td>
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
                        <tr>
                          <td>
                            <div className="yoo-check-mark"></div>
                          </td>
                          <td>
                            <div className="yoo-table-medias yoo-style1">
                              <a href="/" className="yoo-media-img">
                                <div className="yoo-box-sm yoo-radious5">
                                  <img src="/assets/img/nav-icon/hangout.png" alt="" />
                                </div>
                              </a>
                              <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">Google Maps</a></h2>
                            </div>
                          </td>
                          <td><span className="yoo-base-color1">$60</span></td>
                          <td>
                            <div className="yoo-line-1-2 yoo-base-color1">$60</div>
                            <div className="yoo-font-size-13 yoo-base-color2">Multiple Value</div>
                          </td>
                          <td>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                              <div className="yoo-progress-head">
                                <div className="yoo-progressbar-percentage">85%</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="yoo-users yoo-style1 yoo-mp0">
                              <li><a href="/"><img src="/assets/img/user/1.jpg" alt="1"/></a></li>
                              <li><a href="/"><img src="/assets/img/user/7.jpg" alt="2"/></a></li>
                              <li><a href="/"><img src="/assets/img/user/5.jpg" alt="4"/></a></li>
                            </ul>
                          </td>
                          <td><span className="badge badge-success">Paid</span></td>
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
                        <tr>
                          <td>
                            <div className="yoo-check-mark"></div>
                          </td>
                          <td>
                            <div className="yoo-table-medias yoo-style1">
                              <a href="/" className="yoo-media-img">
                                <div className="yoo-box-sm yoo-radious5">
                                  <img src="/assets/img/nav-icon/google.png" alt=""/>
                                </div>
                              </a>
                              <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">Books</a></h2>
                            </div>
                          </td>
                          <td><span className="yoo-base-color1">$80</span></td>
                          <td>
                            <div className="yoo-line-1-2 yoo-base-color1">$90</div>
                            <div className="yoo-font-size-13 yoo-base-color2">Multiple Value</div>
                          </td>
                          <td>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                              <div className="yoo-progress-head">
                                <div className="yoo-progressbar-percentage">95%</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : '69%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="yoo-users yoo-style1 yoo-mp0">
                              <li><a href="/"><img src="/assets/img/user/4.jpg" alt="1"/></a></li>
                            </ul>
                          </td>
                          <td><span className="badge badge-danger">Due</span></td>
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
                        <tr>
                          <td>
                            <div className="yoo-check-mark"></div>
                          </td>
                          <td>
                            <div className="yoo-table-medias yoo-style1">
                              <a href="/" className="yoo-media-img">
                                <div className="yoo-box-sm yoo-radious5">
                                  <img src="/assets/img/nav-icon/gmail.png" alt=""/>
                                </div>
                              </a>
                              <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">Gmail</a></h2>
                            </div>
                          </td>
                          <td><span className="yoo-base-color1">$70</span></td>
                          <td>
                            <div className="yoo-line-1-2 yoo-base-color1">$50</div>
                            <div className="yoo-font-size-13 yoo-base-color2">Multiple Value</div>
                          </td>
                          <td>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                              <div className="yoo-progress-head">
                                <div className="yoo-progressbar-percentage">65%</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="yoo-users yoo-style1 yoo-mp0">
                              <li><a href="/"><img src="/assets/img/user/4.jpg" alt="1"/></a></li>
                              <li><a href="/"><img src="/assets/img/user/7.jpg" alt="2"/></a></li>
                              <li><a href="/"><img src="/assets/img/user/8.jpg" alt="4"/></a></li>
                            </ul>
                          </td>
                          <td><span className="badge badge-danger">Due</span></td>
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
                        <tr>
                          <td>
                            <div className="yoo-check-mark"></div>
                          </td>
                          <td>
                            <div className="yoo-table-medias yoo-style1">
                              <a href="/" className="yoo-media-img">
                                <div className="yoo-box-sm yoo-radious5">
                                  <img src="/assets/img/nav-icon/message.png" alt=""/>
                                </div>
                              </a>
                              <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">Safari</a></h2>
                            </div>
                          </td>
                          <td><span className="yoo-base-color1">$70</span></td>
                          <td>
                            <div className="yoo-line-1-2 yoo-base-color1">$60</div>
                            <div className="yoo-font-size-13 yoo-base-color2">Multiple Value</div>
                          </td>
                          <td>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                              <div className="yoo-progress-head">
                                <div className="yoo-progressbar-percentage">80%</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="yoo-users yoo-style1 yoo-mp0">
                              <li><a href="/"><img src="/assets/img/user/5.jpg" alt="2"/></a></li>
                            </ul>
                          </td>
                          <td><span className="badge badge-success">Paid</span></td>
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
                        <tr>
                          <td>
                            <div className="yoo-check-mark"></div>
                          </td>
                          <td>
                            <div className="yoo-table-medias yoo-style1">
                              <a href="/" className="yoo-media-img">
                                <div className="yoo-box-sm yoo-radious5">
                                  <img src="/assets/img/nav-icon/hangout.png" alt=""/>
                                </div>
                              </a>
                              <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">Google Maps</a></h2>
                            </div>
                          </td>
                          <td><span className="yoo-base-color1">$120</span></td>
                          <td>
                            <div className="yoo-line-1-2 yoo-base-color1">$100</div>
                            <div className="yoo-font-size-13 yoo-base-color2">Multiple Value</div>
                          </td>
                          <td>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                              <div className="yoo-progress-head">
                                <div className="yoo-progressbar-percentage">60%</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="yoo-users yoo-style1 yoo-mp0">
                              <li><a href="/"><img src="/assets/img/user/1.jpg" alt="1"/></a></li>
                              <li><a href="/"><img src="/assets/img/user/2.jpg" alt="2"/></a></li>
                            </ul>
                          </td>
                          <td><span className="badge badge-success">Paid</span></td>
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
                        <tr>
                          <td>
                            <div className="yoo-check-mark"></div>
                          </td>
                          <td>
                            <div className="yoo-table-medias yoo-style1">
                              <a href="/" className="yoo-media-img">
                                <div className="yoo-box-sm yoo-radious5">
                                  <img src="/assets/img/nav-icon/mail.png" alt=""/>
                                </div>
                              </a>
                              <h2 className="yoo-media-title yoo-margin-bottom-0"><a href="/">Mail</a></h2>
                            </div>
                          </td>
                          <td><span className="yoo-base-color1">$80</span></td>
                          <td>
                            <div className="yoo-line-1-2 yoo-base-color1">$90</div>
                            <div className="yoo-font-size-13 yoo-base-color2">Multiple Value</div>
                          </td>
                          <td>
                            <div className="yoo-progress-wrap yoo-style3 yoo-type1">
                              <div className="yoo-progress-head">
                                <div className="yoo-progressbar-percentage">95%</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar yoo-gray-bg" role="progressbar" style={{width : '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="yoo-users yoo-style1 yoo-mp0">
                              <li><a href="/"><img src="/assets/img/user/4.jpg" alt="1"/></a></li>
                            </ul>
                          </td>
                          <td><span className="badge badge-danger">Due</span></td>
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
};

export default Customer;
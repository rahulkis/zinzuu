import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';


const Profile = () => {
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken && userToken[0].success === true) return userToken[1];
  }
  const token = getToken();
    let template;
    template = (
        <>
        <Header />
        <Sidebar />
        <div className="yoo-content yoo-style1">
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container">
      <div className="yoo-uikits-heading">
        <h2 className="yoo-uikits-title">Profile</h2>
      </div>
    </div>
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container">
      <div className="row">
      <div className="col-lg-12">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-body">
              <div className="tab-content">
                <div className="yoo-profile-setting-container">
                  <div className="yoo-height-b45 yoo-height-lg-b45"></div>
                  <div className="yoo-flex">
                    <div className="yoo-profile-setting-heading">
                      <h2 className="yoo-profile-setting-title">Profile Settings</h2>
                      <div className="yoo-profile-setting-subtitle">Add all your details and fill-up correctly. You can change settings later, too.</div>
                    </div>
                  </div>
                  <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Profile Photo</label>
                    <div className="yoo-form-field">
                      <div className="yoo-setting-profile-pic">
                        <img src="/static/media/logo_555.36cd4226.jpg" alt="" />
                        <a href="/" className="yoo-profile-pic-edit-btn"><ion-icon name="pencil"></ion-icon></a>
                      </div>
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Username</label>
                    <div className="input-group form-group-sm">
                      <input type="text" className="form-control" placeholder="Username" value={token.username} />
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">First Name</label>
                    <div className="input-group form-group-sm">
                      <input type="text" className="form-control" placeholder="First Name" value={token.firstname} />
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Last Name</label>
                    <div className="input-group form-group-sm">
                      <input type="text" className="form-control" placeholder="Last Name" value={token.lastname} />
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Email</label>
                    <div className="input-group form-group-sm">
                      <input type="email" className="form-control" placeholder="Email" value={token.email} />
                    </div>
                  </div>
                  <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Country</label>
                    <div className="input-group form-group-sm">
                      <div className="yoo-select">
                        <select id="inputState" className="form-control">
                          <option selected="">United States</option>
                          <option>India</option>
                          <option>Austrilia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Time Zone</label>
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
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Website</label>
                    <div className="input-group form-group-sm">
                      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="yoo-height-b60 yoo-height-lg-b60"></div>
                </div>
                <hr />
                <div className="yoo-profile-setting-container">
                  <div className="yoo-height-b55 yoo-height-lg-b55"></div>
                  <div className="yoo-flex">
                    <div className="yoo-profile-setting-heading">
                      <h2 className="yoo-profile-setting-title">Policy Agreements</h2>
                      <div className="yoo-profile-setting-subtitle">Add all your details and fill-up correctly. You can change settings later, too.</div>
                    </div>
                  </div>
                  <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label">Password Reset Verification</label>
                    <div className="yoo-form-field yoo-color1">
                      <div className="yoo-checkbox-wrap yoo-style1 yoo-color1">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="gridCheck2" />
                          <label className="custom-control-label" for="gridCheck2">
                            <span className="custom-control-shadow"></span>Require personal information to reset your password
                          </label>
                        </div>
                      </div>
                      <div className="yoo-form-field-note">For added security, this requires you to confirm your email or phone number while resetting your password.</div>
                    </div>
                  </div>
                  <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label">Timeline</label>
                    <div className="yoo-form-field yoo-color1">
                      <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" id="gridCheck3" />
                        <label className="custom-control-label" for="gridCheck3">
                          <span className="custom-control-shadow"></span>Show the best contents first
                        </label>
                      </div>
                      <div className="yoo-form-field-note">Tweets you are likely to care about most will show up first in your timeline.</div>
                    </div>
                  </div>
                  <div className="yoo-height-b55 yoo-height-lg-b55"></div>
                </div>
                <hr />
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <div className="yoo-profile-btn-group yoo-style1">
                  <a href="/" className="yoo-profile-btn yoo-style1 yoo-color1">Update Now</a>
                  <a href="/" className="yoo-profile-btn yoo-style1 yoo-color2">Next</a>
                </div>
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
              </div>
            </div>
          </div>
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

export default Profile;
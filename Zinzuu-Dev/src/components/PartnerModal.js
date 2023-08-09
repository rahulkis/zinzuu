
import React, {useState} from 'react';
import { Modal, Button } from "react-bootstrap";
const PartnerModal = ({data}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = function (e) {e.preventDefault();setShow(true);};
    return (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="col-lg-12">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-body">
              <div className="tab-content">
                <div className="yoo-profile-setting-container">
                  <div className="yoo-height-b45 yoo-height-lg-b45"></div>
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
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                      </div>
                      <input type="text" className="form-control" placeholder="Username" value="ThemeBubble" />
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">First Name</label>
                    <div className="input-group form-group-sm">
                      <input type="text" className="form-control" placeholder="First Name" value="Jhon" />
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Last Name</label>
                    <div className="input-group form-group-sm">
                      <input type="text" className="form-control" placeholder="Last Name" value="Doe" />
                    </div>
                  </div>
                  <div className="yoo-height-b25 yoo-height-lg-b25"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Email</label>
                    <div className="input-group form-group-sm">
                      <input type="email" className="form-control" placeholder="Email" value="Jhon Doe" />
                    </div>
                  </div>
                  <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  <div className="yoo-form-field-wrap yoo-style1">
                    <label className="yoo-form-field-label yoo-type1">Country</label>
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
              </div>
            </div>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
      );
};

export default PartnerModal;
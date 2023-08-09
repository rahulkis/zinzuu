import React, { useEffect, useState } from "react";
import {Container,Modal,Tab,TabContainer,Tabs} from 'react-bootstrap'
import { Redirect } from "react-router";
import { ToastsStore } from "react-toasts";
import { Link } from "react-router-dom";
import Header from "../../../components/header";
import Sidebar from "../../../components/sidebar";
import Footer from "../../../components/footer";
import { httpClient } from "../../../constants/ApiApp";
import { TEMPLATES } from "../../../constants/AppConstants";
import SendEmail from "./SendEmail";
import ConfirmDialog from "../../common/ConfirmDialog";
import SendSMS from "./SendSMS";

function EmailTemplates() {
  const [openEditor, setOpenEditor] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [open, setOpen] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");

  useEffect(() => {
    getTemplates();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDeleteConfirmDialog = () => {
    setDeleteConfirmDialog(false);
  };

  const handleSend = (data) => {
    const template = [];
    template.push(data);
    setTempData(template);
    setOpen(true);
  };

  const getTemplates = async () => {
    try {
      await httpClient
        .get(TEMPLATES.GET_TEMPLATES)
        .then((res) => {
          if (res.status === 200) {
            setTemplates(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleView = (id) => {
    window.open(`/partner/marketing/view-template/${id}`);
  };

  const handleCheckedTemplated = (e, data) => {
    let template = [...tempData];
    if (e.target.checked) {
      template.push(data);
      setTempData(template);
    } else {
      const index = template.indexOf(data);
      if (index > -1) {
        template.splice(index, 1);
        setTempData(template);
      }
    }
    if (template.length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const handleConfirmDelete = (id) => {
    setDeleteConfirmDialog(true);
    setSelectedTemplateId(id);
  };

  const handleDelete = async () => {
    try {
      await httpClient
        .delete(TEMPLATES.DELETE_TEMPLATE + selectedTemplateId)
        .then((res) => {
          if (res.status === 200) {
            ToastsStore.success(res.data.message);
            handleCloseDeleteConfirmDialog();
            getTemplates();
          }
        })
        .catch((err) => {
          getTemplates();
          handleCloseDeleteConfirmDialog();
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Something went wrong");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {openEditor ? (
        <Redirect to="/partner/marketing/generate-mail-templates" />
      ) : null}
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading d-flex justify-content-between">
            <h2 className="yoo-uikits-title"> Email Templates</h2>
            <div>
              {checked && (
                <button
                  className="btn btn-primary mr-3"
                  onClick={() => setOpen(true)}
                >
                  Send Selected Templates
                </button>
              )}
              <button
                className="btn btn-primary"
                onClick={() => setOpenEditor(true)}
              >
                Generate New
              </button>
            </div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="row">
            {templates.length > 0 &&
              templates.map((data, i) => (
                <div className="col-md-4" key={i}>
                  <div className="yoo-card yoo-style1 p-2">
                    <div
                      className="yoo-card-heading"
                      style={{ fontSize: "18px", fontWeight: "800" }}
                    >
                      {data.template_title ? data.template_title : "NA"}
                      <div className="templates-container">
                        <label
                          className="checkbox-container"
                          title="Select Template"
                        >
                          <input
                            type="checkbox"
                            onClick={(e) => handleCheckedTemplated(e, data)}
                          />
                          <span className="checkmark" />
                        </label>
                        <ion-icon
                          title="Delete"
                          name="trash-outline"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={(e) => handleConfirmDelete(data.template_id)}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        height: "100px",
                        overflow: "hidden",
                        padding: "6px 10px",
                        marginBottom: "20px",
                        fontSize: "10px",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: data.template_data }}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={(e) => handleView(data.template_id)}
                        style={{ marginRight: "5px", lineHeight: "1.3em" }}
                      >
                        View
                      </button>
                      <Link
                        to={`/partner/marketing/edit-template/${
                          data.template_id
                        }`}
                      >
                        <button
                          className="btn btn-primary btn-sm"
                          style={{ marginRight: "5px", lineHeight: "1.3em" }}
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={(e) => handleSend(data)}
                        style={{ marginRight: "5px", lineHeight: "1.3em" }}
                      >
                        Send
                      </button>
                    </div>
                  </div>

                  <div className="yoo-height-b30 yoo-height-lg-b30" />
                </div>
              ))}
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <Container>
          <Modal
            show={open}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Send Template</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TabContainer>
                <Tabs
                  defaultActiveKey="email"
                  className="w-100 d-flex justify-content-around"
                >
                  <Tab eventKey="email" title="Email">
                    <SendEmail close={handleClose}  templateData={tempData} />
                  </Tab>
                  <Tab eventKey="sms" title="SMS">
                    <SendSMS close={handleClose} templateData={tempData}/>
                  </Tab>
                </Tabs>
              </TabContainer>
            </Modal.Body>
          </Modal>
        </Container>
        <Footer />
        {/* <SendEmail open={open} templateData={tempData} close={handleClose} /> */}

        <ConfirmDialog
          openDialog={deleteConfirmDialog}
          closeDialog={handleCloseDeleteConfirmDialog}
          onConfirm={handleDelete}
          title="Delete Template"
          body="are you sure you want to delete this template?"
        />
      </div>
    </>
  );
}

export default EmailTemplates;

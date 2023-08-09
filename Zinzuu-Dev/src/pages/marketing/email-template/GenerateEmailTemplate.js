import React, { useEffect, useState } from "react";
import CKEditor from "ckeditor4-react";
import { ToastsStore } from "react-toasts";
import Header from "../../../components/header";
import Sidebar from "../../../components/sidebar";
import Footer from "../../../components/footer";
import { httpClient } from "../../../constants/ApiApp";
import { TEMPLATES } from "../../../constants/AppConstants";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  if (userToken && userToken[0].success === true) return userToken[1];
}

function GenerateEmailTemplate(props) {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isProcessing, setProcessing] = useState(false);
  const token = getToken();

  useEffect(() => {
    let id = props.match.params.id;
    if (id) {
      handleGetRequest(id);
      setIsEdit(true);
    }
  }, [props.match.params.id]);

  const handleGetRequest = async (id) => {
    try {
      await httpClient
        .get(TEMPLATES.GET_TEMPLATE_BY_ID + id)
        .then((res) => {
          if (res.status === 200) {
            setTitle(res.data.template_title);
            setData(res.data.template_data);
          }
        })
        .catch((err) => {
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

  const onEditorChange = (e) => {
    setData(e.editor.getData());
  };

  const handleGenerateTemplate = async () => {
    setProcessing(true);
    try {
      const formData = {
        customer_id: token.vip_id,
        template_title: title,
        template_data: data,
      };
      await httpClient
        .post(TEMPLATES.GENERATE_TEMPLATE, formData)
        .then((res) => {
          if (res.status === 201) {
            ToastsStore.success(res.data.message);
            props.history.push("/partner/marketing/mail-templates");
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Something went wrong");
          }
          setProcessing(false);
        });
    } catch (err) {
      console.log(err);
      setProcessing(false);
    }
  };

  const handleUpdateTemplate = async () => {
    setProcessing(true);
    try {
      let id = props.match.params.id;
      const formData = {
        customer_id: token.vip_id,
        template_title: title,
        template_data: data,
      };
      await httpClient
        .put(TEMPLATES.UPDATE_TEMPLATE + id, formData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            ToastsStore.success(res.data.message);
            props.history.push("/partner/marketing/mail-templates");
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Something went wrong");
          }
          setProcessing(false);
        });
    } catch (err) {
      console.log(err);
      setProcessing(false);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading d-flex justify-content-between">
            <h2 className="yoo-uikits-title">Template & Email generator</h2>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  <div className="yoo-card-heading-left">
                    <h2 className="yoo-card-title">
                      <span className="yoo-card-title-icon yoo-indigo-bg">
                        <ion-icon name="cloudy" />
                      </span>
                      TEMPLATE & EMAIL GENERATOR
                    </h2>
                  </div>
                </div>
                <div className="yoo-card-body">
                  <div className="yoo-padd-lr-20">
                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                    <div className="form-group mb-3">
                      <label className="text-blue-gray">Title</label>
                      <input
                        required
                        className="form-control "
                        placeholder="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <CKEditor
                      data={data}
                      onChange={onEditorChange}
                      // onInit={(editor) => {
                      //   editor.editing.view.change((writer) => {
                      //     writer.setStyle(
                      //       "height",
                      //       "600px",  
                      //       editor.editing.view.document.getRoot()
                      //     );
                      //   });
                      // }}
                    />
                    <div className="yoo-height-b30 yoo-height-lg-b30" />
                    <div className="yoo-height-b0 yoo-height-lgujik-b0" />
                  </div>
                  {!isProcessing && (
                    <div className="d-flex justify-content-end p-3">
                      {isEdit ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleUpdateTemplate()}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleGenerateTemplate()}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  )}
                  {isProcessing && (
                    <div className="d-flex justify-content-end p-3">
                      {isEdit ? (
                        <button className="btn btn-primary" type="button">
                          Updating..
                        </button>
                      ) : (
                        <button className="btn btn-primary" type="button">
                          Submitting..
                        </button>
                      )}
                    </div>
                  )}
                  <div className="yoo-height-b30 yoo-height-lg-b30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yoo-height-b30 yoo-height-lg-b30" />
      <div className="yoo-height-b30 yoo-height-lg-b30" />
      <Footer />
    </>
  );
}

export default GenerateEmailTemplate;

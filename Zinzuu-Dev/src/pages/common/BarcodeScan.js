import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CryptoJS from "crypto-js";
import { Redirect } from "react-router";
import Logo from "../../logo_555.jpg";
import { sendThanksEmail, sendEmail } from "./CommonFunction";
import { httpClient } from "../../constants/ApiApp";
import {
  CUSTOMER,
  PRODUCT,
  CRYPTO_SECRET_KEY,
} from "../../constants/AppConstants";
import Scanner from "./Scanner.js";
import Footer from "./Footer";

function BarcodeScan(props) {
  const [openScanner, setOpenScanner] = useState(false);
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [footer, showFooter] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const cust = JSON.parse(localStorage.getItem("customer"));
    if (cust) {
      setCustomer(cust);
    }
    if (props.location && props.location.pathname === "/customer/scan-barcode") {
      showFooter(true);
    }
  }, []);

  const handleClose = () => {
    setOpenScanner(false);
  };

  const handleInput = (res) => {
    const obj = [...data];
    obj.push(res);
    setData(obj);
    handleClose();
  };

  const handleDelete = (pro) => {
    const newData = [...data];
    const index = newData.indexOf(pro);
    if (index > -1) {
      newData.splice(index, 1);
    }
    setData(newData);
  };

  const handleSubmit = () => {
    if (customer) {
      addProducts(customer.customer.customer_id);
      sendThanksEmail(customer.customer.email, customer.customer.firstname);
      setSubmit(true);
    } else {
      registerCustomer();
      setSubmit(true);
    }
  };

  const registerCustomer = () => {
    const val = props.values;
    try {
      let formModel = {
        firstname: val.firstName,
        lastname: val.lastName,
        email: val.email,
        customer_type: props.customerType,
        status: "pending",
      };
      httpClient
        .post(CUSTOMER.REGISTER_CUSTOMER, formModel)
        .then((result) => {
          if (result.status === 201) {
            let encryptedData = CryptoJS.AES.encrypt(
              result.data.email,
              CRYPTO_SECRET_KEY
            ).toString();
            sendEmail(val.firstName, val.email, encryptedData);
            addProducts(result.data.customer_id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const addProducts = async (id) => {
    try {
      await httpClient
        .post(PRODUCT.ADD_PRODUCTS, { customer_id: id, products: data })
        .then((res) => {
          if (res.status === 201) {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {submit && <Redirect to="/customer/welcome" />}
      <div className="signup-container">
        <div className="col-md-4 mt-5">
          <div className="LogoMain text-center">
            <img src={Logo} alt="" />
          </div>
          <div className="text-white mt-4 text-center">
            <h5 className="text-white "> Barcode Scan</h5>
          </div>
          <div className="d-flex justify-content-around mt-5">
            {data.length > 0 ? (
              <Button
                className="text-dark"
                style={{ backgroundColor: "#f09e38" }}
                onClick={() => setOpenScanner(true)}
              >
                Scan More
              </Button>
            ) : (
              <Button
                className="text-dark"
                style={{ backgroundColor: "#f09e38" }}
                onClick={() => setOpenScanner(true)}
              >
                Scan Barcode
              </Button>
            )}
          </div>
          {data.length > 0 && (
            <div>
              <div className="table-responsive mt-5">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col" className="text-white">
                        #
                      </th>
                      <th scope="col" className="text-white">
                        Product
                      </th>
                      <th scope="col" className="text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {data.map((pro, i) => (
                    <tbody key={i}>
                      <tr>
                        <td className="text-white">{i + 1}</td>
                        <td className="text-white">{pro}</td>
                        <td>
                          <Button
                            className="btn-sm btn-danger"
                            onClick={(e) => handleDelete(pro)}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>

              <div className="d-flex justify-content-around mt-5">
                <Button
                  className="w-75 text-dark"
                  style={{ backgroundColor: "#f09e38" }}
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
          <Scanner open={openScanner} close={handleClose} input={handleInput} />
        </div>
      </div>
      {footer && <Footer />}
    </>
  );
}

export default BarcodeScan;

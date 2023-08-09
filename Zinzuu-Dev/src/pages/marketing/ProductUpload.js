import React, { useEffect, useState } from "react";
import { ToastsStore } from "react-toasts";
import CSVReader from "react-csv-reader";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { httpClient } from "../../constants/ApiApp";
import { PRODUCT } from "../../constants/AppConstants";

function ProductUpload() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductList();
  }, []);

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  const handleUploadFile = async (data) => {
    try {
      setIsLoading(true);
      await httpClient
        .post(PRODUCT.UPLOAD_PRODUCTS_CSV, data)
        .then((res) => {
          if (res.status === 201) {
            ToastsStore.success(res.data.message);
            getProductList();
          }
        })
        .catch((err) => {
          if (err.response) {
            ToastsStore.error(err.response.data.message);
          } else {
            ToastsStore.error("Something went wrong.");
          }
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductList = async () => {
    try {
      setIsLoading(true);
      await httpClient
        .get(PRODUCT.GET_PRODUCTS_LIST)
        .then((res) => {
          if (res.status === 200) {
            setProductList(res.data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
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
            <h2 className="yoo-uikits-title">Upload Products</h2>
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
                        <ion-icon name="cloud-upload-outline" />
                      </span>
                      PRODUCT UPLOAD
                    </h2>
                  </div>
                  {isLoading ? (
                    <div >
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <CSVReader
                      cssClass="react-csv-input"
                      onFileLoaded={handleUploadFile}
                      parserOptions={papaparseOptions}
                    />
                  )}
                </div>
                <div className="yoo-card-body">
                  <div className="">
                    <div>
                      <div className="yoo-height-b15 yoo-height-lg-b15" />
                      <div className="yoo-table yoo-style1 yoo-type2">
                        {productList.length > 0 && (
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>UPC</th>
                                <th>SKU</th>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Product Photo</th>
                                <th>Product Category</th>
                                <th>Brand</th>
                                <th>Price </th>
                                <th>Stock</th>
                              </tr>
                            </thead>
                            {productList
                              .filter((data) => data.upc)
                              .map((pro, i) => (
                                <tbody key={i}>
                                  <tr>
                                    <td>{pro.upc} </td>
                                    <td>{pro.sku} </td>
                                    <td>{pro.productName} </td>
                                    <td>{pro.productDescription} </td>
                                    <td className="text-center">
                                      <img
                                        src={pro.productPhoto}
                                        alt=""
                                        width="20%"
                                      />
                                    </td>
                                    <td>{pro.productCategory} </td>
                                    <td>{pro.brand} </td>
                                    <td>{pro.price} </td>
                                    <td>{pro.stock} </td>
                                  </tr>
                                </tbody>
                              ))}
                          </table>
                        )}
                        <div className="yoo-height-b15 yoo-height-lg-b15" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {isLoading && (
          <div className="loader">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )} */}
      </div>
      <div className="yoo-height-b30 yoo-height-lg-b30" />
      <div className="yoo-height-b30 yoo-height-lg-b30" />
      <Footer />
    </>
  );
}

export default ProductUpload;

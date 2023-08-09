import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import { CSVLink } from "react-csv";
import "react-datepicker/dist/react-datepicker.css";
import "../../template/assets/css/pages/datePicker.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import sales from "../../data/sales.json";
import vipSalesData from "../../data/vipSales.json";
import Chart from "react-apexcharts";
var blueColor = "#007aff";
var lightBlueColor = "#5ac8fa";
var labelsStyle = {
  colors: "rgba(0, 0, 0, 0.4)",
  fontSize: "14px",
};
var InterFont = "Inter, sans-serif";
const chartSalesGross = sales.map((e) => {
  return e.gross;
});
const chartSalesNet = sales.map((e) => {
  return e.net;
});
const chartDate = sales.map((e) => {
  return e.date;
});
const chartSalesOptions = {
  chart: {
    type: "bar",
    height: 390,
    fontFamily: InterFont,
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: chartDate,
    labels: {
      style: labelsStyle,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: [blueColor, lightBlueColor],
  legend: {
    horizontalAlign: "left",
    offsetX: 0,
  },
  dataLabels: {
    enabled: false,
  },
};
const chartSalesSeries = [
  {
    name: "Gross",
    data: chartSalesGross,
  },
  {
    name: "Net",
    data: chartSalesNet,
  },
];

const Sales = () => {
  const [vipSales, setVipSales] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setVipSales(vipSalesData);
  }, []);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const data = [...vipSalesData];
    let newData = data.filter((vip) => {
      return (
        vip.name.includes(searchText) || vip.productcode.includes(searchText)
      );
    });
    setVipSales(newData);
  };

  const handleFilter = (val) => {
    const data = [...vipSalesData];
    let newData = data.filter((vip) => {
      return (
        vip.name.includes(val[0].value) ||
        vip.productcode.includes(val[0].value)
      );
    });
    setVipSales(newData);
  };

  const filterByDate = (date) => {
    setStartDate(date);
    const selectedDate = new Date(date).toLocaleDateString();
    const data = [...vipSalesData];
    let newData = data.filter((vip) => {
      return vip.date.includes(selectedDate);
    });
    setVipSales(newData);
  };

  const handleSort = (sortBy) => {
    const data = [...vipSalesData];
    if (sortBy === "name") {
      data.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    } else if (sortBy === "productName") {
      data.sort((a, b) =>
        a.productName > b.productName
          ? 1
          : b.productName > a.productName
          ? -1
          : 0
      );
    } else if (sortBy === "productCode") {
      data.sort((a, b) =>
        a.productcode > b.productcode
          ? 1
          : b.productcode > a.productcode
          ? -1
          : 0
      );
    } else if (sortBy === "price") {
      data.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
    } else if (sortBy === "items") {
      data.sort((a, b) =>
        a.totalItems > b.totalItems ? 1 : b.totalItems > a.totalItems ? -1 : 0
      );
    } else if (sortBy === "totalPrice") {
      data.sort((a, b) =>
        a.totalPrice > b.totalPrice ? 1 : b.totalPrice > a.totalPrice ? -1 : 0
      );
    }
    setVipSales(data);
  };

  const handleDeSort = (sortBy) => {
    const data = [...vipSalesData];
    if (sortBy === "name") {
      data.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
    } else if (sortBy === "productName") {
      data.sort((a, b) =>
        a.productName < b.productName
          ? 1
          : b.productName < a.productName
          ? -1
          : 0
      );
    } else if (sortBy === "productCode") {
      data.sort((a, b) =>
        a.productcode < b.productcode
          ? 1
          : b.productcode < a.productcode
          ? -1
          : 0
      );
    } else if (sortBy === "price") {
      data.sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
    } else if (sortBy === "items") {
      data.sort((a, b) =>
        a.totalItems < b.totalItems ? 1 : b.totalItems < a.totalItems ? -1 : 0
      );
    } else if (sortBy === "totalPrice") {
      data.sort((a, b) =>
        a.totalPrice < b.totalPrice ? 1 : b.totalPrice < a.totalPrice ? -1 : 0
      );
    }
    setVipSales(data);
  };
  const csvReport = {
    data: vipSales,
    filename: 'Sales_Report.csv'
  };
  let template;
  template = (
    <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="yoo-uikits-heading d-flex justify-content-between">
            <h2 className="yoo-uikits-title">Sales Report</h2>
            <CSVLink {...csvReport}>
              <button className="btn btn-primary">Export Data</button>
            </CSVLink>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  <div className="yoo-card-heading-left">
                    <h2 className="yoo-card-title">
                      <span className="yoo-card-title-icon yoo-indigo-bg">
                        <ion-icon name="cloudy" />
                      </span>
                      SALES REPORT
                    </h2>
                  </div>
                  <div className="yoo-card-heading-right">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#AreaCharts"
                        >
                          GROSS/NET/COMMISSIONS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="yoo-card-body">
                  <div className="yoo-padd-lr-20">
                    <div className="yoo-height-b20 yoo-height-lg-b20" />
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="AreaCharts"
                      >
                        <div className="yooChart">
                          <Chart
                            options={chartSalesOptions}
                            series={chartSalesSeries}
                            type="bar"
                            height="403"
                          />
                        </div>
                        <div className="yoo-height-b5 yoo-height-lg-b5" />
                      </div>
                    </div>
                    <div className="yoo-height-b0 yoo-height-lg-b0" />
                  </div>
                </div>
              </div>
              <div className="yoo-height-b30 yoo-height-lg-b30" />
            </div> */}
            {/* <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  <div className="yoo-card-heading-left" />
                </div>
                <div className="yoo-card-body">
                  <div className="">
                    <div>
                      <div className="yoo-height-b15 yoo-height-lg-b15" />
                      <div className="yoo-table yoo-style1 yoo-type2">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Gross</th>
                              <th>Net</th>
                              <th>Commissions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sales.map((e) => {
                              return (
                                <tr>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">
                                      ${e.gross}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">
                                      ${e.net}
                                    </div>
                                  </td>
                                  <td>
                                    <span className="yoo-base-color1">
                                      ${e.commissions}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className="yoo-height-b15 yoo-height-lg-b15" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yoo-height-b30 yoo-height-lg-b30" />
            </div> */}
            <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  {/* <div className="yoo-card-heading-left">VIP SALES REPORT</div> */}
                  <div className="d-flex justify-content-between justify-content-center w-100">
                    <div className="yoo-search yoo-style1 yoo-search-md">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="yoo-search-input"
                        onChange={handleSearch}
                      />
                      <button className="yoo-search-submit">
                        <ion-icon name="search" />
                      </button>
                    </div>
                    <div className="w-25">
                      <Select
                        options={[
                          { label: "Vikas", value: "vikas" },
                          { label: "Gurdeep", value: "gurdeep" },
                          { label: "Rajat", value: "rajat" },
                        ]}
                        // onChange={(value) => setFilterObj({ name: value })}
                        onChange={(e) => handleFilter(e)}
                      />
                    </div>
                    <div className="w-25">
                      <Select
                        options={[
                          { label: "0614141000036", value: "0614141000036" },
                          { label: "0036000291452", value: "0036000291452" },
                        ]}
                        // onChange={(value) =>
                        //   setFilterObj({ productCode: value })
                        // }
                        onChange={(e) => handleFilter(e)}
                      />
                    </div>
                    <div>
                      <DatePicker
                        clasName="p-1"
                        selected={startDate}
                        onChange={(date) => filterByDate(date)}
                      />
                    </div>
                    {/* <button className="btn btn-primary" onClick={handleFilter}>
                      Filter
                    </button> */}
                  </div>
                </div>
                <div className="yoo-card-body">
                  <div className="">
                    <div>
                      <div className="yoo-height-b15 yoo-height-lg-b15" />
                      <div className="yoo-table yoo-style1 yoo-type2">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>
                                Name
                                <div>
                                  <ion-icon
                                    name="caret-up-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSort("name")}
                                  />{" "}
                                  <ion-icon
                                    name="caret-down-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDeSort("name")}
                                  />
                                </div>
                              </th>
                              <th>
                                Product Name
                                <div>
                                  <ion-icon
                                    name="caret-up-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSort("productName")}
                                  />
                                  <ion-icon
                                    name="caret-down-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDeSort("productName")}
                                  />
                                </div>
                              </th>
                              <th>
                                Product Code
                                <div>
                                  <ion-icon
                                    name="caret-up-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSort("productCode")}
                                  />
                                  <ion-icon
                                    name="caret-down-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDeSort("productCode")}
                                  />
                                </div>
                              </th>
                              <th>
                                Price
                                <div>
                                  <ion-icon
                                    name="caret-up-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSort("price")}
                                  />
                                  <ion-icon
                                    name="caret-down-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDeSort("price")}
                                  />
                                </div>
                              </th>
                              <th>
                                Items
                                <div>
                                  <ion-icon
                                    name="caret-up-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSort("items")}
                                  />
                                  <ion-icon
                                    name="caret-down-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDeSort("items")}
                                  />
                                </div>
                              </th>
                              <th style={{ width: "15%" }}>
                                Total Price
                                <div>
                                  <ion-icon
                                    name="caret-up-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSort("totalPrice")}
                                  />
                                  <ion-icon
                                    name="caret-down-outline"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDeSort("totalPrice")}
                                  />
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {vipSales.map((e) => {
                              return (
                                <tr>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">
                                      {e.name}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">
                                      {e.productName}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">
                                      {e.productcode}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">
                                      $ {e.price}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="yoo-line-1-2 yoo-base-color1">
                                      {e.totalItems}
                                    </div>
                                  </td>
                                  <td>
                                    <span className="yoo-base-color1">
                                      ${e.totalPrice}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className="yoo-height-b15 yoo-height-lg-b15" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yoo-height-b30 yoo-height-lg-b30" />
            </div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30" />
        <Footer />
      </div>
    </>
  );
  return template;
};

export default Sales;

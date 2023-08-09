import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
import sales from '../../data/sales.json';
import Chart from 'react-apexcharts';
var blueColor = '#007aff';
var lightBlueColor = '#5ac8fa';
var labelsStyle = {
  colors: 'rgba(0, 0, 0, 0.4)',
  fontSize: '14px'
}
var InterFont = 'Inter, sans-serif';
const chartCommissions = (sales.map(e => { return e.commissions}));
const chartDate = (sales.map(e => { return e.date}));
const chartOptions = {
  chart: {
    type: 'bar',
    height: 390,
    fontFamily: InterFont,
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: chartDate,
    labels: {
      style: labelsStyle
    },
    axisBorder: {
      show: false
    },
  },
  yaxis: {
    labels: {
      show: false
    },
  },
  colors: [blueColor, lightBlueColor],
  legend: {
    horizontalAlign: 'left',
    offsetX: 0
  },
  dataLabels: {
    enabled: false
  }
};
const chartSeries = [ {
  name: 'Commissions',
  data: chartCommissions
}];
const Commissions = () => {
  let template;
  template = (
      <>
      <Header />
      <Sidebar />
      <div className="yoo-content yoo-style1">
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        <div className="container">
          <div className="yoo-uikits-heading">
            <h2 className="yoo-uikits-title">Commissions Report</h2>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        <div className="container">
          <div className="row">
          <div className="col-lg-12">
              <div className="yoo-card yoo-style1">
                <div className="yoo-card-heading">
                  <div className="yoo-card-heading-left">
                    <h2 className="yoo-card-title"><span className="yoo-card-title-icon yoo-indigo-bg"><ion-icon name="cloudy"></ion-icon></span>COMMISSIONS REPORT</h2>
                  </div>
                </div>
                <div className="yoo-card-body">
                  <div className="yoo-padd-lr-20">
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="AreaCharts">
                        <div className="yooChart"><Chart options={chartOptions} series={chartSeries} type="bar" height="403" /></div>
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
                            </tr>
                          </thead>
                          <tbody>
                              {
                                sales.map(e => {
                                  return (
                                    <tr>
                                      <td>
                                        <div className="yoo-line-1-2 yoo-base-color1">${e.gross}</div>
                                      </td>
                                      <td>
                                        <div className="yoo-line-1-2 yoo-base-color1">${e.net}</div>
                                      </td>
                                      <td><span className="yoo-base-color1">${e.commissions}</span></td>
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

export default Commissions;
import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import sales from '../../data/sales.json';
import emails from '../../data/emails.json';
import sms from '../../data/sms.json';
class DashboardAnalytics extends Component {
  constructor(props) {
    super(props);
    // Color Variables
  var blueColor = '#007aff';

  // Labels Style Variable
  var labelsStyle = {
    colors: 'rgba(0, 0, 0, 0.4)',
    fontSize: '14px'
  }

  // Font Family Variable
  var InterFont = 'Inter, sans-serif';

    this.state = {
      options: {
        chart: {
          type: 'area',
          height: 403,
          fontFamily: InterFont,
          toolbar: {
            show: false
          }
        },
        xaxis: {
          type: "datetime",
          labels: {
            style: labelsStyle
          },
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: labelsStyle
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.60,
            opacityTo: 0.08
          },
        },
        colors: [blueColor],
        markers: {
          size: 0,
          colors: ["#fff"],
          strokeColors: [blueColor],
          strokeWidth: 3,
          hover: {
            size: 6,
          }
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        }
      },
      series: [{
        name: "Followers",
        data: [
          { x: "2019-05-10 00:00:03", y: "5428" },
          { x: "2019-05-10 01:00:03", y: "5428" },
          { x: "2019-05-10 02:00:02", y: "5429" },
          { x: "2019-05-10 03:00:02", y: "5431" },
          { x: "2019-05-10 04:00:03", y: "5430" },
          { x: "2019-05-10 05:00:02", y: "5427" },
          { x: "2019-05-10 06:00:02", y: "5427" },
          { x: "2019-05-10 07:00:03", y: "5430" },
          { x: "2019-05-10 08:00:02", y: "5429" },
          { x: "2019-05-10 09:00:03", y: "5433" },
          { x: "2019-05-10 10:00:03", y: "5431" },
          { x: "2019-05-10 11:00:03", y: "5431" },
          { x: "2019-05-10 12:00:02", y: "5432" },
          { x: "2019-05-10 13:00:03", y: "5435" },
          { x: "2019-05-10 14:00:02", y: "5438" },
          { x: "2019-05-10 15:00:03", y: "5438" },
          { x: "2019-05-10 16:00:02", y: "5440" },
          { x: "2019-05-10 17:00:03", y: "5441" },
          { x: "2019-05-10 18:00:02", y: "5441" },
          { x: "2019-05-10 19:00:03", y: "5436" },
          { x: "2019-05-10 20:00:03", y: "5438" },
          { x: "2019-05-10 21:00:03", y: "5437" },
          { x: "2019-05-10 22:00:02", y: "5474" },
          { x: "2019-05-10 23:00:02", y: "5487" },
          { x: "2019-05-11 00:00:03", y: "5494" },
          { x: "2019-05-11 01:00:03", y: "5503" },
          { x: "2019-05-11 02:00:02", y: "5511" },
          { x: "2019-05-11 03:00:03", y: "5511" },
          { x: "2019-05-11 04:00:02", y: "5510" },
          { x: "2019-05-11 05:00:02", y: "5513" },
          { x: "2019-05-11 06:00:03", y: "5519" },
          { x: "2019-05-11 07:00:03", y: "5519" },
          { x: "2019-05-11 08:00:03", y: "5523" },
          { x: "2019-05-11 09:00:02", y: "5519" },
          { x: "2019-05-11 10:00:03", y: "5524" },
          { x: "2019-05-11 11:00:02", y: "5522" },
          { x: "2019-05-11 12:00:02", y: "5527" },
          { x: "2019-05-11 13:00:02", y: "5528" },
          { x: "2019-05-11 14:00:02", y: "5539" },
          { x: "2019-05-11 15:00:02", y: "5541" },
          { x: "2019-05-11 16:00:02", y: "5539" },
          { x: "2019-05-11 17:00:02", y: "5546" },
          { x: "2019-05-11 18:00:03", y: "5542" },
          { x: "2019-05-11 19:00:03", y: "5554" },
          { x: "2019-05-11 20:00:02", y: "5572" },
          { x: "2019-05-11 21:00:02", y: "5576" },
          { x: "2019-05-11 22:00:03", y: "5574" },
          { x: "2019-05-11 23:00:02", y: "5573" },
          { x: "2019-05-12 00:00:02", y: "5581" },
          { x: "2019-05-12 01:00:02", y: "5585" },
          { x: "2019-05-12 02:00:02", y: "5590" },
          { x: "2019-05-12 03:00:02", y: "5596" },
          { x: "2019-05-12 04:00:03", y: "5598" },
          { x: "2019-05-12 05:00:02", y: "5600" },
          { x: "2019-05-12 06:00:02", y: "5604" },
          { x: "2019-05-12 07:00:02", y: "5603" },
          { x: "2019-05-12 08:00:03", y: "5606" },
          { x: "2019-05-12 09:00:02", y: "5609" },
          { x: "2019-05-12 10:00:03", y: "5608" },
          { x: "2019-05-12 11:00:04", y: "5613" },
          { x: "2019-05-12 12:00:02", y: "5613" },
          { x: "2019-05-12 13:00:03", y: "5604" },
          { x: "2019-05-12 14:00:02", y: "5613" },
          { x: "2019-05-12 15:00:02", y: "5619" },
          { x: "2019-05-12 16:00:02", y: "5621" },
          { x: "2019-05-12 17:00:02", y: "5627" },
          { x: "2019-05-12 18:00:02", y: "5613" },
          { x: "2019-05-12 19:00:02", y: "5618" },
          { x: "2019-05-12 20:00:02", y: "5619" },
          { x: "2019-05-12 21:00:02", y: "5620" },
          { x: "2019-05-12 22:00:03", y: "5624" },
          { x: "2019-05-12 23:00:02", y: "5631" },
          { x: "2019-05-13 00:00:02", y: "5634" },
          { x: "2019-05-13 01:00:03", y: "5638" },
          { x: "2019-05-13 02:00:02", y: "5637" },
          { x: "2019-05-13 03:00:02", y: "5636" },
          { x: "2019-05-13 04:00:03", y: "5640" },
          { x: "2019-05-13 05:00:02", y: "5641" },
          { x: "2019-05-13 06:00:02", y: "5640" },
          { x: "2019-05-13 07:00:03", y: "5637" },
          { x: "2019-05-13 08:00:02", y: "5638" },
          { x: "2019-05-13 09:00:02", y: "5638" },
          { x: "2019-05-13 10:00:02", y: "5644" },
          { x: "2019-05-13 11:00:02", y: "5653" },
          { x: "2019-05-13 12:00:02", y: "5663" },
          { x: "2019-05-13 13:00:03", y: "5659" },
          { x: "2019-05-13 14:00:02", y: "5658" },
          { x: "2019-05-13 15:00:03", y: "5654" },
          { x: "2019-05-13 16:00:02", y: "5658" },
          { x: "2019-05-13 17:00:02", y: "5659" },
          { x: "2019-05-13 18:00:02", y: "5660" },
          { x: "2019-05-13 19:00:01", y: "5669" },
          { x: "2019-05-13 20:00:02", y: "5671" },
          { x: "2019-05-13 21:00:02", y: "5676" },
          { x: "2019-05-13 22:00:03", y: "5682" },
          { x: "2019-05-13 23:00:02", y: "5692" },
          { x: "2019-05-14 00:00:03", y: "5695" },
          { x: "2019-05-14 01:00:03", y: "5697" },
          { x: "2019-05-14 02:00:03", y: "5702" },
          { x: "2019-05-14 03:00:02", y: "5701" },
          { x: "2019-05-14 04:00:03", y: "5699" },
          { x: "2019-05-14 05:00:02", y: "5699" },
          { x: "2019-05-14 06:00:03", y: "5701" },
          { x: "2019-05-14 07:00:02", y: "5702" },
          { x: "2019-05-14 08:00:02", y: "5702" },
          { x: "2019-05-14 09:00:03", y: "5707" }
        ]
      }]
    }
  }
render () {
  let blueColor = '#007aff';
  let lightBlueColor = '#5ac8fa';
  let labelsStyle = {
    colors: 'rgba(0, 0, 0, 0.4)',
    fontSize: '14px'
  }
  let InterFont = 'Inter, sans-serif';
  const chartSalesGross = (sales.map(e => { return e.gross}));
  const chartSalesNet = (sales.map(e => { return e.net}));
  const chartCommissions = (sales.map(e => { return e.commissions}));
  const chartDate = (sales.map(e => { return e.date}));
  const emailsData = (emails.map(e => { return e.total}));
  const smsData = (sms.map(e => { return e.total}));
  const chartSalesOptions = {
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
  const chartSalesSeries = [{
    name: 'Gross',
    data: chartSalesGross
  }, {
    name: 'Net',
    data: chartSalesNet
  }];
  const chartCommissionsSeries = [{
    name: 'Commissions',
    data: chartCommissions
  }];
  const chartEmailsSeries = [{
    name: 'Emails',
    data: emailsData
  }];
  const chartSmsSeries = [{
    name: 'SMS',
    data: smsData
  }];
    return (
        <div className="col-lg-8">
          <div className="yoo-card yoo-style1">
            <div className="yoo-card-heading">
              <div className="yoo-card-heading-left">
                <h2 className="yoo-card-title"><span className="yoo-card-title-icon yoo-indigo-bg"><ion-icon name="cloudy"></ion-icon></span>ANALYTICS</h2>
              </div>
            </div>
            <div className="yoo-card-body">
              <div className="yoo-padd-lr-20">
                <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="SalesChart">
                    <div className="yooChart6"><Chart options={chartSalesOptions} series={chartSalesSeries} type="bar" height="403" /></div>
                    <div className="yoo-height-b5 yoo-height-lg-b5"></div>
                  </div>
                  <div className="tab-pane fade" id="CommissionsChart">
                    <div className="yooChart6"><Chart options={chartSalesOptions} series={chartCommissionsSeries} type="bar" height="403" /></div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  </div>
                  <div className="tab-pane fade" id="PartnersChart">
                    <div className="yooChart6"><Chart options={chartSalesOptions} series={chartSalesSeries} type="bar" height="403" /></div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  </div>
                  <div className="tab-pane fade" id="CustomersChart">
                    <div className="yooChart6"><Chart options={chartSalesOptions} series={chartSalesSeries} type="bar" height="403" /></div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  </div>
                  <div className="tab-pane fade" id="EmailsChart">
                    <div className="yooChart6"><Chart options={chartSalesOptions} series={chartEmailsSeries} type="bar" height="403" /></div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  </div>
                  <div className="tab-pane fade" id="SmsChart">
                    <div className="yooChart6"><Chart options={chartSalesOptions} series={chartSmsSeries} type="bar" height="403" /></div>
                    <div className="yoo-height-b20 yoo-height-lg-b20"></div>
                  </div>
                </div>
                <div className="yoo-height-b0 yoo-height-lg-b0"></div>
              </div>
            </div>
          </div>
          <div className="yoo-height-b30 yoo-height-lg-b30"></div>
        </div>
      );
};
}
export default DashboardAnalytics;
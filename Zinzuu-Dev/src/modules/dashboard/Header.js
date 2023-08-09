import React, {Component} from 'react';

export default class DashboardHeader extends Component {
  render () {
    return (
    <div className="row">
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-blue-bg yoo-blue-shadow" data-toggle="tab" href="#SalesChart" onClick={ () =>this.props.UpdateChartAndTable('SalesChart')}>
          <div className="yoo-iconbox-in">
            <div className="yoo-iconbox-title">TOTAL SALES</div>
            <div className="yoo-iconbox-number">$350,897</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-up"></ion-icon>17%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="albums"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-green-bg yoo-green-shadow" data-toggle="tab" href="#CommissionsChart" onClick={ () =>this.props.UpdateChartAndTable('CommissionsChart')}>
          <div className="yoo-iconbox-in">
            <div className="yoo-iconbox-title">COMISSIONS</div>
            <div className="yoo-iconbox-number">$15,508</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-up"></ion-icon>5%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="people"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-gray-bg yoo-gray-shadow" data-toggle="tab" href="#PartnersChart" onClick={ () =>this.props.UpdateChartAndTable('PartnersChart')}>
          <div className="yoo-iconbox-in">
            <div className="yoo-iconbox-title">PARTNERS</div>
            <div className="yoo-iconbox-number">45,089</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-down"></ion-icon>8%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="layers"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-light-blue-bg yoo-light-blue-shadow" data-toggle="tab" href="#CustomersChart" onClick={ () =>this.props.UpdateChartAndTable('CustomersChart')}>
          <div className="yoo-iconbox-in">
            <div className="yoo-iconbox-title">NEW CUSTOMERS</div>
            <div className="yoo-iconbox-number">529</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-up"></ion-icon>12%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="file-tray"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-light-blue-bg yoo-light-blue-shadow" data-toggle="tab" href="#EmailsChart" onClick={ () =>this.props.UpdateChartAndTable('EmailsChart')}>
          <div className="yoo-iconbox-in">
            <div className="yoo-iconbox-title">Total Emails</div>
            <div className="yoo-iconbox-number">845</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-up"></ion-icon>9%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="file-tray"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-gray-bg yoo-gray-shadow" data-toggle="tab" href="#SmsChart" onClick={ () =>this.props.UpdateChartAndTable('SmsChart')}>
          <div className="yoo-iconbox-in">
            <div className="yoo-iconbox-title">Total SMS</div>
            <div className="yoo-iconbox-number">256</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-down"></ion-icon>2%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="file-tray"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
    </div>
    )
  }
}
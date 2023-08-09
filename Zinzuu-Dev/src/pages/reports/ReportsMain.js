import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';


const Main = () => {
    let template;
    template = (
        <>
        <Header />
        <Sidebar />
        <div className="yoo-content yoo-style1">
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container-fluid">
      <div className="yoo-uikits-heading">
        <h2 className="yoo-uikits-title">Reports</h2>
      </div>
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="row">
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-blue-bg yoo-blue-shadow">
          <div className="yoo-iconbox-in" onClick={()=> window.open("/reports/partner")} style={{cursor:'pointer'}}>
            <div className="yoo-iconbox-title">Partner Report</div>
            <div className="yoo-iconbox-number">$350,897</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-up"></ion-icon>17%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="albums"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-green-bg yoo-green-shadow">
        <div className="yoo-iconbox-in" onClick={()=> window.open("/reports/customer")} style={{cursor:'pointer'}}>
          <div className="yoo-iconbox-title">Customer Report</div>
            <div className="yoo-iconbox-number">$15,508</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-up"></ion-icon>5%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="people"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-gray-bg yoo-gray-shadow">
        <div className="yoo-iconbox-in" onClick={()=> window.open("/reports/sales")} style={{cursor:'pointer'}}>
            <div className="yoo-iconbox-title">Sales Report</div>
            <div className="yoo-iconbox-number">$45,089</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-down"></ion-icon>8%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="layers"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="yoo-iconbox yoo-style1 yoo-color1 yoo-light-blue-bg yoo-light-blue-shadow">
        <div className="yoo-iconbox-in" onClick={()=> window.open("/reports/commissions")} style={{cursor:'pointer'}}>
            <div className="yoo-iconbox-title">Commissions</div>
            <div className="yoo-iconbox-number">529</div>
            <div className="yoo-iconbox-footer"><span className="yoo-iconbox-percentage"><ion-icon name="caret-up"></ion-icon>12%</span>Since last week</div>
            <div className="yoo-iconbox-icon"><ion-icon name="file-tray"></ion-icon></div>
          </div>
        </div>
        <div className="yoo-height-b30 yoo-height-lg-b30"></div>
      </div>
    </div>
      </div>
    </div>
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <Footer />
    </>
    );
    
    return template;
};

export default Main;
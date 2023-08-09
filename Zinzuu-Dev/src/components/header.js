import Logo from '../../src/logo_555.jpg';

const Header = () => {
    function getToken() {
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      if (userToken && userToken[0].success === true) return userToken[1];
    }

    const token = getToken();
    const logoStyle = {
        backgroundColor : 'white',
        paddingLeft : '20px',
        paddingRight : '20px',
        paddingBottom : '10px',
        marginLeft : '51px',
        paddingTop : '10px'
    }
    const logoImage = {
        backgroundColor : 'white',
        width : '125px',
        height : '32px'
    }
    return (
        <div>
            <div className="yoo-height-b60 yoo-height-lg-b60"></div>
  <header className="yoo-header yoo-style1 yoo-sticky-menu">
    <div className="yoo-main-header">
      <div className="yoo-main-header-in">
        <div className="yoo-main-header-left">
          <a href="/partner/" className="yoo-logo-link yoo-light-logo" style={logoStyle}><img src={Logo} alt="logo-light" style={logoImage} /></a>
        </div>
        <div className="yoo-main-header-right">
          <div className="yoo-nav-wrap yoo-fade-up">
            <div className="yoo-nav-toggle">
              <ion-icon name="ellipsis-vertical"></ion-icon>
            </div>
            <nav className="yoo-nav yoo-desktop-nav">
              <ul className="yoo-nav-list">
                <li><a href="/partner/"><ion-icon name="albums"></ion-icon> Dashboard</a></li>
                <li><a href="/partner/reports/partner"><ion-icon name="people-outline"></ion-icon> Partner</a></li>
				        <li><a href="/partner/reports/customer"><ion-icon name="folder"></ion-icon> Customer</a></li>
				        <li><a href="/partner/reports/sales"><ion-icon name="bar-chart-outline"></ion-icon> Sales</a></li>
				        <li><a href="/partner/reports/comissions"><ion-icon name="logo-usd"></ion-icon> Commissions</a></li>
                <li><a href="/partner/marketing"><ion-icon name="create"></ion-icon>Marketing</a></li>
                <li><a href="/partner/orders"><ion-icon name="person-circle"></ion-icon>Orders</a></li>
				        <li><a href="/partner/training"><ion-icon name="reader"></ion-icon> Training</a></li>
              </ul>
            </nav>
          </div>
          <ul className="yoo-ex-nav yoo-style1 yoo-flex yoo-mp0">
            <li>
              <div className="yoo-toggle-body yoo-profile-nav yoo-style1">
                <div className="yoo-toggle-btn yoo-profile-nav-btn">
                  <div className="yoo-profile-nav-text">
                    <span>Welcome,</span>
                    <h4>{token.firstname} {token.lastname}</h4>
                  </div>
                  <div className="yoo-profile-nav-img">
                    <img src="/static/media/logo_555.36cd4226.jpg" alt="profile" />
                  </div>
                </div>
                <ul className="yoo-dropdown yoo-style1">
                  <li>
                    <a href="/partner/profile"><ion-icon name="person-circle"></ion-icon>My Profile</a>
                  </li>
                  <li>
                    <a href="/partner/"><ion-icon name="videocam"></ion-icon>Upload</a>
                  </li>
                  <li>
                    <a href="/partner/"><ion-icon name="help-circle"></ion-icon>Help</a>
                  </li>
                  <li className="yoo-dropdown-cta"><a href="/partner/logout">Sign Out</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
        </div>
      );
};

export default Header;
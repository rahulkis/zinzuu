import { useState } from "react";

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showCommisonSubMenu, setShowCommissionSubMenu] = useState(false);
  function getToken() {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    if (userToken && userToken[0].success === true) return userToken[2];
  }
  const handleShowSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  const token = getToken();
  return (
    <div>
      <div className="yoo-sidebarheader-toggle">
        <div className="yoo-button-bar1" />
        <div className="yoo-button-bar2" />
        <div className="yoo-button-bar3" />
      </div>
      <div className="yoo-sidebarheader">
        <div className="yoo-sidebarheader-in" data-scrollbar>
          <div
            className="yoo-sidebar-nav"
            style={{
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <span className="yoo-sidebar-link-text">
              Role: {token.description}
            </span>
          </div>
          <div className="yoo-sidebar-search">
            <form action="/" className="yoo-search yoo-style1 yoo-search-md">
              <input
                type="text"
                placeholder="Search..."
                className="yoo-search-input"
              />
              <button className="yoo-search-submit">
                <ion-icon name="search" />
              </button>
              <button className="yoo-voice-btn">
                <ion-icon name="mic" />
              </button>
            </form>
          </div>
          <div className="yoo-sidebar-nav">
            <ul className="yoo-sidebar-nav-list yoo-mp0">
              <li className="active">
                <a href="/partner/">
                  <span className="yoo-sidebar-link-title">
                    <span className="yoo-sidebar-link-icon yoo-style1">
                      <ion-icon name="layers" />
                    </span>
                    <span className="yoo-sidebar-link-text">Dashboard</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/partner/reports/partner">
                  <span className="yoo-sidebar-link-title">
                    <span className="yoo-sidebar-link-icon yoo-style1">
                      <ion-icon name="people-outline" />
                    </span>
                    <span className="yoo-sidebar-link-text">Partner</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/partner/reports/customer">
                  <span className="yoo-sidebar-link-title">
                    <span className="yoo-sidebar-link-icon yoo-style1">
                      <ion-icon name="folder" />
                    </span>
                    <span className="yoo-sidebar-link-text">Customer</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/partner/reports/sales">
                  <span className="yoo-sidebar-link-title">
                    <span className="yoo-sidebar-link-icon yoo-style1">
                      <ion-icon name="bar-chart-outline" />
                    </span>
                    <span className="yoo-sidebar-link-text">Sales</span>
                  </span>
                </a>
              </li>
              {token.roles_id === 1 && (
                <li>
                  <a
                    href="#"
                    onClick={() =>
                      setShowCommissionSubMenu(!showCommisonSubMenu)
                    }
                  >
                    {/* <a href="/partner/reports/comissions"> */}
                    <span className="yoo-sidebar-link-title">
                      <span className="yoo-sidebar-link-icon yoo-style1">
                        <ion-icon name="logo-usd" />
                      </span>
                      <span className="yoo-sidebar-link-text">Comissions</span>
                    </span>
                    {showCommisonSubMenu ? (
                      <ion-icon name="caret-up-circle-outline" />
                    ) : (
                      <ion-icon name="caret-down-circle-outline" />
                    )}
                  </a>
                </li>
              )}
              {showCommisonSubMenu && (
                <ul className="yoo-sidebar-nav-list yoo-mp0">
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/comissions/global-comissions">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="globe-outline" />
                        </span>
                        <span className="yoo-sidebar-link-text">
                          Global Commission Rates
                        </span>
                      </span>
                    </a>
                  </li>
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/comissions/custom-comissions">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="logo-usd" />
                        </span>
                        <span className="yoo-sidebar-link-text">
                          Custom Commission Rates
                        </span>
                      </span>
                    </a>
                  </li>
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="#">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="list-circle-outline" />
                        </span>
                        <span className="yoo-sidebar-link-text">Reports</span>
                      </span>
                    </a>
                  </li>
                </ul>
              )}
              <li>
                <a href="#" onClick={handleShowSubMenu}>
                  <span className="yoo-sidebar-link-title">
                    <span className="yoo-sidebar-link-icon yoo-style1">
                      <ion-icon name="create" />
                    </span>
                    <span className="yoo-sidebar-link-text">Marketing </span>
                  </span>
                  {showSubMenu ? (
                    <ion-icon name="caret-up-circle-outline" />
                  ) : (
                    <ion-icon name="caret-down-circle-outline" />
                  )}
                </a>
              </li>
              {showSubMenu && (
                <ul className="yoo-sidebar-nav-list yoo-mp0">
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/marketing/mail-templates">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="create" />
                        </span>
                        <span className="yoo-sidebar-link-text">
                          Email Templates
                        </span>
                      </span>
                    </a>
                  </li>
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/marketing">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="create" />
                        </span>
                        <span className="yoo-sidebar-link-text">Report</span>
                      </span>
                    </a>
                  </li>
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/marketing/upload-product">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="cloud-upload-outline" />
                        </span>
                        <span className="yoo-sidebar-link-text">
                          Upload Products
                        </span>
                      </span>
                    </a>
                  </li>
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/marketing/generate-qr">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="qr-code-outline" />
                        </span>
                        <span className="yoo-sidebar-link-text">
                          Generate QR
                        </span>
                      </span>
                    </a>
                  </li>
                  {/* <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/marketing/upc-scanner">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="scan-outline" />
                        </span>
                        <span className="yoo-sidebar-link-text">
                          UPC Scanner
                        </span>
                      </span>
                    </a>
                  </li>
                  <li
                    className="d-flex "
                    style={{ paddingLeft: "30px", justifyContent: "normal" }}
                  >
                    <a href="/partner/marketing/refer">
                      <span className="yoo-sidebar-link-title">
                        <span className="yoo-sidebar-link-icon yoo-style1">
                          <ion-icon name="share-social-outline" />
                        </span>
                        <span className="yoo-sidebar-link-text">
                          Refer a friend
                        </span>
                      </span>
                    </a>
                  </li>
                  */}
                </ul>
              )}
              <li>
                <a href="/partner/orders">
                  <span className="yoo-sidebar-link-title">
                    <span className="yoo-sidebar-link-icon yoo-style1">
                      <ion-icon name="person-circle" />
                    </span>
                    <span className="yoo-sidebar-link-text">Orders</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/partner/training">
                  <span className="yoo-sidebar-link-title">
                    <span className="yoo-sidebar-link-icon yoo-style1">
                      <ion-icon name="reader" />
                    </span>
                    <span className="yoo-sidebar-link-text">Training</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

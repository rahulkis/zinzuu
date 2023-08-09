import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';


const Customer = () => {
    let template;
    template = (
        <>
        <Header />
        <Sidebar />
        <div className="yoo-content yoo-style1">
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container">
      <div className="yoo-uikits-heading">
        <h2 className="yoo-uikits-title">Training</h2>
      </div>
    </div>
    <div className="yoo-height-b30 yoo-height-lg-b30"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="yoo-documentation-body">
            <div className="yoo-height-b5 yoo-height-lg-b5"></div>
            <h4>Introduction</h4>
            <p>iDashboard is a part of our premium Dashboard called iDashboardPro. We are using the famous Bootstrap 4 framework and maintain iOS Design pattern. The technology that we are using is HTML5, CSS3, jQuery and we are using CSS preprocessor SASS. It is super easy to customize and 100% responsive.</p>
            <p>It can be used for most types of dashboards and app templates. It has all types of the component which needs for developing any types of web app or website. If you can't see any feature that you need for your project on this free version, definitely you should use iDashboardPro, here we added all kinds of possible features, components, and elements for Dashboard.</p>
            <div className="yoo-height-b15 yoo-height-lg-b15"></div>
            <h4>Installation</h4>
            <p>iDashboard can be installed using multiple methods. Pick your favorite method from the list below.</p>
            <h5>Via NPM</h5>
            <pre>npm i idashboard</pre>
            <div className="yoo-height-b25 yoo-height-lg-b25"></div>
            <h5>Via Git</h5>
            <ul>
              <li>You can fork <a href="https://github.com/yookits/idashboard" >iDashboard Repository</a>. GitHub fork <a href="https://help.github.com/en/github/getting-started-with-github/fork-a-repo">Guidline</a></li>
              <li>
                Clone your machine by using this Command<br />
                <pre>git clone https://github.com/yookits/idashboard.git</pre>
              </li>
            </ul>
            <div className="yoo-height-b25 yoo-height-lg-b25"></div>
            <h4>Files Structure</h4>
            <div className="yoo-doc-box">
              <ul className="yoo-structure-list">
                <li>
                  <span>Admint</span>
                  <ul>
                    <li>
                      <span>assets</span>
                      <ul>
                        <li>css</li>
                        <li>scss</li>
                        <li>fonts</li>
                        <li>img</li>
                        <li>js</li>
                      </ul>
                    </li>
                    <li>
                      <span>index.html</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="yoo-height-b35 yoo-height-lg-b35"></div>
            <h4>Stylesheets</h4>
            <p>We have own CSS className naming convention that begins with prefix 'yoo-'. Some examples of iDashboard className names would be: yoo-main-header, yoo-sidebarheader, yoo-footer. For this naming convention, you can integrate unlimited 3rd party plugins and resources without worrying about className naming conflicts. However for Bootstrap and other 3rd party plugins className extending we used their own CSS naming format.</p>
            <p>We use SASS as a CSS preprocessor. SASS is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
            <p>If don't know SASS coding, don't worry you can directly edit CSS file.</p>
            <div className="yoo-height-b35 yoo-height-lg-b35"></div>
            <h4>CSS Helper classNamees</h4>
            <p>We are creating some global className for easy work.</p>
            <div className="yoo-card yoo-style1">
              <div className="yoo-table yoo-style1 yoo-type1 table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>className</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        yoo-margin-[size]<br />
                        yoo-margin-top-[size]<br />
                        yoo-margin-bottom-[size]<br />
                        yoo-margin-left-[size]<br />
                        yoo-margin-right-[size]
                      </td>
                      <td className="text-left w-50">Margin helper classNamees where [size] can accept 0 to 15. Example: yoo-margin-0, yoo-margin-top-15</td>
                    </tr>
                    <tr>
                      <td>
                        yoo-padding-[size]<br />
                        yoo-padding-top-[size]<br />
                        yoo-padding-bottom-[size]<br />
                        yoo-padding-left-[size]<br />
                        yoo-padding-right-[size]
                      </td>
                      <td className="text-left w-50">Margin helper classNamees where [size] can accept 0 to 15. Example: yoo-padding-0, yoo-padding-top-15</td>
                    </tr>
                    <tr>
                      <td>yoo-height-b[size] - This is for Larg Screen <br />yoo-height-lg-b[size] - This is for Mobile Screen</td>
                      <td className="text-left w-50">Space helper classNamees where [size] can accept 0, 5, 10, 15, 20. Example: yoo-height-b10, yoo-height-lg-b20</td>
                    </tr>
                    <tr>
                      <td>yoo-font-style-i</td>
                      <td className="text-left w-50">Italic Font helper classNamees.</td>
                    </tr>
                    <tr>
                      <td>
                        yoo-text-transform-u<br />
                        yoo-text-transform-l<br />
                        yoo-text-transform-c
                      </td>
                      <td className="text-left w-50">Text transform helper classNamees.</td>
                    </tr>
                    <tr>
                      <td>yoo-font-[weight]</td>
                      <td className="text-left w-50">Weight helper classNamees where [weight] can accept light, regular, medium, semi-bold, bold, black. Example: yoo-font-bold</td>
                    </tr>
                    <tr>
                      <td>yoo-radious[size]</td>
                      <td className="text-left w-50">Radious helper classNamees where [size] can accept 1 to 10. Example: yoo-radious1, yoo-radious10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="yoo-height-b35 yoo-height-lg-b35"></div>
            <h4>Javascript</h4>
            <p>We are using jQeury. All custom jQuery and plugin initialize code are written in iDashboard.js (there is a separate file for chart and svg map initialize) file. And all are function-based. Like if you did not want any JS block you just remove or comment that function.</p>
            <p>For SVG Maps, we are creating an svg-map folder. Please take your desired file. We also create an <a href="svgmaps.html">SVG map</a> preview page.</p>
            <div className="yoo-card yoo-style1">
              <div className="yoo-table yoo-style1 yoo-type1 table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="w-50">Function</th>
                      <th className="text-left w-50">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-50">mainMenu()</td>
                      <td className="text-left w-50">Initialize Main Menu.</td>
                    </tr>
                    <tr>
                      <td className="w-50">mobileMenu()</td>
                      <td className="text-left w-50">Initialize Mobile Menu.</td>
                    </tr>
                    <tr>
                      <td className="w-50">sideBarHeader()</td>
                      <td className="text-left w-50">Initialize Sidebar Menu.</td>
                    </tr>
                    <tr>
                      <td className="w-50">stickyHeader()</td>
                      <td className="text-left w-50">Initialize Sticky Header.</td>
                    </tr>
                    <tr>
                      <td className="w-50">calendarInt()</td>
                      <td className="text-left w-50">Initialize Calender Plugin.</td>
                    </tr>
                    <tr>
                      <td className="w-50">nicescrollInt()</td>
                      <td className="text-left w-50">Initialize Nice Scroll.</td>
                    </tr>
                    <tr>
                      <td className="w-50">customToggleInt()</td>
                      <td className="text-left w-50">Initialize Custom Toggle Button.</td>
                    </tr>
                    <tr>
                      <td className="w-50">bootstrapInt()</td>
                      <td className="text-left w-50">Bootstrap Element Initialize</td>
                    </tr>
                    <tr>
                      <td className="w-50">checkMark()</td>
                      <td className="text-left w-50">For Custome Check Box</td>
                    </tr>
                    <tr>
                      <td className="w-50">formField()</td>
                      <td className="text-left w-50">For iOS Form Style</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="yoo-height-b35 yoo-height-lg-b35"></div>
            <h4>Color Palettes</h4>
            <p>All color comes from SASS variable, if you would like to use your own color pallet, just go to variables.scss file and replace color to your own color. The compiler will change all colors to your color.</p>
            <div className="yoo-height-b35 yoo-height-lg-b35"></div>
            <h4>Customer Support</h4>
            <p>After buying if you are facing any issues or you can not understand any part you can request for support. Our dedicated support team will assist you within Two Business Day.</p>
          </div>
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

export default Customer;
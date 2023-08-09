import React, { useState } from "react";
import Logo from "../../zinzuu_final_logo.png";
import {API_PARTNER} from "../../constants/AppConstants";
import axios from 'axios';

async function getUserRole(roleId) { 
  let res = await axios.post(API_PARTNER + 'partner/get/role/'+roleId, {});
  let roleResult = res.data;
  return roleResult;
}
async function loginUser(credentials) {
  let successLogin = { success: false };
  let res = await axios.post(API_PARTNER + 'partner/auth/login', { username : credentials.username, password : credentials.password});
  let loginResult = res.data;
  if (loginResult) {
    let successLoginResult = [{ success: true }];
    // eslint-disable-next-line no-use-before-define
    let userRole = await getUserRole(loginResult.role);
    successLogin = [...successLoginResult, ...[loginResult], ...[userRole.result]];
  }
  return successLogin;
}

const Login = ({setToken}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token[0] && token[0].success === true) {
       setToken(token);
       window.location.reload();
    }
  };

  let LoginTemplate;

  LoginTemplate = (
    <>
      <div className="yoo-login-wrap yoo-style1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="yoo-vertical-middle">
                <div className="yoo-vertical-middle-in">
                  <div className="yoo-signup-img yoo-style1">
                    <img src={Logo} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="yoo-vertical-middle">
                <div className="yoo-vertical-middle-in">
                  <form onSubmit={handleSubmit} className="yoo-form yoo-style1">
                    <h2 className="yoo-form-title">Sign in to continue</h2>
                    <div className="yoo-form-subtitle">
                      Don’t have an account?{" "}
                      <a href="/" className="yoo-form-btn yoo-style2">
                        Sign up
                      </a>
                    </div>
                    <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                    <div className="yoo-form-separator">Or</div>
                    <div className="yoo-height-b15 yoo-height-lg-b15"></div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group level-up form-group-md">
                          <label htmlFor="email">Username</label>
                          <input
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group level-up form-group-md">
                          <label htmlFor="password">Password</label>
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="yoo-forget-pass-wrap">
                            <div className="custom-control custom-checkbox">
                              <input
                                className="custom-control-input"
                                type="checkbox"
                                id="gridCheck"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="gridCheck"
                              >
                                <span className="custom-control-shadow"></span>
                                Remember me
                              </label>
                            </div>
                            <a href="/" className="yoo-form-btn yoo-style2">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      style={{ border: "none" }}
                      className="yoo-form-btn yoo-style1 yoo-color1 yoo-form-btn yoo-style2 yoo-type1"
                    >
                      <span>Sign In</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return LoginTemplate;
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

export default Login;

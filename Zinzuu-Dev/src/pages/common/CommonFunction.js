import { httpClientEmail } from "../../constants/ApiEmail";
import { SEND_EMAIL } from "../../constants/AppConstants";
import { ToastsStore } from "react-toasts";
import { renderEmail } from "react-html-email";

export const sendEmail = async (name, email, key) => {
  try {
    let formModel = {
      email: email,
      body: emailHTML(name, key),
      subject: "Please complete your National's VIP club registration",
    };
    await httpClientEmail
      .post(SEND_EMAIL, formModel)
      .then((res) => {
        if (res.data.statusCode === 200) {
          ToastsStore.success("Email Sent Successfully.");
        }
      })
      .catch((err) => {
        ToastsStore.error("something went wrong");
      });
  } catch (err) {
    ToastsStore.error("something went wrong");
  }
};

export const sendThanksEmail = async (email, name) => {
  try {
    let formModel = {
      email: email,
      body: thanksEmailHTML(name),
      subject: "Please complete your National's VIP club registration",
    };
    await httpClientEmail
      .post(SEND_EMAIL, formModel)
      .then((res) => {
        if (res.data.statusCode === 200) {
          ToastsStore.success("Email Sent Successfully");
        }
      })
      .catch((err) => {
        ToastsStore.error("something went wrong");
      });
  } catch (err) {
    ToastsStore.error("something went wrong");
  }
};

export const resetPasswordEmail = async (name, email, key) => {
  try {
    let formModel = {
      email: email,
      body: resetPasswordHTML(name, key),
      subject: "Please complete your National's VIP club registration",
    };
    await httpClientEmail
      .post(SEND_EMAIL, formModel)
      .then((res) => {
        if (res.data.statusCode === 200) {
          ToastsStore.success("Email with reset password link has been sent.");
        }
      })
      .catch((err) => {
        ToastsStore.error("something went wrong");
      });
  } catch (err) {
    ToastsStore.error("something went wrong");
  }
};

export const referalEmail = async (data) => {
  try {
    let formModel = {
      email: data.email,
      body: referalEmailHTML(data.name,),
      subject: "Referal link for  National's VIP club registration",
    };
    await httpClientEmail
      .post(SEND_EMAIL, formModel)
      .then((res) => {
        if (res.data.statusCode === 200) {
          ToastsStore.success("Email with referal link has been sent.");
        }
      })
      .catch((err) => {
        ToastsStore.error("something went wrong");
      });
  } catch (err) {
    ToastsStore.error("something went wrong");
  }
};

const emailHTML = (val, key) =>
  renderEmail(
    <div>
      Dear {val},<p>Please click on the below link to complete your profile</p>
      <a href={window.location.origin.toString() + `/customer/update/${key}`}>
        click here
      </a>
      <p>Sincerely,</p>
      <p>National's VIP Club</p>
    </div>
  );

const thanksEmailHTML = (val) =>
  renderEmail(
    <div>
      Dear {val},<p>Welcome to National's VIP club.</p>
      <p>Sincerely,</p>
      <p>National's VIP Club</p>
    </div>
  );

const resetPasswordHTML = (val, key) =>
  renderEmail(
    <div>
      Dear {val},<p>Please click on the below link to Reset your password</p>
      <a
        href={
          window.location.origin.toString() + `/customer/reset-password/${key}`
        }
      >
        click here
      </a>
      <p>Sincerely,</p>
      <p>National's VIP Club</p>
    </div>
  );

const referalEmailHTML = (name) =>
  renderEmail(
    <div>
      Dear {name},<p>Please click on the below link to join National's VIP club</p>
      <a
        href={
          window.location.origin.toString() + `/customer/register/1gdsfg6fdgsdf58fd`
        }
      >
        click here
      </a>
      <p>Sincerely,</p>
      <p>National's VIP Club</p>
    </div>
  );

import React from "react";
import Logo from "../components/Logo";

function ForgotPassword() {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          {/* <!-- Forgot Password --> */}
          <div className="card">
            <div className="card-body">
              <Logo />
              <h4 className="mb-2">Forgot Password? 🔒</h4>
              <p className="mb-4">
                Enter your email and we'll send you instructions to reset your
                password
              </p>
              <form
                id="formAuthentication"
                className="mb-3"
                action="index.html"
                method="POST"
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoFocus
                  />
                </div>
                <button className="btn btn-primary d-grid w-100">
                  Send Reset Link
                </button>
              </form>
              <div className="text-center">
                <a
                  href="auth-login-basic.html"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /Forgot Password --> */}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

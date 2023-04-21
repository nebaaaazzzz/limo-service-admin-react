import React from "react";
import userAvatar from "../assets/img/avatars/1.png";
import Menu from "../components/Menu/Menu";
import Search from "../components/Search";
const countries = [
  "Australia",
  "Bangladesh",
  "Belarus",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Israel",
  "Italy",
  "Japan",
  "Korea",
  "Mexico",
  "Philippines",
  "Poland",
  "Portugal",
  "Russia",
  "Saudi Arabia",
  "Spain",
  "Thailand",
  "Turkey",
];
const currencies = ["USD", "Pound", "Euro", "Bitcoin"];
const languages = ["English", "French", "German", "Portuguese"];
const timeZones = [
  "UTC-12:00",
  "UTC-11:00",
  "UTC-10:00",
  "UTC-09:00",
  "UTC-08:00",
  "UTC-07:00",
  "UTC-06:00",
  "UTC-05:00",
  "UTC-04:00",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC±00:00",
  "UTC+01:00",
  "UTC+02:00",
];
function Account() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}
        <Menu />
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div className="layout-page">
          {/* <!-- Navbar --> */}

          <Search />

          {/* <!-- / Navbar --> */}

          {/* <!-- Content wrapper --> */}
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light">Account Settings /</span>{" "}
                Account
              </h4>

              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-pills flex-column flex-md-row mb-3">
                    <li className="nav-item">
                      <a className="nav-link active" href="javascript:void(0);">
                        <i className="bx bx-user me-1"></i> Account
                      </a>
                    </li>
                  </ul>
                  <div className="card mb-4">
                    <h5 className="card-header">Profile Details</h5>
                    {/* <!-- Account --> */}
                    <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src={userAvatar}
                          alt="user-avatar"
                          className="d-block rounded"
                          height="100"
                          width="100"
                          id="uploadedAvatar"
                        />
                        <div className="button-wrapper">
                          <label
                            htmlFor="upload"
                            className="btn btn-primary me-2 mb-4"
                            tabIndex={0}
                          >
                            <span className="d-none d-sm-block">
                              Upload new photo
                            </span>
                            <i className="bx bx-upload d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              className="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            className="btn btn-outline-secondary account-image-reset mb-4"
                          >
                            <i className="bx bx-reset d-block d-sm-none"></i>
                            <span className="d-none d-sm-block">Reset</span>
                          </button>

                          <p className="text-muted mb-0">
                            Allowed JPG, GIF or PNG. Max size of 800K
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <form
                        id="formAccountSettings"
                        method="POST"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value="John"
                              autoFocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              id="lastName"
                              value="Doe"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="email" className="form-label">
                              E-mail
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value="john.doe@example.com"
                              placeholder="john.doe@example.com"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="organization"
                              className="form-label"
                            >
                              Organization
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              name="organization"
                              value="ThemeSelection"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="phoneNumber">
                              Phone Number
                            </label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">US (+1)</span>
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                placeholder="202 555 0111"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="address" className="form-label">
                              Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              name="address"
                              placeholder="Address"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="state" className="form-label">
                              State
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="state"
                              name="state"
                              placeholder="California"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="zipCode" className="form-label">
                              Zip Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zipCode"
                              name="zipCode"
                              placeholder="231465"
                              maxLength={6}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="country">
                              Country
                            </label>
                            <Select options={countries} label="Select" />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="language" className="form-label">
                              Language
                            </label>
                            <Select
                              label="Select Language"
                              options={languages}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="timeZones" className="form-label">
                              Timezone
                            </label>
                            <Select
                              label="Select Timezone"
                              options={timeZones}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="currency" className="form-label">
                              Currency
                            </label>
                            <Select
                              label="Select Currency"
                              options={currencies}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Save changes
                          </button>
                          <button
                            type="reset"
                            className="btn btn-outline-secondary"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* <!-- /Account --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}
function Select({ options, label }: { options: string[]; label: string }) {
  return (
    <select id="country" className="select2 form-select">
      <option value="">{label}</option>
      {options.map((opt: string) => {
        return <option value={opt}>{opt}</option>;
      })}
    </select>
  );
}
export default Account;

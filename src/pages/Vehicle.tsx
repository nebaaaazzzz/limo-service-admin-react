import userAvatar from "../assets/img/avatars/1.png";
import Select from "../components/Select";
const currencies = ["SUV", "SEDAN", "VAN", "BUS"];
function Vehicle() {
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Admin/</span> Vehicle
      </h4>

      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <h5 className="card-header">Vehicle Details</h5>
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
                    <span className="d-none d-sm-block">Choose new photo</span>
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
                      Vehicle Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="enter vehicle name"
                      autoFocus
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Vehicle Model
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="enter vehicle model"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <Select
                      label="Type"
                      selectLabel="Select Type"
                      options={currencies}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="zipCode" className="form-label">
                      Cost perday
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="costPerday"
                      name="zipCode"
                      placeholder="231$"
                      maxLength={6}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="zipCode" className="form-label">
                      Passenger size
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="passengerSize"
                      name="zipCode"
                      placeholder="20"
                      maxLength={6}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    placeholder="vehicle description here...."
                  ></textarea>
                </div>
                <div className="mt-2">
                  <button type="submit" className="btn btn-primary me-2">
                    Upload
                  </button>
                </div>
              </form>
            </div>
            {/* <!-- /Account --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicle;

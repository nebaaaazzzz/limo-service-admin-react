import React from "react";
import paypalImg from "../assets/img/icons/unicons/paypal.png";

function Dashboard() {
  return (
    <>
      <div className="row mb-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <div className="col-md-6 col-lg-4 mt-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src={paypalImg}
                        alt="Credit Card"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt4"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          View More
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="d-block mb-1">Payments</span>
                  <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                  <small className="text-danger fw-semibold">
                    <i className="bx bx-down-arrow-alt"></i> -14.82%
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;

import { Link } from "react-router-dom";

const reservations = [
  {
    vehicleName: "Toyota",
    vehicleModel: "2021",
    customerName: "Daniel",
    status: "completed",
  },
  {
    vehicleName: "Toyota",
    vehicleModel: "2022",
    customerName: "Yohannes",
    status: "completed",
  },
  {
    vehicleName: "Toyota",
    vehicleModel: "2023",
    customerName: "Tolosa",
    status: "completed",
  },
  {
    vehicleName: "Toyota",
    vehicleModel: "2024",
    customerName: "Demerew",
    status: "completed",
  },
];
function Bookings() {
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Admin/</span> Book
      </h4>

      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Vehicle Name</th>
                <th>Vehicle Model</th>
                <th>Customer Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {reservations.map(
                ({ vehicleName, vehicleModel, customerName, status }, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <i className="fab fa-react fa-lg text-info me-3"></i>{" "}
                        <strong>{vehicleName}</strong>
                      </td>
                      <td>{vehicleModel}</td>
                      <td>{customerName}</td>
                      <td>
                        <span className="badge bg-label-success me-1">
                          {status}
                        </span>
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <Link
                              to={`/reservation/${i}`}
                              className="dropdown-item"
                            >
                              <i className="bx bx-edit-alt me-1"></i> Edit
                            </Link>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <i className="bx bx-trash me-1"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bookings;

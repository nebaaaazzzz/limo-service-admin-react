import React from "react";
import Select from "../components/Select";
const status = ["PENDING", "COMPLETED", "REJECTED"];
const vehicle = [
  {
    title: "Name",
    value: "Toyota",
  },
  {
    title: "Model",
    value: "2021",
  },
  {
    title: "Price per day",
    value: "20",
  },
  {
    title: "Type",
    value: "Sedan",
  },
  {
    title: "Passenger Size",
    value: "10",
  },
  {
    title: "Description",
    value:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];
const customer = [
  {
    title: "First Name",
    value: "Daniel",
  },
  {
    title: "Last Name",
    value: "Daniel",
  },
  {
    title: "Phone Number",
    value: "0923989471",
  },
  {
    title: "Email",
    value: "neba@gmail.com",
  },
  {
    title: "from Address",
    value: "Daniel",
  },
  {
    title: "to Address",
    value: "Daniel",
  },
  {
    title: "Lugggage Count",
    value: "5+",
  },
  {
    title: "Person Count",
    value: "10+",
  },
  {
    title: "journeyDate",
    value: "2021-1-12",
  },
  {
    title: "Description",
    value:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];
function Booking() {
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Admin /</span> Reservation
      </h4>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <div className="mb-3 col-md-2">
                <Select
                  selectLabel="Select"
                  options={status}
                  label="Reservation Status"
                />
              </div>
              <div id="formAccountSettings" className="row">
                <div className="col">
                  <h5 className="fw-bold py-3 mb-2">Customer Detail</h5>
                  {customer.map(({ title, value }) => {
                    return <DetailRow title={title} value={value} />;
                  })}
                </div>
                <div className="col">
                  <h5 className="fw-bold py-3 mb-2">Vehicle Detail</h5>
                  {vehicle.map(({ title, value }) => {
                    return <DetailRow title={title} value={value} />;
                  })}
                </div>
              </div>
            </div>
            {/* <!-- /Account --> */}
          </div>
        </div>
      </div>
    </>
  );
}
function DetailRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="col-md-10">
      <hr />
      <span className="fw-bold">
        {title} :<span className="text-muted fw-light"> {value}</span>{" "}
      </span>
    </div>
  );
}
export default Booking;

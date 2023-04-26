import React from "react";
import paypalImg from "../assets/img/icons/unicons/chart.png";
import { getDashboardStat } from "../api";
import { useQuery } from "react-query";

const keys = [
  {
    key: "numberOfNewReservation",
    label: "New Reservations",
  },
  {
    key: "numberOfReservation",
    label: "Total Reservations",
  },
  {
    key: "numberOfPendingReservation",
    label: "Pending Reservations",
  },
  {
    key: "numberOfCompletedReservation",
    label: "Completed Reservations",
  },
  {
    key: "numberOfRejectedReservation",
    label: "Rejected Reservations",
  },
  {
    key: "numberOfBlogs",
    label: "Blogs",
  },
  {
    key: "numberOfVehicle",
    label: "Vehicles",
  },
];
function Dashboard({}) {
  const { data, isLoading, isError } = useQuery("stats", getDashboardStat);
  // console.log(": ", isLoading);
  // console.log(" :  ", isError);
  if (isLoading) return <p>loading....</p>;
  return (
    <>
      <div className="row mb-5">
        {keys.map(({ key, label }) => {
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
                  </div>
                  <span className="d-block mb-1">{label}</span>
                  <h3 className="card-title text-nowrap mb-2">{data[key]}</h3>
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

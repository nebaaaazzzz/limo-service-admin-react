import React, { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getReservation, updateReservation } from "../api";
import { FullScreenSpinner } from "../components/Spinner";
type Status = "PENDING" | "COMPLETED" | "REJECTED";
const status = ["PENDING", "COMPLETED", "REJECTED"];
const vehicle = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Model",
    key: "model",
  },
  {
    title: "Price per day",
    key: "pricePerDay",
  },
  {
    title: "Type",
    key: "type",
  },
  {
    title: "Passenger Size",
    key: "passengerSize",
  },
  {
    title: "Description",
    key: "description",
  },
];
const customer = [
  {
    title: "First Name",
    key: "firstName",
  },
  {
    title: "Last Name",
    key: "lastName",
  },
  {
    title: "Phone Number",
    key: "phoneNumber",
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "from Address",
    key: "fromAddress",
  },
  {
    title: "to Address",
    key: "toAddress",
  },
  {
    title: "Lugggage Count",
    key: "luggageCount",
  },
  {
    title: "Person Count",
    key: "personCount",
  },
  {
    title: "journeyDate",
    key: "journeyDate",
  },
  {
    title: "Description",
    key: "description",
  },
];
function Booking() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const mutation = useMutation(["reservation", id], updateReservation);
  const { data, isLoading } = useQuery(
    ["reservation", id],
    () => getReservation(id as string),
    {
      enabled: Boolean(id),
    }
  );
  const [selectValue, setSelectValue] = useState<Status>();
  function handeChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectValue(e.target.value as Status);
  }
  useEffect(() => {
    if (data) {
      setSelectValue(data["status"]);
    }
  }, [data]);
  if (mutation.isSuccess) {
    queryClient.refetchQueries(["reservation", id]);
    queryClient.refetchQueries(["reservations"]);
    mutation.reset();
    navigate("/reservations");
  }
  if (isLoading || mutation.isLoading) return <FullScreenSpinner />;
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
                  handleChange={handeChange}
                  value={selectValue}
                  selectLabel="Select"
                  options={status}
                  label="Reservation Status"
                />
              </div>
              <div className="mb-3 col-md-2">
                <button
                  className="btn btn-primary"
                  disabled={mutation.isLoading || !selectValue}
                  onClick={() => {
                    mutation.mutate({
                      id: id as string,
                      status: selectValue as Status,
                    });
                  }}
                >
                  Save
                </button>
              </div>
              <div id="formAccountSettings" className="row">
                <div className="col">
                  <h5 className="fw-bold py-3 mb-2">Customer Detail</h5>
                  {customer.map(({ title, key }) => {
                    return <DetailRow title={title} value={data[key]} />;
                  })}
                </div>
                <div className="col">
                  <h5 className="fw-bold py-3 mb-2">Vehicle Detail</h5>
                  {vehicle.map(({ title, key }) => {
                    return (
                      <DetailRow title={title} value={data["vehicle"][key]} />
                    );
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
function Select({
  options,
  label,
  selectLabel,
  value,
  handleChange,
}: {
  options: string[];
  label: string;
  value: Status | undefined;
  selectLabel: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <label htmlFor="currency" className="form-label">
        {label}
      </label>
      <select
        onChange={handleChange}
        id="country"
        value={value}
        className={`select2  form-select `}
      >
        {options.map((opt: string) => {
          return (
            <option style={{ textTransform: "capitalize" }} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default Booking;

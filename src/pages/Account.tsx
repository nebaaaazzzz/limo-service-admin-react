import React from "react";
import userAvatar from "../assets/img/avatars/1.png";
import Menu from "../components/Menu/Menu";
import Search from "../components/Search";
import Select from "../components/Select";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { updateProfile } from "../api";
import { yupResolver } from "@hookform/resolvers/yup";
function Account() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  // const { data, isLoading } = useQuery(
  //   ["vehicle", id],
  //  updateProfile,
  //   {
  //     enabled: Boolean(id),
  //   }
  // );
  // const {
  //   register,
  //   setValue,
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     model: "",
  //     description: "",
  //     // speed: "",
  //     type: "",
  //     pricePerDay: "",
  //     passengerSize: "",
  //     img: "",
  //   },
  //   resolver: yupResolver(id ? vehicleUpdateSchema : vehiclePostSchema),
  // });
  // useEffect(() => {
  //   //THIS IS FOR UPDATE FORM
  //   setValue("name", data ? data?.name : "");
  //   setValue("model", data ? data?.model : "");
  //   setValue("description", data ? data?.description : "");
  //   // setValue("speed", data ? data?.speed : "");
  //   setValue("type", data ? data?.type : "");
  //   setValue("pricePerDay", data ? data?.pricePerDay : "");
  //   setValue("passengerSize", data ? data?.passengerSize : "");
  // }, [data]);
  // const imgRef = useRef<HTMLImageElement>(null);
  // const fileRef = useRef<HTMLInputElement>(null);
  // const { ref, ...rest } = register("img");
  // const postMutation = useMutation("postvechile", postVehicle);
  // const updateMutation = useMutation("updatevehicle", updateVehicle);
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Account Settings /</span> Account
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
              <form
                id="formAccountSettings"
                method="POST"
                onSubmit={(e) => e.preventDefault()}
              >
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
                      <span className="d-none d-sm-block">Upload photo</span>
                      <i className="bx bx-upload d-block d-sm-none"></i>
                      <input
                        type="file"
                        id="upload"
                        className="account-file-input"
                        hidden
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextInput
                      id="firstName"
                      label="First Name"
                      type={"text"}
                    />
                    <TextInput id="lastName" label="Last Name" type={"text"} />
                    <TextInput id="email" label="Email Name" type={"text"} />
                  </div>
                  <div className="col">
                    <TextInput
                      id="oldPassword"
                      label="Old Password"
                      type={"text"}
                    />
                    <TextInput id="email" label="New Password" type={"text"} />
                    <TextInput
                      id="email"
                      label="Confirm Password"
                      type={"text"}
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <button type="submit" className="btn btn-primary me-2">
                    Save changes
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

function TextInput({
  label,
  id,
  type,
}: {
  label: string;
  id: string;
  type: string;
}) {
  return (
    <div className="mb-3 col-md-8">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input className="form-control" placeholder={label} type={type} id={id} />
    </div>
  );
}

export default Account;

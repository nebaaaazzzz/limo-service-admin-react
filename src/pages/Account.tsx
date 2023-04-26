import userAvatar from "../assets/img/avatar.png";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { changePassword, updateProfile } from "../api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { changePasswordSchema, userUpdateProfileSchema } from "../utils/schema";
import { useEffect, useRef } from "react";
function Account() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const me = queryClient.getQueriesData("getme");
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: me[0][1]["firstName"],
      lastName: me[0][1]["lastName"],
      email: me[0][1]["email"],
      img: "",
    },
    resolver: yupResolver(userUpdateProfileSchema),
  });
  useEffect(() => {
    //THIS IS FOR UPDATE FORM
    setValue("firstName", me[0][1]["firstName"]);
    setValue("lastName", me[0][1]["lastName"]);
    setValue("email", me[0][1]["email"]);
  }, [me]);
  const imgRef = useRef<HTMLImageElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const { ref, ...rest } = register("img");
  // const postMutation = useMutation("postvechile", postVehicle);
  // const updateMutation = useMutation("updatevehicle", updateVehicle);
  return (
    <>
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Account Settings /</span> Account
      </h4>

      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <h5 className="card-header">Profile Details</h5>
            {/* <!-- Account --> */}
            <div className="card-body">
              <div className="row">
                <form
                  className="col"
                  id="formAccountSettings"
                  method="POST"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="d-flex align-items-start align-items-sm-center gap-4">
                    <img
                      src={
                        me[0][1]["img"]
                          ? BASE_URL + me[0][1]["img"]
                          : userAvatar
                      }
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
                        <span className="d-none d-sm-block">Select photo</span>
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
                  <div className="col">
                    {/* <Controller>

                    </Controller> */}
                    <TextInput
                      id="firstName"
                      label="First Name"
                      type={"text"}
                    />
                    <TextInput id="lastName" label="Last Name" type={"text"} />
                    <TextInput id="email" label="Email Name" type={"text"} />
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-2">
                        Save changes
                      </button>
                    </div>
                  </div>
                </form>
                <ChangePassword />
              </div>
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
  isError,
  ...rest
}: {
  label: string;
  id: string;
  isError: boolean;
  type: string;
}) {
  console.log(isError);
  return (
    <div className="mb-3  col-md-8">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        className={`form-control  ${isError ? "border-danger" : ""}`}
        {...rest}
        placeholder={label}
        type={type}
        id={id}
      />
    </div>
  );
}
function ChangePassword() {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(changePasswordSchema),
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation("changePassword", changePassword);
  const onSubmit = function (data: any) {
    mutation.mutate({
      oldPassword: data.oldPassword as string,
      newPassword: data.newPassword as string,
      confirmPassword: data.confirmPassword as string,
    });
  };
  if (mutation.isSuccess) {
    (async () => {
      queryClient.refetchQueries("getme");
      navigate("/");
    })();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col">
      <Controller
        name="oldPassword"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput
            id="oldPassword"
            label="Old Password"
            isError={Boolean(errors.oldPassword)}
            type={"password"}
            {...field}
          />
        )}
      />
      <Controller
        name="newPassword"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput
            id="newPassword"
            label="New Password"
            type={"password"}
            isError={Boolean(errors.newPassword)}
            {...field}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput
            id="confirmPassword"
            isError={Boolean(errors.confirmPassword)}
            label="Confirm Password"
            type={"password"}
            {...field}
          />
        )}
      />
      <div className="mt-2">
        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </div>
    </form>
  );
}
export default Account;

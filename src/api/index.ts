import * as ax from "axios";
const BASE_URL = "https://limo-backend.onrender.com/";
const axios = ax.default.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
export async function getMe() {
  const { data } = await axios.get("/me");
  return data;
}
export async function getDashboardStat() {
  const { data } = await axios.get("/stat");
  return data;
}
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data } = await axios.post(
    "/auth/login",
    { email, password },
    {
      withCredentials: true,
    }
  );
  return data;
}

/*API REQUEST RELATED TO BLOG */
export async function postBlog({
  title,
  content,
  img,
}: {
  title: string;
  content: string;
  img: File;
}) {
  const { data } = await axios.post(
    "/blog",
    { title, content, img },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
}
export async function updateBlog({
  id,
  title,
  content,
  img,
}: {
  title: string;
  content: string;
  img: File;
  id: string;
}) {
  if (img) {
    const { data } = await axios.patch(
      `/blog/${id}`,
      { title, content, img },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } else {
    const { data } = await axios.patch(
      `/blog/${id}`,
      { title, content },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }
}
export async function getBlogs(page = 1) {
  const { data } = await axios.get(`/blog?page=${page}`);
  return data;
}
export async function getBlog(id: string) {
  const { data } = await axios.get(`/blog/${id}`);
  return data;
}
export async function deleteBlog(id: string) {
  const { data } = await axios.delete(`/blog/${id}`);
  return data;
}
/*API REQUEST RELATED TO BLOG END */

/*API REQUEST RELATED TO VEHICLE */
export async function postVehicle({
  name,
  model,
  description,
  speed,
  type,
  pricePerDay,
  passengerSize,
  img,
  automatic,
  gpsNavigation,
  heatedSeat,
}: {
  name: string;
  model: string;
  description: string;
  speed: number;
  type: string;
  pricePerDay: string;
  passengerSize: string;
  img: File;
  automatic: number;
  gpsNavigation: number;
  heatedSeat: number;
}) {
  const { data } = await axios.post(
    "/vehicle",
    {
      name,
      model,
      description,
      speed,
      type,
      pricePerDay,
      passengerSize,
      img,
      automatic,
      gpsNavigation,
      heatedSeat,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
}
export async function updateVehicle({
  name,
  id,
  model,
  description,
  speed,
  type,
  pricePerDay,
  passengerSize,
  img,
  automatic,
  gpsNavigation,
  heatedSeat,
}: {
  id: string;
  automatic: number;
  gpsNavigation: number;
  heatedSeat: number;
  name: string;
  model: string;
  description: string;
  speed: number;
  type: string;
  pricePerDay: string;
  passengerSize: string;
  img: File;
}) {
  if (img) {
    const { data } = await axios.patch(
      `/vehicle/${id}`,
      {
        name,
        model,
        description,
        speed,
        type,
        pricePerDay,
        passengerSize,
        img,
        automatic,
        gpsNavigation,
        heatedSeat,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } else {
    const { data } = await axios.patch(
      `/vehicle/${id}`,
      {
        name,
        model,
        description,
        automatic,
        gpsNavigation,
        heatedSeat,
        speed,
        type,
        pricePerDay,
        passengerSize,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }
}
export async function getVehicles(page = 1) {
  const { data } = await axios.get(`/vehicle?page=${page}`);
  return data;
}
export async function getVehicle(id: string) {
  const { data } = await axios.get(`/vehicle/${id}`);
  return data;
}
export async function deleteVehicle(id: string) {
  const { data } = await axios.delete(`/vehicle/${id}`);
  return data;
}
/*API REQUEST RELATED TO BLOG END */

/*API REQUEST RELATED TO Booking */
export async function updateReservation({
  id,
  status,
}: {
  id: string;
  status: "COMPLETED" | "PENDING" | "REJECTED";
}) {
  const { data } = await axios.patch(`/book/${id}`, { status });
  return data;
}
export async function getReservationS(page = 1) {
  const { data } = await axios.get(`/book?page=${page}`);
  return data;
}
export async function getReservation(id: string) {
  const { data } = await axios.get(`/book/${id}`);
  return data;
}
export async function deleteReservation(id: string) {
  const { data } = await axios.delete(`/book/${id}`);
  return data;
}
/*API REQUEST RELATED TO BLOG END */

/*API REQUEST RELATED TO user */

export async function logout() {
  const { data } = await axios.post(`/auth/logout`);
  return data;
}

export async function changePassword({
  oldPassword,
  newPassword,
  confirmPassword,
}: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}) {
  const { data } = await axios.patch(`/user/change-password`, {
    oldPassword,
    newPassword,
    confirmPassword,
  });
  return data;
}
export async function updateProfile({
  firstName,
  lastName,
  email,
  img,
}: {
  firstName: string;
  lastName: string;
  email: string;
  img: File;
}) {
  if (img) {
    const { data } = await axios.patch(
      `/user/update-profile`,
      {
        firstName,
        lastName,
        email,
        img,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } else {
    const { data } = await axios.patch(
      `/user/update-profile`,
      { firstName, lastName, email },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }
}
/*API REQUEST RELATED TO BLOG END */

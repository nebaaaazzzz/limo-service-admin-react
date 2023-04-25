import * as ax from "axios";
const baseURL = "http://localhost:4000/";
const axios = ax.default.create({
  baseURL,
});
export async function getMe() {
  const { data } = await axios.get("/me", {
    withCredentials: true,
  });
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
  title,
  content,
  img,
}: {
  title: string;
  content: string;
  img: File;
}) {
  const { data } = await axios.post(
    "/vehicle",
    { title, content, img },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
}
export async function updateVehicle({
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
      `/vehicle/${id}`,
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
      `/vehicle/${id}`,
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

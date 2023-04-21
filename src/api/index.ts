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
  const { data } = await axios.post("/auth/login", { email, password },{
    withCredentials : true
  });
  return data;
}

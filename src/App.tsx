import { useQuery } from "react-query";
import { getMe } from "./api";
import Router from "./router/index.routes";
import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { auth, setAuth, user, setUser } = useContext(AuthContext);
  const { isError, data, isLoading, error } = useQuery("getme", getMe, {
    retry: false,
    onSuccess: (data) => {
      setAuth(true);
      setUser(data);
    },
  });
  if (isLoading) return <div>"Loading..."</div>;
  return (
    <>
      <Router isAuth={auth} />
    </>
  );
}

export default App;

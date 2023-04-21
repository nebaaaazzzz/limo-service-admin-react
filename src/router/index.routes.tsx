import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoutes from "./Auth.routes";
import NonAuthRoutes from "./NonAuth.routes";
import LoginPage from "../pages/LoginPage";
import Account from "../pages/Account";
import Form from "../pages/Form";

function Router({ isAuth }: { isAuth: boolean }) {
  return (
    <BrowserRouter>
      <Routes>
        {isAuth ? (
          <>
            <Route index element={<Account />} />
            <Route index element={<Account />} />
            <Route index element={<Account />} />
            <Route path="/" element={<Form />} />
          </>
        ) : (
          <Route index element={<LoginPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

{
  /* <Route path="/" element={<App />}>
  <Route index element={<Home />} />
</Route>
<Route element={<PageLayout />}>
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/tos" element={<Tos />} />
</Route>
<Route path="contact-us" element={<Contact />} /> */
}
export default Router;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../components/layout/Root.layout";
import Account from "../pages/Account";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import Booking from "../pages/Booking";
import Bookings from "../pages/Bookings";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import Vehicle from "../pages/Vehicle";
import Vehicles from "../pages/Vehicles";

function Router({ isAuth }: { isAuth: boolean }) {
  return (
    <BrowserRouter>
      <Routes>
        {isAuth ? (
          <Route element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id?" element={<Blog />} />
            <Route path="reservations" element={<Bookings />} />
            <Route path="reservation/:id" element={<Booking />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="vehicle/:id?" element={<Vehicle />} />
            {/* <Route path="/" element={<Form />} /> */}
          </Route>
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

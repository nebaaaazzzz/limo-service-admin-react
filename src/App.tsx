import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [count, setCount] = useState(0);

  return <ErrorPage />;
}

export default App;

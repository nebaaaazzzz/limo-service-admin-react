import { Link } from "react-router-dom";
import LogoImage from "../../assets/react.svg";
function MenuLogo() {
  return (
    <div className="app-brand demo">
      <Link to="/" className="app-brand-link">
        <span className="app-brand-logo demo">
          <img
            src={LogoImage}
            style={{
              objectFit: "contain",
              width: "12rem",
              aspectRatio: "2/1",
            }}
          />
        </span>
      </Link>

      <a
        onClick={(e) => {
          document.documentElement.classList.toggle("layout-menu-expanded");
        }}
        href="javascript:void(0);"
        className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
      >
        <i className="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>
  );
}
export default MenuLogo;

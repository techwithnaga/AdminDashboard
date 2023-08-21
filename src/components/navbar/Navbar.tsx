import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="MasnagaLogo.svg" alt="" />
          <h5>DASHBOARD</h5>
        </div>
      </Link>

      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>

        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;

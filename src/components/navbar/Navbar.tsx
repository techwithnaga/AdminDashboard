import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="MasnagaLogo.svg" alt="" />
        <span>Admin Dashboard </span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/myIcon.png" alt="" />
          <span>Masnaga</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;

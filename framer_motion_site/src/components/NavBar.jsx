import logoImage from "../assets/logo.png";
import "../styles/navbar.css";
import JoinNowButton from "./JoinNowButton";

function NavBar() {
  return (
    <header className="navbar-section shadow-md py-2">
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <a href="#">
              <img src={logoImage} alt="logo.png" className="w-56" />
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul className="header-menus flex items-center gap-4">
              <li className="capitalize font-semibold text-lg">
                <a href="#">home</a>
              </li>
              <li className="capitalize font-semibold text-lg">
                <a href="#">about</a>
              </li>
              <li className="capitalize font-semibold text-lg">
                <a href="#">services</a>
              </li>
              <li className="capitalize font-semibold text-lg">
                <a href="#">pages</a>
              </li>
              <li className="capitalize font-semibold text-lg">
                <a href="#">portfolio</a>
              </li>
              <li className="capitalize font-semibold text-lg">
                <a href="#">blog</a>
              </li>
              <li className="capitalize font-semibold text-lg">
                <a href="#">contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12">
            <JoinNowButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

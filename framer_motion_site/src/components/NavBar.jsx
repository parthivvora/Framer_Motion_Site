import logoImage from "../assets/logo.png";
import apiRoutes from "../constants/apiRoutes";
import "../styles/navbar.css";
import JoinNowButton from "./JoinNowButton";
import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <a href={apiRoutes.HOME}>
          <img src={logoImage} alt="logo.png" className="w-40 sm:w-56" />
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-between flex flex-col items-start gap-4 sm:items-center sm:flex-row"
        >
          <ul className="header-menus flex flex-col gap-4 sm:flex-row sm:items-center sm:mx-auto">
            <li className="capitalize font-semibold text-base sm:text-lg">
              <a href={apiRoutes.HOME}>home</a>
            </li>
            <li className="capitalize font-semibold text-base sm:text-lg">
              <a href={apiRoutes.ABOUT}>about</a>
            </li>
            <li className="capitalize font-semibold text-base sm:text-lg">
              <a href={apiRoutes.SERVICE}>services</a>
            </li>
            <li className="capitalize font-semibold text-base sm:text-lg">
              <a href={apiRoutes.PORTFOLIO}>portfolio</a>
            </li>
            <li className="capitalize font-semibold text-base sm:text-lg">
              <a href={apiRoutes.BLOG}>blog</a>
            </li>
            <li className="capitalize font-semibold text-base sm:text-lg">
              <a href={apiRoutes.CONTACT}>contact us</a>
            </li>
          </ul>
          <JoinNowButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
